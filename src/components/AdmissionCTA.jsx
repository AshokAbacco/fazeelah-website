import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowRight, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { images } from "../assets/images.js";
import { admissionsCta, phones, school, whatsapp } from "../data/schoolData.js";
import { Reveal, ease } from "./ui/Reveal.jsx";

/** Rounded admissions banner: forest panel + students photograph. */
export default function AdmissionCTA({ background = "white" }) {
  return (
    <section
      className={`py-16 sm:py-20 ${background === "white" ? "bg-white" : "bg-ivory"}`}
      aria-labelledby="admissions-cta-heading"
    >
      <div className="container-site">
        <Reveal className="relative grid overflow-hidden rounded-[32px] bg-forest lg:grid-cols-[1.05fr_0.95fr]">
          <div className="absolute inset-0 dots-light" aria-hidden="true" />
          <div
            className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-ivory/10"
            aria-hidden="true"
          />
          <div
            className="absolute -left-8 -top-8 h-64 w-64 rounded-full border border-ivory/10"
            aria-hidden="true"
          />

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:py-20">
            <p className="eyebrow !text-clay-light">{admissionsCta.label}</p>
            <h2
              id="admissions-cta-heading"
              className="mt-5 text-[2rem] font-medium leading-[1.1] !text-ivory sm:text-[2.6rem] lg:text-[3rem]"
            >
              Admissions Open{" "}
              <span className="whitespace-nowrap italic text-clay-light">
                {school.admissionYear}
              </span>{" "}
              – Nursery to <span className="whitespace-nowrap">7th Class</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/75 sm:text-lg">
              {admissionsCta.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                {admissionsCta.primary}
              </a>
              <Link to="/contact" className="btn-ghost-light group">
                {admissionsCta.secondary}
                <LuArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <a
              href={phones[0].href}
              className="mt-8 inline-flex items-center gap-3 text-sm text-ivory/65 hover:text-ivory"
            >
              <LuPhone className="h-4 w-4 text-clay-light" aria-hidden="true" />{" "}
              Or call {phones[0].label}
            </a>
          </div>

          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px]">
            <motion.img
              src={images.studentsCampus}
              alt="Happy Fazeelah students in uniform running across the campus lawn"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent lg:bg-gradient-to-r lg:from-forest lg:via-forest/10 lg:to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
