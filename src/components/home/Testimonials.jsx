import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { testimonials } from "../../data/testimonialsData.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { Reveal } from "../ui/Reveal.jsx";
import TestimonialCard from "../testimonials/TestimonialCard.jsx";

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

/**
 * Home page testimonials — two gently scrolling rows (first `homeLimit` items)
 * and a button to the full /testimonials page.
 */
export default function Testimonials() {
  const all = testimonials.items || [];
  if (!all.length) return null;
  const items = all.slice(0, testimonials.homeLimit || 12);
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

      <div className="container-site relative mt-6 flex justify-center">
        <Link
          to="/testimonials"
          className="group inline-flex min-h-[50px] items-center gap-2 rounded-full bg-[#173F35] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_30px_-14px_rgba(15,43,36,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F2B24]"
        >
          View all testimonials
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">
            {all.length}
          </span>
          <LuArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
