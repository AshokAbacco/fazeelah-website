import { useEffect, useState } from "react";
import { images } from "../assets/images.js";
import { gallery } from "../data/schoolData.js";
import {
  cloudinaryEnabled,
  fetchTagList,
  imageUrl,
  titleFrom,
  videoPosterUrl,
  videoUrl,
  youtubeId,
} from "../lib/cloudinary.js";

/**
 * Normalised gallery item:
 * { key, type: 'image'|'video'|'youtube', category, title, alt, src, full, poster, videoSrc, youtubeId, ratio, createdAt }
 */

function builtinItems() {
  return gallery.items.map((g) => ({
    key: `local-${g.image}-${g.title}`,
    type: "image",
    category: g.category,
    title: g.title,
    alt: g.alt,
    src: images[g.image],
    full: images[g.image],
    ratio: g.ratio,
    createdAt: 0,
  }));
}

function youtubeItems() {
  return (gallery.youtubeVideos || [])
    .map((v, i) => {
      const id = youtubeId(v.url);
      if (!id) return null;
      return {
        key: `yt-${id}-${i}`,
        type: "youtube",
        category: v.category || "Videos",
        title: v.title || "School video",
        alt: v.title || "School video",
        src: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        poster: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        youtubeId: id,
        ratio: 16 / 9,
        createdAt: Number.MAX_SAFE_INTEGER - i, // keep listed order, before built-ins
      };
    })
    .filter(Boolean);
}

async function cloudItems(signal) {
  if (!cloudinaryEnabled) return [];
  const entries = Object.entries(gallery.cloudTags || {});
  const lists = await Promise.all(
    entries.flatMap(([category, tag]) => [
      fetchTagList("image", tag, signal).then((r) =>
        r.map((x) => ({ ...x, _type: "image", _category: category })),
      ),
      fetchTagList("video", tag, signal).then((r) =>
        r.map((x) => ({ ...x, _type: "video", _category: category })),
      ),
    ]),
  );
  const seen = new Set();
  const out = [];
  for (const r of lists.flat()) {
    const id = `${r._type}:${r.public_id}`;
    if (seen.has(id)) continue; // same file tagged twice → show once
    seen.add(id);
    const title = titleFrom(r, r._category);
    const ratio =
      r.width && r.height
        ? r.width / r.height
        : r._type === "video"
          ? 16 / 9
          : 4 / 3;
    const createdAt = Date.parse(r.created_at) || 0;
    if (r._type === "image") {
      out.push({
        key: `cld-img-${r.public_id}`,
        type: "image",
        category: r._category,
        title,
        alt: `${title} — Fazeelah School`,
        src: imageUrl(r.public_id, r.format, 900),
        full: imageUrl(r.public_id, r.format, 1800),
        ratio,
        createdAt,
      });
    } else {
      out.push({
        key: `cld-vid-${r.public_id}`,
        type: "video",
        category: r._category,
        title,
        alt: `${title} — video`,
        src: videoPosterUrl(r.public_id, 900),
        poster: videoPosterUrl(r.public_id, 1600),
        videoSrc: videoUrl(r.public_id),
        ratio,
        createdAt,
      });
    }
  }
  return out;
}

/**
 * Gallery items by source:
 *  - 'builtin' → the fixed photos that ship with the website (Home page)
 *  - 'cloud'   → admin uploads from Cloudinary (newest first) + YouTube links (Gallery page)
 */
export default function useGalleryItems(source = "cloud") {
  const isCloud = source === "cloud";
  const [state, setState] = useState(() =>
    isCloud
      ? { items: youtubeItems(), loading: cloudinaryEnabled }
      : { items: builtinItems(), loading: false },
  );

  useEffect(() => {
    if (!isCloud || !cloudinaryEnabled) return undefined;
    const ctrl = new AbortController();
    cloudItems(ctrl.signal)
      .then((cloud) => {
        cloud.sort((a, b) => b.createdAt - a.createdAt);
        setState({ items: [...cloud, ...youtubeItems()], loading: false });
      })
      .catch(() => setState((s) => ({ ...s, loading: false })));
    return () => ctrl.abort();
  }, [isCloud]);

  return state;
}
