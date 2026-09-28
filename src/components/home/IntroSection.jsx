import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { exploreCards, intro } from '../../data/schoolData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import SmartLink from '../ui/SmartLink.jsx';
import { Reveal, fadeUp, staggerParent } from '../ui/Reveal.jsx';

export default function IntroSection() {
  return (
    <section className="section-y bg-ivory" aria-labelledby="intro-heading">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="intro-heading" label={intro.label} title={intro.heading} align="left" />
          <Reveal delay={0.1} className="lg:pt-10">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{intro.body}</p>
            <figure className="mt-8 border-l-2 border-clay pl-6">
              <blockquote className="font-serif text-xl italic leading-snug text-forest sm:text-2xl">“{intro.quote}”</blockquote>
            </figure>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {exploreCards.map((c, i) => (
            <motion.li key={c.title} variants={fadeUp} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
              <SmartLink
                link={c.link}
                ariaLabel={`${c.title} — ${c.linkLabel}`}
                className="group relative flex h-full flex-col rounded-3xl border border-forest/[0.08] bg-white p-7 shadow-card transition-all duration-500 hover:border-forest/30 hover:shadow-lift sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-ivory">
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm italic text-ink-soft/60" aria-hidden="true">
                    No. {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-8 text-[1.6rem] font-medium">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{c.description}</p>
                <span className="mt-7 inline-flex items-center gap-2 border-t border-forest/[0.08] pt-5 text-sm font-bold text-forest">
                  {c.linkLabel}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage transition-all duration-300 group-hover:translate-x-1 group-hover:bg-clay group-hover:text-white">
                    <LuArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              </SmartLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
