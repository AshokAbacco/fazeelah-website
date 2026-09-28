import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuGraduationCap,
  LuLandmark,
  LuClock,
  LuPhone,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { images } from "../../assets/images.js";
import { hero, phones, school, whatsapp } from "../../data/schoolData.js";
import { ease } from "../ui/Reveal.jsx";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const facts = [
  { icon: LuGraduationCap, label: "Classes", value: school.classesOffered },
  { icon: LuLandmark, label: "Campus", value: "2-acre campus" },
  { icon: LuClock, label: "Office", value: "Mon–Sat, 9 AM – 5 PM" },
];

/**
 * Home hero — full-width school photograph with a frosted-glass panel
 * holding the text on top of the image. No green used here.
 */
export default function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[720px] flex-col overflow-hidden pt-[76px] lg:min-h-[max(100svh,820px)] lg:pt-[116px]"
      aria-labelledby="hero-heading"
    >
      {/* Full-width background photograph */}
      <motion.img
        src={images.schoolFront}
        alt="Fazeelah School building illuminated at dusk, with its arched main entrance"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        fetchPriority="high"
      />
      {/* Gentle shade so the glass panel reads well; stays neutral (no green) */}
      <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site flex flex-1 items-center justify-center py-10 sm:py-14">
        {/* Glass panel */}
        <motion.div
          className="w-full max-w-[1100px] rounded-[28px] border border-white/30 bg-gradient-to-b from-black/25 to-black/35 p-6 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-[3px] sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.45 },
              },
            }}
          >
            <motion.p
              variants={item}
              className="mx-auto inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-white sm:text-xs"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2B08F] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2B08F]" />
              </span>
              {hero.label}
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-6 text-[2.3rem] font-medium leading-[1.06] !text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)] min-[400px]:text-[2.6rem] sm:text-[3rem] lg:text-[2.9rem] lg:whitespace-nowrap xl:text-[3.4rem]"
            >
              Your Child&apos;s Journey to{" "}
              <span className="italic text-[#F7C3A6]">Success</span> Begins Here
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-5 flex items-center justify-center gap-4"
            >
              <span
                className="h-px w-6 shrink-0 bg-[#F7C3A6] sm:w-12"
                aria-hidden="true"
              />
              <p className="whitespace-nowrap font-serif text-lg italic text-white/95 min-[380px]:text-xl sm:text-2xl">
                {hero.tagline}
              </p>
              <span
                className="h-px w-6 shrink-0 bg-[#F7C3A6] sm:w-12"
                aria-hidden="true"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row"
            >
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#faf8f2] px-7 py-3 text-sm font-bold text-[#184036] shadow-[0_14px_30px_-12px_rgba(242,182,50,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#184036] hover:text-[#faf8f2]"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                Apply Now
                <LuArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#18221F]"
              >
                Visit Campus
              </Link>
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-white/20 pt-5 text-sm text-white/85"
            >
              <LuPhone className="h-4 w-4 text-[#F7C3A6]" aria-hidden="true" />
              Call admissions:
              {phones.map((p, i) => (
                <span key={p.href} className="inline-flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden text-white/50 sm:inline">/</span>
                  )}
                  <a
                    href={p.href}
                    className="font-semibold text-white transition-colors hover:text-[#F7C3A6]"
                  >
                    {p.label}
                  </a>
                </span>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Glass quick-facts bar (desktop) */}
      <div className="container-site hidden pb-24 lg:block">
        <div className="mx-auto max-w-[1100px]">
          <motion.dl
            className="grid grid-cols-3 divide-x divide-white/20 rounded-2xl border border-white/30 bg-black/30 py-5 backdrop-blur-[3px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 px-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-serif text-lg text-white">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
