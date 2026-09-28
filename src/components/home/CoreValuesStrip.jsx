import { motion } from 'framer-motion';
import { coreValues } from '../../data/schoolData.js';
import { fadeUp, staggerParent } from '../ui/Reveal.jsx';

/** Four core values on a white card that overlaps the hero. */
export default function CoreValuesStrip() {
  return (
    <section id="core-values" aria-label="Our core values" className="relative z-10 -mt-14 lg:-mt-16">
      <div className="container-site">
        <motion.ul
          className="grid grid-cols-2 overflow-hidden rounded-3xl border border-forest/[0.08] bg-white shadow-lift lg:grid-cols-4"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {coreValues.map(({ title, icon: Icon }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className={`group flex flex-col items-center gap-3 px-3 py-7 text-center sm:flex-row sm:justify-center sm:gap-4 sm:py-9 sm:text-left
                ${i % 2 === 0 ? 'border-r' : ''} ${i === 1 ? 'lg:border-r' : ''} ${i === 2 ? 'lg:border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} border-forest/[0.08]`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest transition-all duration-500 group-hover:bg-forest group-hover:text-ivory">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-[1.02rem] leading-tight text-ink sm:text-lg">{title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
