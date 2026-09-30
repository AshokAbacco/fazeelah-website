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

function TestimonialCard({ t }) {
  return (
    <figure className="relative flex h-full w-[300px] shrink-0 flex-col rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_30px_-20px_rgba(0,0,0,0.3)] sm:w-[360px] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4D6] text-[#C98A00]"
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
        className={`mt-5 flex-1 text-[0.97rem] leading-relaxed ${t.placeholder ? "italic text-[#8A857C]" : "text-[#3B3A36]"}`}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18221F] font-serif text-base text-[#F2B632]"
          aria-hidden="true"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold text-[#18221F]">
            {t.name}
          </span>
          <span className="block truncate text-xs text-[#5E5A53]">
            {t.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** One auto-scrolling row. Duplicated content makes the loop seamless; pauses on hover. */
function MarqueeRow({ items, reverse = false, duration = 60 }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <ul className="flex gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:px-6">
        {items.map((t, i) => (
          <li key={i}>
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>
    );
  }
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-2">
      <ul
        className="flex w-max gap-5 [animation:var(--marquee)] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{
          "--marquee": `testimonial-marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {loop.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length ? "true" : undefined}>
            <TestimonialCard t={t} />
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
      className="section-y overflow-hidden bg-white"
      aria-labelledby="testimonials-heading"
    >
      <style>{`@keyframes testimonial-marquee { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 10px)); } }`}</style>
      <div className="container-site">
        <SectionHeading
          id="testimonials-heading"
          label={testimonials.label}
          title={testimonials.heading}
          description={testimonials.description}
        />
      </div>

      <Reveal className="relative mt-14 space-y-5">
        {/* soft fade on the edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24"
          aria-hidden="true"
        />
        <MarqueeRow items={rowA} duration={70} />
        {rowB.length > 0 && <MarqueeRow items={rowB} reverse duration={80} />}
      </Reveal>
    </section>
  );
}
