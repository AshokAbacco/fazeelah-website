import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  LuArrowLeft,
  LuArrowRight,
  LuChevronRight,
  LuHouse,
  LuQuote,
  LuMessageSquareQuote,
  LuGraduationCap,
  LuSmile,
  LuHeartHandshake,
  LuShieldCheck,
  LuSparkles,
  LuMessagesSquare,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/ui/Seo.jsx";
import { Reveal, ease } from "../components/ui/Reveal.jsx";
import AdmissionCTA from "../components/AdmissionCTA.jsx";
import TestimonialCard, {
  PersonPhoto,
} from "../components/testimonials/TestimonialCard.jsx";
import { whatsapp } from "../data/schoolData.js";
import { testimonials } from "../data/testimonialsData.js";

/* ------------------------------------------------------------------ */
/*  Helpers – everything below is derived from testimonialsData.js     */
/* ------------------------------------------------------------------ */

const GROUPS = [
  { key: "all", label: "All" },
  {
    key: "early",
    label: "Nursery & KG",
    test: /nursery|lkg|ukg|kindergarten/i,
  },
  { key: "primary", label: "Classes I – IV", test: /class\s+(iv|iii|ii|i)\b/i },
  { key: "middle", label: "Classes V – VII", test: /class\s+(vii|vi|v)\b/i },
  { key: "hostel", label: "Hostel", test: /hostel|boarding/i },
  { key: "day", label: "Day Scholars", test: /day\s*scholar/i },
];

const groupOf = (t) =>
  t.group ||
  GROUPS.find((g) => g.test && g.test.test(t.role || ""))?.key ||
  "other";

/** Themes are counted from the real parent quotes – nothing is invented. */
const THEMES = [
  { label: "Caring teachers", icon: LuGraduationCap, test: /teacher/i },
  { label: "Growing confidence", icon: LuSmile, test: /confiden/i },
  {
    label: "Discipline & values",
    icon: LuHeartHandshake,
    test: /disciplin|value|character|respect/i,
  },
  {
    label: "Safe & caring campus",
    icon: LuShieldCheck,
    test: /safe|secur|well-being|peace of mind|proper care/i,
  },
  {
    label: "Activities & participation",
    icon: LuSparkles,
    test: /activit|extracurricular|participat/i,
  },
  {
    label: "Communication & learning",
    icon: LuMessagesSquare,
    test: /communicat|reading|learn/i,
  },
];

/** Sentences from parent quotes that talk about teachers. */
function teacherMentions(items, limit = 6) {
  const out = [];
  for (const t of items) {
    const sentences = (t.quote || "").match(/[^.!?]+[.!?]*/g) || [];
    const hit = sentences.find((s) => /teacher/i.test(s));
    if (hit) out.push({ person: t, text: hit.trim() });
    if (out.length >= limit) break;
  }
  return out;
}

