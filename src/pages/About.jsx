import { motion } from 'framer-motion';
import { LuCheck } from 'react-icons/lu';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import AdmissionCTA from '../components/AdmissionCTA.jsx';
import { Reveal, RevealImage, fadeUp, staggerParent } from '../components/ui/Reveal.jsx';
import { images } from '../assets/images.js';
import { about } from '../data/schoolData.js';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | FAZEELAH ENGLISH MEDIUM SCHOOL, Dharmavaram"
        description="A safe place to learn, grow, and succeed. Discover Fazeelah English Medium School in Dharmavaram — value-based education, individual attention, and a secure semi-boarding & hostel environment."
        path="/about"
      />
      <PageHero
        crumb="About Us"
        label="About Fazeelah"
        title={about.hero.heading}
        description={about.hero.body}
        image={images.schoolSide}
        imageAlt="The Fazeelah School building at dusk"
      />

      {/* OUR STORY */}
      <section className="section-y overflow-hidden bg-ivory" aria-labelledby="story-heading">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-4">
            <RevealImage src={images.schoolAerial} alt="The Fazeelah School building and grounds at dusk" shape="arch-3-5" className="row-span-2 aspect-[3/5] shadow-lift" />
            <RevealImage src={images.healthyFood} alt="Young student holding a healthy lunch box" className="aspect-square shadow-card" delay={0.15} />
            <RevealImage src={images.studentsCampus} alt="Students running and laughing on the campus lawn" shape="circle" className="aspect-square shadow-card" imgClassName="object-[65%_center]" delay={0.25} />
            <motion.div
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-forest px-5 py-3 text-ivory shadow-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="font-serif text-2xl leading-none">2</span>
              <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-ivory/75">
                Acre
                <br />
                campus
              </span>
            </motion.div>
          </div>

          <div>
            <SectionHeading id="story-heading" label={about.story.label} title={about.story.heading} align="left" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">{about.story.body}</p>
            </Reveal>
            <motion.ul className="mt-8 divide-y divide-forest/10 border-y border-forest/10" variants={staggerParent(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {about.story.features.map((f) => (
                <motion.li key={f} variants={fadeUp} className="flex items-center gap-4 py-4 font-medium text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-ivory">
                    <LuCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* WHAT GUIDES US */}
      <section className="section-y bg-white" aria-labelledby="guides-heading">
        <div className="container-site">
          <SectionHeading id="guides-heading" label={about.guides.label} title={about.guides.heading} description={about.guides.description} />
          <motion.ul className="mt-14 grid gap-6 md:grid-cols-3" variants={staggerParent(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {about.guides.items.map(({ title, description, icon: Icon }, i) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center rounded-b-[28px] rounded-t-[200px] border border-forest/[0.08] bg-ivory px-8 pb-10 pt-14 text-center transition-colors duration-500 hover:bg-sage"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-forest shadow-card transition-all duration-500 group-hover:bg-forest group-hover:text-ivory">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-6 font-serif text-sm italic text-clay">0{i + 1}</p>
                <h3 className="mt-1 text-2xl font-medium">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section id="team" className="section-y relative overflow-hidden bg-sage" aria-labelledby="team-heading">
        <div className="absolute inset-0 paper-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" aria-hidden="true" />
        <div className="container-site relative">
          <SectionHeading id="team-heading" label={about.team.label} title={about.team.heading} description={about.team.description} />
          <motion.ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerParent(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
            {about.team.items.map(({ title, description, icon: Icon }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-ivory transition-colors duration-500 group-hover:bg-clay">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-[1.35rem] font-medium">{title}</h3>
                <span className="mt-4 h-px w-10 bg-clay transition-all duration-500 group-hover:w-20" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
