import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { images } from '../../assets/images.js';
import { hostel, whatsapp } from '../../data/schoolData.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { Reveal, RevealImage, ease, fadeUp, staggerParent } from '../ui/Reveal.jsx';

export default function HostelSection() {
  return (
    <section id="hostel" className="section-y relative overflow-hidden bg-forest text-ivory" aria-labelledby="hostel-heading">
      <div className="absolute inset-0 dots-light" aria-hidden="true" />
      <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-forest-600/40 blur-[120px]" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading id="hostel-heading" label={hostel.label} title={hostel.heading} description={hostel.description} tone="light" align="left" />
          <motion.ul
            className="mt-10 grid gap-3 sm:grid-cols-2"
            variants={staggerParent(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {hostel.features.map(({ title, icon: Icon }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="group flex items-center gap-3 rounded-2xl border border-ivory/10 bg-ivory/[0.04] px-4 py-3 transition-colors hover:border-ivory/30 hover:bg-ivory/[0.08]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ivory/10 text-clay-light transition-colors group-hover:bg-clay group-hover:text-white">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="text-[0.92rem] font-medium text-ivory/90">{title}</span>
              </motion.li>
            ))}
          </motion.ul>
          <Reveal delay={0.2} className="mt-10">
            <a
              href={whatsapp.withMessage('Hello, I would like to enquire about the Fazeelah hostel / boarding facility.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light group"
            >
              {hostel.cta}
              <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <RevealImage
            src={images.hostelDormitory}
            alt="Students relaxing on yellow-mattress bunk beds in the Fazeelah hostel dormitory"
            shape="arch"
            className="aspect-[4/5] shadow-lift"
            imgClassName="object-[60%_center]"
          />
          <motion.div
            className="absolute -bottom-8 -left-4 w-[55%] overflow-hidden rounded-3xl border-[6px] border-forest shadow-lift sm:-left-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          >
            <img src={images.diningHall} alt="Students enjoying a meal in the dining hall" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
