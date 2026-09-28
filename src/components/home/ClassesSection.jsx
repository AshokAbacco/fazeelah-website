import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowRight, LuBookOpen, LuCalendarDays } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { classes, school, whatsapp } from '../../data/schoolData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { Reveal } from '../ui/Reveal.jsx';

/** Nursery → Class VII as a learning-journey stepper (accessible tabs). */
export default function ClassesSection() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const current = classes.items[active];
  const stage = classes.stages[current.stage];
  const n = classes.items.length;

  const onKey = (e) => {
    let next = active;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (active + 1) % n;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (active - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <section className="section-y bg-ivory" aria-labelledby="classes-heading">
      <div className="container-site">
        <SectionHeading id="classes-heading" label={classes.label} title={classes.heading} description={classes.description} />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative">
            {/* progress line (desktop) */}
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-[2px] bg-forest/10 lg:block" aria-hidden="true">
              <motion.div
                className="h-full origin-left bg-clay"
                animate={{ scaleX: active / (n - 1) }}
                transition={{ type: 'spring', stiffness: 120, damping: 22 }}
              />
            </div>
            <div role="tablist" aria-label="Classes offered" className="relative grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-0">
              {classes.items.map((c, i) => {
                const selected = i === active;
                const passed = i <= active;
                return (
                  <button
                    key={c.name}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    role="tab"
                    id={`class-tab-${i}`}
                    aria-selected={selected}
                    aria-controls="class-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={onKey}
                    className={`group flex flex-col items-center gap-3 rounded-2xl px-2 py-4 text-center transition-colors lg:rounded-none lg:py-0 ${
                      selected ? 'bg-white shadow-card lg:bg-transparent lg:shadow-none' : 'hover:bg-white/70 lg:hover:bg-transparent'
                    }`}
                  >
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 font-serif text-base transition-all duration-300 ${
                        selected
                          ? 'scale-110 border-forest bg-forest text-ivory shadow-lift'
                          : passed
                            ? 'border-clay bg-white text-clay'
                            : 'border-forest/15 bg-white text-ink-soft group-hover:border-forest/40'
                      }`}
                    >
                      {c.short}
                    </span>
                    <span className={`text-sm font-bold ${selected ? 'text-forest' : 'text-ink-soft'}`}>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="class-panel"
            role="tabpanel"
            aria-labelledby={`class-tab-${active}`}
            className="relative mt-10 overflow-hidden rounded-3xl border border-forest/[0.08] bg-white shadow-card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 p-7 sm:p-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
              >
                <span className="hidden h-24 w-24 items-center justify-center rounded-b-2xl rounded-t-[48px] bg-sage font-serif text-3xl text-forest md:flex" aria-hidden="true">
                  {current.short}
                </span>
                <div>
                  <p className="eyebrow">{stage.name}</p>
                  <h3 className="mt-3 text-3xl font-medium sm:text-4xl">{current.name}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{stage.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-forest">
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-1.5">
                      <LuCalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> Admissions {school.admissionYear}
                    </li>
                    <li className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-1.5">
                      <LuBookOpen className="h-3.5 w-3.5" aria-hidden="true" /> English Medium
                    </li>
                  </ul>
                </div>
                <a
                  href={whatsapp.withMessage(`Hello, I would like to enquire about admission to ${current.name} for ${school.admissionYear}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent group w-full md:w-auto"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  Enquire for {current.name}
                  <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
