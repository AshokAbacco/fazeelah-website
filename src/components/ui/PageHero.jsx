import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuChevronRight, LuHouse } from "react-icons/lu";
import { ease } from "./Reveal.jsx";

/**
 * Inner-page hero — matches the Home hero:
 * full-width photograph, light shade, and a centred see-through glass panel.
 * No green used here.
 */
export default function PageHero({
  crumb,
  label,
  title,
  description,
  image,
  imageAlt = "",
  children,
}) {
  return (
    <section
      className="relative isolate flex min-h-[640px] flex-col overflow-hidden pt-[76px] sm:min-h-[720px] lg:min-h-[max(90svh,820px)] lg:pt-[116px]"
      aria-labelledby="page-hero-heading"
    >
      {/* Full-width background photograph */}
      <motion.img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/45 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site flex flex-1 items-center justify-center py-16 sm:py-24 lg:py-28">
        <motion.div
          className="w-full max-w-[980px] rounded-[28px] border border-white/30 bg-gradient-to-b from-black/25 to-black/35 px-6 py-9 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-[3px] sm:px-12 sm:py-12"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/85">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#F2B632]"
                >
                  <LuHouse className="h-3.5 w-3.5" aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <LuChevronRight className="h-3.5 w-3.5 text-white/50" />
              </li>
              <li aria-current="page" className="text-[#F2B632]">
                {crumb}
              </li>
            </ol>
          </motion.nav>

          {label && (
            <motion.div
              className="mt-6 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
            >
              <span
                className="h-px w-6 bg-[#F7C3A6] sm:w-10"
                aria-hidden="true"
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F7C3A6] sm:text-xs">
                {label}
              </p>
              <span
                className="h-px w-6 bg-[#F7C3A6] sm:w-10"
                aria-hidden="true"
              />
            </motion.div>
          )}

          <motion.h1
            id="page-hero-heading"
            className="mx-auto mt-4 max-w-4xl text-[2.2rem] font-medium leading-[1.08] !text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)] sm:text-[3rem] lg:text-[3.5rem]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              {description}
            </motion.p>
          )}

          {children && <div className="flex justify-center">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
