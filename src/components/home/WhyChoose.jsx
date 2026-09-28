import { motion } from 'framer-motion';
import { images } from '../../assets/images.js';
import { school, whyChoose } from '../../data/schoolData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { RevealImage, fadeUp, staggerParent } from '../ui/Reveal.jsx';

/** "Designed for Complete Growth" — editorial two-column list of 10 facilities. */
export default function WhyChoose() {
  return (
    <section className="section-y bg-white" aria-labelledby="why-heading">
      <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="why-heading" label={whyChoose.label} title={whyChoose.heading} description={whyChoose.description} align="left" />
          <div className="relative mt-10 hidden max-w-sm lg:block">
            <RevealImage src={images.classroom} alt="A bright, air-conditioned smart classroom with a projector" shape="arch" className="aspect-[4/5] shadow-lift" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-forest px-6 py-5 text-ivory shadow-lift">
              <p className="font-serif text-4xl leading-none">2</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-ivory/70">Acre campus</p>
            </div>
          </div>
          <p className="sr-only">{school.name}</p>
        </div>

        <motion.ol
          className="grid gap-x-10 sm:grid-cols-2"
          variants={staggerParent(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {whyChoose.items.map(({ title, description, icon: Icon }, i) => (
            <motion.li key={title} variants={fadeUp} className="group relative border-t border-forest/10 py-7">
              <span
                className="absolute left-0 top-[-1px] h-[2px] w-0 bg-clay transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest transition-all duration-500 group-hover:border-forest group-hover:bg-forest group-hover:text-ivory">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm italic text-ink-soft/60" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-[1.3rem] font-medium leading-snug">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
