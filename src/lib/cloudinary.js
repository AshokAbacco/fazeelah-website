/**
 * Cloudinary helpers — read-only, public delivery URLs only.
 * No API key or secret is used (or needed) in the browser.
 *
 * Uses Cloudinary's "client-side resource list":
 *   https://res.cloudinary.com/<cloud>/<image|video>/list/<tag>.json
 * which must be enabled once in Cloudinary: Settings → Security →
 * "Restricted media types" → untick "Resource list".
 */

export const CLOUD_NAME = (
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || ""
).trim();
export const cloudinaryEnabled = CLOUD_NAME.length > 0;

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}`;

/** Optimised image URL (auto format/quality, limited width). */
export function imageUrl(publicId, format, width = 900) {
  const ext = format ? `.${format}` : "";
  return `${BASE}/image/upload/f_auto,q_auto,c_limit,w_${width}/v1/${publicId}${ext}`;
}

/** Streamable, optimised video URL. */
export function videoUrl(publicId) {
  return `${BASE}/video/upload/q_auto,vc_auto/v1/${publicId}.mp4`;
}

/** Poster frame (JPG) taken 1s into the video. */
export function videoPosterUrl(publicId, width = 900) {
  return `${BASE}/video/upload/so_1,c_limit,w_${width},q_auto/v1/${publicId}.jpg`;
}

/** Fetch the list of resources with a given tag. Returns [] if none / not enabled. */
export async function fetchTagList(resourceType, tag, signal) {
  if (!cloudinaryEnabled) return [];
  const url = `${BASE}/${resourceType}/list/${encodeURIComponent(tag)}.json`;
  try {
    const res = await fetch(url, { signal, cache: "no-cache" });
    if (!res.ok) return []; // 404 = no files with this tag yet
    const data = await res.json();
    return Array.isArray(data.resources) ? data.resources : [];
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    return [];
  }
}

/** Human-friendly title from the Cloudinary caption/alt, or from the file name. */
export function titleFrom(resource, fallback) {
  const custom = resource?.context?.custom || {};
  const t = custom.caption || custom.alt || custom.title;
  if (t) return String(t);
  const name = String(resource?.public_id || "")
    .split("/")
    .pop()
    .replace(/_[a-z0-9]{6}$/i, "") // strip Cloudinary's random suffix
    .replace(/[-_]+/g, " ")
    .trim();
  return name && !/^[a-z0-9]{15,}$/i.test(name)
    ? name.replace(/\b\w/g, (c) => c.toUpperCase())
    : fallback;
}

/** Extract a YouTube video id from any common link format. */
export function youtubeId(url = "") {
  const m = String(url).match(
    /(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/,
  );
  return m ? m[1] : null;
}
