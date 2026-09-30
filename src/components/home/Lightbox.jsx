import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + items.length) % items.length);
      if (e.key === "Tab") {
        const root = document.getElementById("lightbox");
        const f = root?.querySelectorAll("button, video, iframe");
        if (!f || !f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          id="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery viewer: ${item.title}`}
          className="fixed inset-0 z-[80] flex flex-col bg-forest-950/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div
            className="flex items-center justify-between px-4 py-4 text-white sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="text-sm font-semibold text-white/70"
              aria-live="polite"
            >
              <span className="text-clay-light">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(items.length).padStart(2, "0")}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-ivory hover:bg-ivory hover:text-forest"
              aria-label="Close image viewer"
            >
              <LuX className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-20">
            <AnimatePresence mode="wait">
              <motion.figure
                key={item.key || item.title}
                className="flex max-h-full flex-col items-center"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                {item.type === "youtube" ? (
                  <div className="aspect-video w-[min(92vw,calc((100dvh-190px)*16/9))] overflow-hidden rounded-xl bg-black shadow-2xl">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                      title={item.title}
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ) : item.type === "video" ? (
                  <video
                    src={item.videoSrc}
                    poster={item.poster}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[calc(100dvh-190px)] w-auto max-w-full rounded-xl bg-black shadow-2xl"
                  >
                    <track kind="captions" />
                  </video>
                ) : (
                  <img
                    src={item.full || item.src}
                    alt={item.alt}
                    className="max-h-[calc(100dvh-190px)] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  />
                )}
                <figcaption className="mt-4 text-center">
                  <span className="block font-serif text-xl text-white sm:text-2xl">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.2em] text-clay-light">
                    {item.category}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index - 1 + items.length) % items.length);
              }}
              className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-ivory hover:text-forest sm:left-6"
              aria-label="Previous image"
            >
              <LuChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index + 1) % items.length);
              }}
              className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-ivory hover:text-forest sm:right-6"
              aria-label="Next image"
            >
              <LuChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
