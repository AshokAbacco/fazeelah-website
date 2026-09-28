import { motion } from 'framer-motion';
import { images } from '../../assets/images.js';
import { principalMessage, school } from '../../data/schoolData.js';
import { Reveal, RevealImage, ease } from '../ui/Reveal.jsx';

export default function PrincipalMessage({ background = 'sage' }) {
  return (
    <section className={`section-y relative overflow-hidden ${background === 'sage' ? 'bg-sage' : 'bg-ivory'}`} aria-labelledby="principal-heading">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <RevealImage
            src={images.diningHall}
            alt="Fazeelah students in uniform sharing a meal together in the school dining hall"
            shape="arch"
            className="aspect-[4/5] shadow-lift"
            imgClassName="object-[35%_center]"
          />
          <motion.div
            className="absolute -bottom-6 -right-4 w-[44%] overflow-hidden rounded-full border-[6px] border-white shadow-lift sm:-right-10"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <img src={images.healthyFood} alt="Young student proudly holding a healthy lunch box" loading="lazy" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>

        <Reveal>
          <p className="eyebrow">{principalMessage.label}</p>
          <h2 id="principal-heading" className="mt-5 text-[2.1rem] font-medium leading-[1.1] sm:text-[2.7rem] lg:text-[3.2rem]">
            {principalMessage.heading}
          </h2>
          <figure className="relative mt-8 rounded-3xl bg-white p-7 shadow-card sm:p-10">
            <span className="absolute -top-7 left-8 font-serif text-[5.5rem] leading-none text-clay" aria-hidden="true">
              “
            </span>
            <blockquote className="font-serif text-[1.2rem] leading-relaxed text-ink sm:text-[1.4rem]">{principalMessage.message}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-forest/10 pt-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage p-1.5">
                <img src={images.crest} alt="" className="h-full w-auto" />
              </span>
              <span>
                <span className="block font-serif text-xl italic text-forest">{principalMessage.signature}</span>
                <span className="mt-0.5 block text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">{school.tagline}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
