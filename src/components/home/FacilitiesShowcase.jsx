import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { images } from "../../assets/images.js";
import { facilities } from "../../data/schoolData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { fadeUp, staggerParent } from "../ui/Reveal.jsx";

/**
 * World-Class Facilities — clean modern cards.
 * Every photo uses the same landscape 4:3 frame so the whole subject stays visible
 * (no arch/portrait crops). Optional per-item overrides in schoolData.js:
 *   position: 'center 30%'   → focal point for object-cover
 *   fit: 'contain'           → show the full image on white (e.g. cut-out photos)
 */
export default function FacilitiesShowcase() {
  return (
    <section
      id="facilities"
      className="section-y bg-[#FBF9F4]"
      aria-labelledby="facilities-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="facilities-heading"
          label={facilities.label}
          title={facilities.heading}
          description={facilities.description}
        />

        <motion.ul
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {facilities.items.map((f, i) => {
            const contain = f.fit === "contain";
            return (
              <motion.li
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_30px_-18px_rgba(0,0,0,0.25)] transition-shadow duration-500 hover:shadow-[0_28px_50px_-24px_rgba(0,0,0,0.35)]"
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${contain ? "bg-white" : "bg-[#F1ECE3]"}`}
                >
                  <img
                    src={images[f.image]}
                    alt={f.alt}
                    loading="lazy"
                    decoding="async"
                    style={
                      f.position ? { objectPosition: f.position } : undefined
                    }
                    className={`h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                      contain ? "object-contain p-2" : "object-cover"
                    }`}
                  />
                  {!contain && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#18221F] shadow-sm"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.2rem] font-medium leading-snug !text-[#18221F]">
                      {f.title}
                    </h3>
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#18221F] transition-all duration-300 group-hover:border-[#F2B632] group-hover:bg-[#F2B632]"
                      aria-hidden="true"
                    >
                      <LuArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                  <span
                    className="mt-3 h-[2px] w-8 rounded-full bg-[#F2B632] transition-all duration-500 group-hover:w-16"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-sm leading-relaxed text-[#5E5A53]">
                    {f.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
