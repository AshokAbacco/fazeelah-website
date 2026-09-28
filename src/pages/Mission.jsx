import { motion } from 'framer-motion';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import AdmissionCTA from '../components/AdmissionCTA.jsx';
import PrincipalMessage from '../components/home/PrincipalMessage.jsx';
import { RevealImage, fadeUp, staggerParent } from '../components/ui/Reveal.jsx';
import { images } from '../assets/images.js';
import { coreValues, mission, school } from '../data/schoolData.js';

export default function Mission() {
  return (
    <>
      <Seo
        title="Our Mission | FAZEELAH ENGLISH MEDIUM SCHOOL"
        description="Empowering every student for lifelong learning — concept-driven academics, character and ethics, a safe nurturing campus, holistic physical development and personalized attention."
        path="/mission"
      />
      <PageHero crumb="Mission" label="Our Mission" title={mission.hero.heading} description={school.tagline} image={images.schoolFront} imageAlt="Fazeelah School main entrance" />

      {/* MISSION POINTS */}
      <section className="section-y bg-ivory" aria-labelledby="mission-heading">
        <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="mission-heading" label={mission.main.label} title={mission.main.heading} align="left" />
            <RevealImage src={images.schoolSide} alt="The Fazeelah School campus building" shape="arch" className="mt-10 aspect-[4/5] max-w-sm shadow-lift" />
          </div>

          <motion.ol className="space-y-4" variants={staggerParent(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {mission.points.map(({ title, description, icon: Icon }, i) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="group grid grid-cols-[auto_1fr] gap-5 rounded-3xl border border-forest/[0.08] bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-forest/25 hover:shadow-lift sm:gap-7 sm:p-8"
              >
                <div className="flex flex-col items-center">
                  <span className="font-serif text-4xl leading-none text-clay sm:text-5xl">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-ivory">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-[1.4rem] font-medium leading-tight">{title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* BRAND PILLARS */}
      <section className="section-y bg-forest" aria-labelledby="brand-pillars-heading">
        <div className="container-site">
          <SectionHeading id="brand-pillars-heading" label={mission.pillars.label} title={mission.pillars.heading} description={mission.pillars.description} tone="light" />
          <motion.ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerParent(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {coreValues.map(({ title, icon: Icon }, i) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center rounded-b-[28px] rounded-t-[160px] border border-ivory/15 bg-ivory/[0.04] px-6 pb-9 pt-12 text-center transition-colors duration-500 hover:bg-ivory"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory/10 text-clay-light transition-colors duration-500 group-hover:bg-forest group-hover:text-ivory">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-6 font-serif text-sm italic text-ivory/50 group-hover:text-clay">Pillar 0{i + 1}</p>
                <h3 className="mt-1 text-2xl font-medium !text-ivory transition-colors duration-500 group-hover:!text-ink">{title}</h3>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <PrincipalMessage background="sage" />
      <AdmissionCTA />
    </>
  );
}
