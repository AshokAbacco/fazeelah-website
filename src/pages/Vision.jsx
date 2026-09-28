import { motion } from 'framer-motion';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import AdmissionCTA from '../components/AdmissionCTA.jsx';
import { Reveal, RevealImage, fadeUp, staggerParent } from '../components/ui/Reveal.jsx';
import { images } from '../assets/images.js';
import { vision } from '../data/schoolData.js';

export default function Vision() {
  return (
    <>
      <Seo
        title="Our Vision | FAZEELAH ENGLISH MEDIUM SCHOOL"
        description="Nurturing confident and responsible learners — the vision of Fazeelah English Medium School, Dharmavaram: academic excellence, character, confidence and lifelong learning."
        path="/vision"
      />
      <PageHero crumb="Vision" label="Our Vision" title={vision.hero.heading} description={vision.statement.quote} image={images.schoolAerial} imageAlt="Fazeelah School campus at dusk" />

      {/* STATEMENT */}
      <section className="section-y overflow-hidden bg-ivory" aria-labelledby="vision-heading">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <RevealImage src={images.schoolFront} alt="Front view of the Fazeelah School building at dusk" className="aspect-[5/4] shadow-lift" />
          <div>
            <SectionHeading id="vision-heading" label={vision.statement.label} title={vision.statement.heading} align="left" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">{vision.statement.body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-8 rounded-2xl bg-sage px-7 py-6 font-serif text-xl italic leading-snug text-forest sm:text-2xl">
                “{vision.statement.quote}”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VISION PILLARS */}
      <section className="section-y bg-white" aria-labelledby="pillars-heading">
        <div className="container-site">
          <SectionHeading id="pillars-heading" label={vision.pillars.label} title={vision.pillars.heading} description={vision.pillars.description} />
          <motion.ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerParent(0.07)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {vision.pillars.items.map(({ title, description, icon: Icon }, i) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-3xl border border-forest/[0.08] bg-ivory p-7 transition-all duration-500 hover:border-forest hover:bg-forest"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest shadow-card transition-colors duration-500 group-hover:bg-clay group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm italic text-ink-soft/60 group-hover:text-ivory/60" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.35rem] font-medium transition-colors duration-500 group-hover:!text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-ivory/75">{description}</p>
              </motion.li>
            ))}
            <motion.li variants={fadeUp} className="relative hidden overflow-hidden rounded-3xl lg:block">
              <img src={images.studentsCampus} alt="Fazeelah students on the campus lawn" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="campus-life" className="section-y overflow-hidden bg-sage" aria-labelledby="community-heading">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading id="community-heading" label={vision.community.label} title={vision.community.heading} align="left" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">{vision.community.body}</p>
              <p className="mt-6 border-l-2 border-clay pl-5 font-semibold text-forest">{vision.community.note}</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 items-end gap-3 sm:gap-4">
            <RevealImage src={images.hostelDormitory} alt="Students relaxing together in the hostel" shape="arch-2-3" className="aspect-[2/3]" imgClassName="object-[60%_center]" />
            <RevealImage src={images.diningHall} alt="Students sharing a meal in the dining hall" shape="arch-1-2" className="aspect-[2/4]" delay={0.12} />
            <RevealImage src={images.sportsArena} alt="The covered sports arena" shape="arch-2-3" className="aspect-[2/3]" delay={0.24} />
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
