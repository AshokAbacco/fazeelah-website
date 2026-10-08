import { useReducedMotion } from "framer-motion";
import { LuQuote } from "react-icons/lu";
import { testimonials } from "../../data/schoolData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { Reveal } from "../ui/Reveal.jsx";

function initials(name) {
  const clean = name.replace(/[[\]]/g, "").trim();
  if (!clean || clean.toLowerCase() === "parent name") return "P";
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * One testimonial card.
 * Light card = white (default). Dark card = website green theme.
 * Both use the same avatar style (dark circle with gold initials).
 */
function TestimonialCard({ t, dark }) {
  return (
    <figure
      className={`relative flex h-full w-[300px] shrink-0 origin-center flex-col rounded-3xl border p-6 transition-all duration-300 ease-out hover:z-10 hover:scale-110 motion-reduce:hover:scale-100 sm:w-[360px] sm:p-7 ${
        dark
          ? "border-[#2E6B5A] bg-[#173F35] shadow-[0_20px_40px_-22px_rgba(15,43,36,0.7)] hover:border-[#F2B632]/70 hover:shadow-[0_34px_60px_-24px_rgba(15,43,36,0.8)]"
          : "border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_30px_-20px_rgba(0,0,0,0.3)] hover:border-[#F2B632]/60 hover:shadow-[0_30px_55px_-22px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            dark
              ? "bg-[#F2B632]/15 text-[#F2B632]"
              : "bg-[#FFF4D6] text-[#C98A00]"
          }`}
          aria-hidden="true"
        >
          <LuQuote className="h-5 w-5" />
        </span>
        {t.placeholder && (
          <span className="rounded-full border border-dashed border-[#C98A00]/50 bg-[#FFF8E6] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A6A00]">
            Sample
          </span>
        )}
      </div>

      <blockquote
        className={`mt-5 flex-1 text-[0.97rem] leading-relaxed ${
          t.placeholder
            ? dark
              ? "italic text-white/70"
              : "italic text-[#8A857C]"
            : dark
              ? "text-white"
              : "text-[#3B3A36]"
        }`}
      >
        “{t.quote}”
      </blockquote>

      <figcaption
        className={`mt-6 flex items-center gap-3 border-t pt-5 ${
          dark ? "border-white/15" : "border-black/[0.06]"
        }`}
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18221F] font-serif text-base text-[#F2B632] ${
            dark ? "ring-2 ring-[#F2B632]/50" : ""
          }`}
          aria-hidden="true"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span
            className={`block truncate font-semibold ${dark ? "text-white" : "text-[#18221F]"}`}
          >
            {t.name}
          </span>
          <span
            className={`block truncate text-xs ${dark ? "text-[#F2D28A]" : "text-[#5E5A53]"}`}
          >
            {t.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** One auto-scrolling row. Duplicated content makes the loop seamless; pauses on hover. */
function MarqueeRow({ items, reverse = false, duration = 60, pattern = 1 }) {
  // Dark on every 3rd card (index 1,4,7… or 2,5,8…). Index 0 is never dark,
  // so two dark cards never meet — not even where the loop repeats.
  const isDark = (i) => i % 3 === pattern;
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <ul className="flex gap-5 overflow-x-auto px-4 py-9 [scrollbar-width:thin] sm:px-6">
        {items.map((t, i) => (
          <li key={i}>
            <TestimonialCard t={t} dark={isDark(i)} />
          </li>
        ))}
      </ul>
    );
  }
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-9">
      <ul
        className="flex w-max gap-6 [animation:var(--marquee)] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{
          "--marquee": `testimonial-marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {loop.map((t, i) => (
          <li
            key={i}
            className="relative hover:z-10"
            aria-hidden={i >= items.length ? "true" : undefined}
          >
            <TestimonialCard t={t} dark={isDark(i % items.length)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Home page testimonials — two gently scrolling rows of parent feedback. */
export default function Testimonials() {
  const items = testimonials.items;
  if (!items?.length) return null;
  const half = Math.ceil(items.length / 2);
  const rowA = items.slice(0, half);
  const rowB = items.slice(half);

  return (
    <section
      id="testimonials"
      className="section-y relative overflow-hidden bg-[#FBF9F4]"
      aria-labelledby="testimonials-heading"
    >
      <style>{`@keyframes testimonial-marquee { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 12px)); } }`}</style>
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#F2B632]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B95F3A]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <SectionHeading
          id="testimonials-heading"
          label={testimonials.label}
          title={testimonials.heading}
          description={testimonials.description}
        />
      </div>

      <Reveal className="relative mt-8">
        {/* soft fade on the edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FBF9F4] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FBF9F4] to-transparent sm:w-24"
          aria-hidden="true"
        />
        <MarqueeRow items={rowA} duration={70} pattern={1} />
        {rowB.length > 0 && (
          <MarqueeRow items={rowB} reverse duration={80} pattern={2} />
        )}
      </Reveal>
    </section>
  );
}
