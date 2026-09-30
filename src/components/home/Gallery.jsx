import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowRight, LuExpand, LuPlay } from "react-icons/lu";
import { gallery } from "../../data/schoolData.js";
import useGalleryItems from "../../hooks/useGalleryItems.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import Lightbox from "./Lightbox.jsx";

const isVideo = (g) => g.type === "video" || g.type === "youtube";

/**
 * Campus gallery.
 *
 * @param {'builtin'|'cloud'} [source]
 *    'builtin' → fixed website photos (Home page) + a "View full gallery" button
 *    'cloud'   → admin uploads from Cloudinary + YouTube links (Gallery page)
 */
export default function Gallery({ source = "cloud" }) {
  const isHome = source === "builtin";
  const { items, loading } = useGalleryItems(source);
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(null);

  // Only show tabs that have something in them (always keep "All").
  const tabs = useMemo(
    () =>
      gallery.categories.filter((c) => {
        if (c === "All") return true;
        if (c === "Videos") return items.some(isVideo);
        return items.some((g) => g.category === c);
      }),
    [items],
  );

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    if (filter === "Videos") return items.filter(isVideo);
    return items.filter((g) => g.category === filter);
  }, [items, filter]);

  const visible = filtered;
  const close = useCallback(() => setIndex(null), []);

  return (
    <section
      id="gallery"
      className="section-y bg-ivory"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="gallery-heading"
          label={gallery.label}
          title={gallery.heading}
          description={gallery.description}
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div
              className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-forest/10 bg-white p-1.5 shadow-card [scrollbar-width:none]"
              role="group"
              aria-label="Filter gallery by category"
            >
              {tabs.map((c) => {
                const active = c === filter;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    aria-pressed={active}
                    className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                      active ? "text-ivory" : "text-ink-soft hover:text-forest"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId={`gallery-filter-${isHome ? "home" : "page"}`}
                        className="absolute inset-0 rounded-full bg-forest"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative">{c}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {loading && (
          <p className="mt-6 text-center text-sm text-ink-soft" role="status">
            Loading latest photos…
          </p>
        )}

        <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          <AnimatePresence mode="popLayout">
            {visible.map((g, i) => (
              <motion.li
                key={g.key}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i, 12) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-3xl bg-sage text-left"
                  aria-label={`${isVideo(g) ? "Play video" : "Open image"}: ${g.title}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: g.ratio }}
                    className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  {isVideo(g) && (
                    <span
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-forest shadow-lift transition-transform duration-300 group-hover:scale-110">
                        <LuPlay className="ml-1 h-7 w-7" />
                      </span>
                    </span>
                  )}
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-md transition-transform duration-500 sm:translate-y-[130%] sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0">
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
                        {g.category}
                        {isVideo(g) ? " · Video" : ""}
                      </span>
                      <span className="mt-0.5 block truncate font-serif text-lg leading-tight text-ink">
                        {g.title}
                      </span>
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-ivory"
                      aria-hidden="true"
                    >
                      {isVideo(g) ? (
                        <LuPlay className="h-4 w-4" />
                      ) : (
                        <LuExpand className="h-4 w-4" />
                      )}
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {!loading && visible.length === 0 && (
          <p className="mt-6 text-center text-ink-soft">
            New photos and videos coming soon.
          </p>
        )}

        {isHome && (
          <div className="mt-8 flex justify-center">
            <Link to="/gallery" className="btn-outline group">
              View full gallery
              <LuArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
      <Lightbox
        items={visible}
        index={index}
        onClose={close}
        onNavigate={setIndex}
      />
    </section>
  );
}
