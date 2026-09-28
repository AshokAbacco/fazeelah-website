import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuExpand } from 'react-icons/lu';
import { images } from '../../assets/images.js';
import { gallery } from '../../data/schoolData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import Lightbox from './Lightbox.jsx';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [index, setIndex] = useState(null);

  const visible = useMemo(() => (filter === 'All' ? gallery.items : gallery.items.filter((g) => g.category === filter)), [filter]);
  const close = useCallback(() => setIndex(null), []);

  return (
    <section id="gallery" className="section-y bg-ivory" aria-labelledby="gallery-heading">
      <div className="container-site">
        <SectionHeading id="gallery-heading" label={gallery.label} title={gallery.heading} description={gallery.description} />

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div
              className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-forest/10 bg-white p-1.5 shadow-card [scrollbar-width:none]"
              role="group"
              aria-label="Filter gallery by category"
            >
              {gallery.categories.map((c) => {
                const active = c === filter;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    aria-pressed={active}
                    className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                      active ? 'text-ivory' : 'text-ink-soft hover:text-forest'
                    }`}
                  >
                    {active && (
                      <motion.span layoutId="gallery-filter" className="absolute inset-0 rounded-full bg-forest" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                    )}
                    <span className="relative">{c}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          <AnimatePresence mode="popLayout">
            {visible.map((g, i) => (
              <motion.li
                key={g.title}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-3xl bg-sage text-left"
                  aria-label={`Open image: ${g.title}`}
                >
                  <img
                    src={images[g.image]}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: g.ratio }}
                    className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-md transition-transform duration-500 sm:translate-y-[130%] sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0">
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">{g.category}</span>
                      <span className="mt-0.5 block font-serif text-lg leading-tight text-ink">{g.title}</span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-ivory" aria-hidden="true">
                      <LuExpand className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      <Lightbox items={visible} index={index} onClose={close} onNavigate={setIndex} />
    </section>
  );
}