/** Highlights the word "teacher(s)" in gold. */
function HighlightTeachers({ text }) {
  const parts = text.split(/(teachers?)/i);
  return parts.map((p, i) =>
    /^teachers?$/i.test(p) ? (
      <mark key={i} className="rounded bg-[#F2B632]/25 px-1 text-inherit">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] sm:text-xs ${light ? "text-[#F2B632]" : "text-clay"}`}
    >
      <span
        className={`h-px w-8 ${light ? "bg-[#F2B632]" : "bg-clay"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Sections                                                           */
/* ------------------------------------------------------------------ */

function Hero({ parents, teachersReal, featured, shareHref, page }) {
  const faces = parents.filter((t) => t.photo).slice(0, 6);
  return (
    <section
      className="relative isolate overflow-hidden bg-forest-900 pb-20 pt-[132px] text-ivory sm:pb-24 lg:pb-28 lg:pt-[176px]"
      aria-labelledby="t-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 dots-light opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#F2B632]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#B95F3A]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/75">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 hover:text-[#F2B632]"
                >
                  <LuHouse className="h-3.5 w-3.5" aria-hidden="true" /> Home
                </Link>
              </li>
              <li aria-hidden="true">
                <LuChevronRight className="h-3.5 w-3.5 text-white/40" />
              </li>
              <li aria-current="page" className="text-[#F2B632]">
                {page.heroLabel || "Testimonials"}
              </li>
            </ol>
          </nav>

          <h1
            id="t-hero-heading"
            className="mt-7 text-[2.6rem] font-medium leading-[1.05] !text-white sm:text-[3.4rem] lg:text-[3.9rem]"
          >
            Stories from the{" "}
            <span className="italic text-[#F7C3A6]">Fazeelah</span> Family
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {page.heroDescription}
          </p>

          {faces.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {faces.map((t, i) => (
                  <PersonPhoto
                    key={i}
                    person={t}
                    className="h-12 w-12"
                    textClass="text-sm"
                    ringClass="ring-[3px] ring-forest-900"
                  />
                ))}
              </div>
              <p className="text-sm text-white/70">
                <b className="text-white">{parents.length} families</b>
                {teachersReal > 0 && (
                  <>
                    {" "}
                    &amp; <b className="text-white">{teachersReal} teachers</b>
                  </>
                )}{" "}
                share their experience
              </p>
            </div>
          )}

          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="#parents"
              className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#F2B632] px-7 py-3 text-sm font-bold text-[#18221F] transition-transform hover:-translate-y-0.5"
            >
              Read parent stories{" "}
              <LuArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href={shareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> Share your
              story
            </a>
          </div>
        </motion.div>

        {/* Stacked quote cards */}
        {featured && (
          <motion.div
            className="relative mx-auto w-full max-w-[520px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
          >
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 rotate-[4deg] rounded-[32px] bg-[#B95F3A]/80"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-[3deg] rounded-[32px] bg-[#F2B632]/90"
              aria-hidden="true"
            />
            <figure className="relative rounded-[32px] bg-ivory p-8 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-10">
              <LuQuote
                className="h-10 w-10 text-[#C98A00]"
                aria-hidden="true"
              />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-ink sm:text-[1.4rem]">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-forest/10 pt-6">
                <PersonPhoto
                  person={featured}
                  className="h-16 w-16"
                  textClass="text-lg"
                  ringClass="ring-4 ring-[#F2B632]/40"
                />
                <span>
                  <span className="block font-bold text-ink">
                    {featured.name}
                  </span>
                  <span className="block text-sm text-ink-soft">
                    {featured.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FeaturedSlider({ items, page }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = items.length;
  const go = (d) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    if (paused || reduce || n < 2) return undefined;
    const t = setTimeout(() => go(1), 7000);
    return () => clearTimeout(t);
  }, [i, paused, reduce, n]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!n) return null;
  const t = items[i];

  return (
    <section
      id="featured"
      className="section-y relative overflow-hidden bg-ivory"
      aria-labelledby="featured-heading"
    >
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>{page.featuredLabel || "Featured Stories"}</Eyebrow>
            <h2
              id="featured-heading"
              className="mt-4 text-4xl font-medium sm:text-5xl"
            >
              {page.featuredHeading || "In Their Own Words"}
            </h2>
          </Reveal>
          {n > 1 && (
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg text-ink-soft">
                <b className="text-ink">{String(i + 1).padStart(2, "0")}</b> /{" "}
                {String(n).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-white"
                aria-label="Previous story"
              >
                <LuArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white transition-colors hover:bg-forest-800"
                aria-label="Next story"
              >
                <LuArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-[36px] bg-white shadow-[0_30px_70px_-40px_rgba(15,43,36,0.45)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              className="grid min-h-[380px] md:grid-cols-[0.8fr_1.2fr]"
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease }}
              aria-live="polite"
            >
              <div className="relative flex items-center justify-center overflow-hidden bg-sage px-8 py-12">
                <span
                  className="absolute -left-6 -top-10 select-none font-serif text-[16rem] leading-none text-forest/[0.07]"
                  aria-hidden="true"
                >
                  “
                </span>
                <div className="relative">
                  <span
                    className="absolute -inset-4 rounded-full border-2 border-dashed border-[#C98A00]/40"
                    aria-hidden="true"
                  />
                  <PersonPhoto
                    person={t}
                    className="h-44 w-44 sm:h-52 sm:w-52"
                    textClass="text-5xl"
                    ringClass="ring-8 ring-white shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                {t.placeholder && (
                  <span className="mb-4 w-fit rounded-full border border-dashed border-[#C98A00]/50 bg-[#FFF8E6] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A6A00]">
                    Sample
                  </span>
                )}
                <blockquote className="font-serif text-2xl leading-snug text-ink sm:text-[1.9rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-clay" aria-hidden="true" />
                  <span>
                    <span className="block text-lg font-bold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink-soft">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          </AnimatePresence>

          {/* progress dots */}
          {n > 1 && (
            <div className="absolute bottom-5 right-6 flex gap-2 sm:right-10">
              {items.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`Show story ${k + 1}`}
                  aria-current={k === i ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-clay" : "w-2 bg-forest/20 hover:bg-forest/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Themes({ parents, page }) {
  const total = parents.length;
  const rows = THEMES.map((th) => ({
    ...th,
    count: parents.filter((t) => th.test.test(t.quote || "")).length,
  }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
  if (!rows.length) return null;
  return (
    <section
      id="themes"
      className="section-y bg-sage"
      aria-labelledby="themes-heading"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{page.themesLabel}</Eyebrow>
          </div>
          <h2
            id="themes-heading"
            className="mt-4 text-4xl font-medium sm:text-5xl"
          >
            {page.themesHeading}
          </h2>
          <p className="mt-4 text-ink-soft">{page.themesDescription}</p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(({ label, icon: Icon, count }, k) => {
            const pct = Math.round((count / total) * 100);
            return (
              <Reveal key={label}>
                <div
                  className={`h-full rounded-[28px] p-7 ${k === 0 ? "bg-forest text-ivory" : "bg-white text-ink shadow-card"}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${k === 0 ? "bg-white/10 text-[#F2B632]" : "bg-[#FFF4D6] text-[#C98A00]"}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className={`font-serif text-5xl leading-none ${k === 0 ? "text-[#F2B632]" : "text-forest"}`}
                    >
                      {count}
                    </span>
                  </div>
                  <p
                    className={`mt-6 font-serif text-xl ${k === 0 ? "text-white" : "text-ink"}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`mt-1 text-sm ${k === 0 ? "text-white/65" : "text-ink-soft"}`}
                  >
                    mentioned by {count} of {total} families
                  </p>
                  <div
                    className={`mt-5 h-2 overflow-hidden rounded-full ${k === 0 ? "bg-white/15" : "bg-sage"}`}
                  >
                    <motion.div
                      className={`h-full rounded-full ${k === 0 ? "bg-[#F2B632]" : "bg-clay"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ParentsOnTeachers({ parents, page }) {
  const mentions = teacherMentions(parents);
  if (!mentions.length) return null;
  return (
    <section
      id="on-teachers"
      className="section-y bg-white"
      aria-labelledby="on-teachers-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>{page.onTeachersLabel}</Eyebrow>
            <h2
              id="on-teachers-heading"
              className="mt-4 text-4xl font-medium leading-tight sm:text-5xl"
            >
              {page.onTeachersHeading}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Our teachers are at the heart of every Fazeelah story. Here is
              what parents have said about them, taken from their testimonials.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-sage px-5 py-4">
              <LuGraduationCap
                className="h-7 w-7 text-forest"
                aria-hidden="true"
              />
              <p className="text-sm text-ink">
                <b className="font-serif text-2xl">
                  {parents.filter((t) => /teacher/i.test(t.quote || "")).length}
                </b>{" "}
                parents mention our teachers
              </p>
            </div>
          </div>
        </Reveal>
        <ul className="space-y-5">
          {mentions.map(({ person, text }, k) => (
            <Reveal key={k}>
              <li
                className={`relative rounded-[28px] border p-6 sm:p-8 ${k % 2 ? "border-forest/10 bg-ivory sm:ml-10" : "border-forest/10 bg-white shadow-card sm:mr-10"}`}
              >
                <LuQuote
                  className="absolute right-6 top-6 h-8 w-8 text-forest/10"
                  aria-hidden="true"
                />
                <p className="font-serif text-xl leading-relaxed text-ink">
                  <HighlightTeachers text={text} />
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <PersonPhoto
                    person={person}
                    className="h-10 w-10"
                    textClass="text-sm"
                  />
                  <p className="text-sm">
                    <b className="text-ink">{person.name}</b>{" "}
                    <span className="text-ink-soft">· {person.role}</span>
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TeacherVoices({ teachers }) {
  const items = teachers?.items || [];
  if (!items.length) return null;
  return (
    <section
      id="teachers"
      className="section-y relative overflow-hidden bg-forest-900 text-ivory"
      aria-labelledby="teachers-heading"
    >
      <div
        className="absolute inset-0 dots-light opacity-50"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow light>{teachers.label}</Eyebrow>
          </div>
          <h2
            id="teachers-heading"
            className="mt-4 text-4xl font-medium !text-white sm:text-5xl"
          >
            {teachers.heading}
          </h2>
          <p className="mt-4 text-white/70">{teachers.description}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((t, k) => (
            <Reveal key={k}>
              <figure className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-[#F2B632]/50 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-3">
                  <PersonPhoto
                    person={t}
                    className="h-16 w-16"
                    textClass="text-lg"
                    ringClass="ring-2 ring-[#F2B632]/60"
                  />
                  {t.placeholder && (
                    <span className="rounded-full border border-dashed border-[#F2B632]/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F2B632]">
                      Sample
                    </span>
                  )}
                </div>
                <blockquote
                  className={`mt-6 flex-1 leading-relaxed ${t.placeholder ? "italic text-white/55" : "text-white/90"}`}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[#F2D28A]">
                    {[t.role, t.subject].filter(Boolean).join(" · ")}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllParents({ parents, page }) {
  const [group, setGroup] = useState("all");
  const chips = GROUPS.map((g) => ({
    ...g,
    count:
      g.key === "all"
        ? parents.length
        : parents.filter((t) => groupOf(t) === g.key).length,
  })).filter((g) => g.count > 0);
  const shown =
    group === "all" ? parents : parents.filter((t) => groupOf(t) === group);

  return (
    <section
      id="parents"
      className="section-y scroll-mt-20 relative overflow-hidden bg-[#FBF9F4]"
      aria-labelledby="parents-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F2B632]/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>{page.allLabel}</Eyebrow>
            <h2
              id="parents-heading"
              className="mt-4 text-4xl font-medium sm:text-5xl"
            >
              {page.allHeading}
            </h2>
          </Reveal>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by class"
          >
            {chips.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setGroup(g.key)}
                aria-pressed={group === g.key}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  group === g.key
                    ? "border-forest bg-forest text-white"
                    : "border-forest/15 bg-white text-ink-soft hover:border-forest/40 hover:text-ink"
                }`}
              >
                {g.label}
                <span
                  className={`rounded-full px-1.5 text-xs ${group === g.key ? "bg-white/20" : "bg-sage"}`}
                >
                  {g.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((t) => (
              <motion.li
                key={`${t.name}-${t.role}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease }}
                className="h-full"
              >
                <TestimonialCard
                  t={t}
                  dark={parents.indexOf(t) % 3 === 1}
                  variant="grid"
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

function ShareBand({ page, shareHref }) {
  return (
    <section className="bg-[#FBF9F4] pb-20 sm:pb-24">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-clay px-6 py-12 text-center text-white sm:px-12 md:flex md:items-center md:justify-between md:gap-10 md:text-left">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-5 md:flex-row md:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <LuMessageSquareQuote className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-medium !text-white sm:text-3xl">
                  {page.shareTitle}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-white/85">
                  {page.shareText}
                </p>
              </div>
            </div>
            <a
              href={shareHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 inline-flex min-h-[50px] shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-clay-dark transition-transform hover:-translate-y-0.5 md:mt-0"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> Share your
              feedback
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TestimonialsPage() {
  const parents = testimonials.items || [];
  const page = testimonials.page || {};
  const teachers = testimonials.teachers;
  const teachersReal = (teachers?.items || []).filter(
    (t) => !t.placeholder,
  ).length;

  const featuredList = useMemo(() => {
    const flagged = parents.filter((t) => t.featured);
    return (flagged.length ? flagged : parents).slice(0, 6);
  }, [parents]);

  const shareHref = whatsapp.withMessage
    ? whatsapp.withMessage(
        "Hello Fazeelah School, I would like to share my feedback as a parent:",
      )
    : whatsapp.href;

  return (
    <>
      <Seo
        title={page.title || "Testimonials | FAZEELAH ENGLISH MEDIUM SCHOOL"}
        description={page.metaDescription || testimonials.description}
        path="/testimonials"
      />

      <Hero
        parents={parents}
        teachersReal={teachersReal}
        featured={featuredList[0]}
        shareHref={shareHref}
        page={page}
      />
      <FeaturedSlider
        items={
          featuredList.slice(1).length ? featuredList.slice(1) : featuredList
        }
        page={page}
      />
      <Themes parents={parents} page={page} />
      <ParentsOnTeachers parents={parents} page={page} />
      <TeacherVoices teachers={teachers} />
      <AllParents parents={parents} page={page} />
      <ShareBand page={page} shareHref={shareHref} />

      <AdmissionCTA />
    </>
  );
}
