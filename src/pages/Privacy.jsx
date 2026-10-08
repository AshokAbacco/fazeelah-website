import { useEffect, useRef, useState } from "react";
import {
  LuShieldCheck,
  LuSmartphone,
  LuDatabase,
  LuListChecks,
  LuBellRing,
  LuShare2,
  LuLock,
  LuArchive,
  LuBaby,
  LuScale,
  LuTrash2,
  LuGlobe,
  LuRefreshCw,
  LuMail,
  LuPhone,
  LuMapPin,
  LuCheck,
  LuX,
  LuCalendarClock,
  LuUsers,
  LuGraduationCap,
  LuUserRound,
  LuBookOpen,
  LuCamera,
  LuWifi,
  LuSchool,
  LuServer,
  LuLandmark,
  LuKeyRound,
  LuShieldHalf,
  LuHardDrive,
  LuEye,
  LuPencil,
  LuBan,
  LuMessageSquareWarning,
  LuArrowRight,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/ui/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import { Reveal } from "../components/ui/Reveal.jsx";
import { images } from "../assets/images.js";
import {
  address,
  emails,
  phones,
  school,
  schoolApp,
  whatsapp,
} from "../data/schoolData.js";
import { privacyPolicy as p } from "../data/privacyData.js";

/* ------------------------------------------------------------------ */
/*  Full-width privacy page: every topic is its own edge-to-edge band  */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: "about-app", label: "About the app", icon: LuSmartphone },
  { id: "information-we-collect", label: "Data we collect", icon: LuDatabase },
  { id: "how-we-use", label: "How we use it", icon: LuListChecks },
  { id: "app-permissions", label: "Permissions", icon: LuBellRing },
  { id: "sharing", label: "Sharing", icon: LuShare2 },
  { id: "security", label: "Security", icon: LuLock },
  { id: "retention", label: "Retention & children", icon: LuArchive },
  { id: "your-rights", label: "Your rights", icon: LuScale },
  { id: "delete-account", label: "Delete account", icon: LuTrash2 },
  { id: "website", label: "Website & updates", icon: LuGlobe },
  { id: "contact", label: "Contact", icon: LuMail },
];
const ids = SECTIONS.map((s) => s.id);
const num = (id) => String(ids.indexOf(id) + 1).padStart(2, "0");

/** Wider than the normal site container so the page uses the full screen. */
const WIDE = "mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 2xl:px-16";

const ICONS = {
  collected: [LuGraduationCap, LuUsers, LuBookOpen, LuSmartphone],
  users: [LuUsers, LuGraduationCap, LuUserRound],
  permissions: {
    Notifications: LuBellRing,
    "Camera / Photos & files": LuCamera,
    Internet: LuWifi,
  },
  sharing: [LuSchool, LuServer, LuLandmark],
  security: [LuShieldHalf, LuKeyRound, LuUsers, LuHardDrive],
  rights: [LuEye, LuPencil, LuTrash2, LuBan, LuMessageSquareWarning],
};

/* ---------- building blocks ---------- */

/** Full-width band: big number + title on the left (sticky), content on the right. */
function Band({ id, tone = "ivory", icon: Icon, title, lead, children }) {
  const tones = {
    ivory: "bg-ivory",
    white: "bg-white",
    sage: "bg-sage",
  };
  return (
    <section
      id={id}
      className={`scroll-mt-[132px] border-t border-forest/10 ${tones[tone]}`}
      aria-labelledby={`${id}-h`}
    >
      <div
        className={`${WIDE} grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16 lg:py-24`}
      >
        <Reveal>
          <div className="lg:sticky lg:top-[150px]">
            <p
              className="select-none font-serif text-[5.5rem] font-medium leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(185,95,58,0.55)] sm:text-[7rem]"
              aria-hidden="true"
            >
              {num(id)}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest text-[#F2B632]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2
                id={`${id}-h`}
                className="text-[1.9rem] font-medium leading-tight text-ink sm:text-4xl"
              >
                {title}
              </h2>
            </div>
            {lead && (
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                {lead}
              </p>
            )}
          </div>
        </Reveal>
        <div className="min-w-0 space-y-6 text-[0.98rem] leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </section>
  );
}

function Tile({ icon: Icon, title, children, accent = false }) {
  return (
    <div
      className={`group h-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        accent
          ? "border-forest bg-forest text-ivory"
          : "border-forest/10 bg-white shadow-card"
      }`}
    >
      {Icon && (
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent ? "bg-white/10 text-[#F2B632]" : "bg-sage text-forest group-hover:bg-forest group-hover:text-[#F2B632]"} transition-colors`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      )}
      <p
        className={`mt-4 font-serif text-lg ${accent ? "text-white" : "text-ink"}`}
      >
        {title}
      </p>
      <div
        className={`mt-2 text-sm leading-relaxed ${accent ? "text-ivory/75" : "text-ink-soft"}`}
      >
        {children}
      </div>
    </div>
  );
}

function CheckGrid({ items, cols = "sm:grid-cols-2" }) {
  return (
    <ul className={`grid gap-3 ${cols}`}>
      {items.map((t) => (
        <li
          key={t}
          className="flex gap-3 rounded-2xl border border-forest/10 bg-white px-4 py-3.5 shadow-card"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-[#F2B632]">
            <LuCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-ink">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Highlights the chip of the section on screen. */
function useActiveSection() {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-150px 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

/** Full-width sticky row of topics under the navbar. */
function TopicBar({ active }) {
  const barRef = useRef(null);
  useEffect(() => {
    const chip = barRef.current?.querySelector(`[data-id="${active}"]`);
    chip?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);
  return (
    <nav
      aria-label="Privacy policy topics"
      className="sticky top-[68px] z-30 border-y border-forest/10 bg-ivory/95 backdrop-blur"
    >
      <div
        ref={barRef}
        className={`${WIDE} flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {SECTIONS.map((s, i) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              data-id={s.id}
              href={`#${s.id}`}
              aria-current={on ? "true" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                on
                  ? "border-forest bg-forest text-white shadow-md"
                  : "border-forest/15 bg-white text-ink-soft hover:border-forest/40 hover:text-ink"
              }`}
            >
              <span
                className={`text-xs font-bold ${on ? "text-[#F2B632]" : "text-clay"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* ---------- page ---------- */

export default function Privacy() {
  const active = useActiveSection();
  const primaryEmail = emails[0];

  return (
    <>
      <Seo
        title={`Privacy Policy | ${schoolApp.name} App & Website | ${school.name}`}
        description={`How ${school.name} collects, uses and protects personal data in the ${schoolApp.name} app and on fazeelah.com – data privacy, app permissions, your rights and account deletion.`}
        path="/privacy"
      />

      <PageHero
        crumb="Privacy Policy"
        label="Data Privacy"
        title="Privacy Policy"
        description={`How ${school.shortName} protects the personal information of students, parents and staff in the ${schoolApp.name} app and on this website.`}
        image={images.schoolFront}
        imageAlt="Fazeelah English Medium School building"
      >
        <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
          <LuCalendarClock
            className="h-4 w-4 text-[#F2B632]"
            aria-hidden="true"
          />
          Last updated: {p.lastUpdated}
        </p>
      </PageHero>

      <TopicBar active={active} />

      {/* Promise band – full width, dark */}
      <section
        className="relative overflow-hidden bg-forest-900 text-ivory"
        aria-labelledby="promise-heading"
      >
        <div
          className="absolute inset-0 dots-light opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F2B632]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className={`${WIDE} relative py-16 sm:py-20 lg:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F2B632] sm:text-xs">
                Our privacy promise
              </p>
              <h2
                id="promise-heading"
                className="mt-4 text-4xl font-medium leading-[1.1] !text-white sm:text-5xl"
              >
                Your family&apos;s information is{" "}
                <span className="italic text-[#F7C3A6]">safe with us.</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-ivory/75 sm:text-lg">
                {p.intro}
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {p.highlights.map((h, i) => (
              <div
                key={h.title}
                className="bg-forest-900/90 p-7 transition-colors hover:bg-forest-800"
              >
                <div className="flex items-center justify-between">
                  <LuShieldCheck
                    className="h-7 w-7 text-[#F2B632]"
                    aria-hidden="true"
                  />
                  <span className="font-serif text-sm text-ivory/35">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-6 font-serif text-xl text-white">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 About the app */}
      <Band
        id="about-app"
        tone="ivory"
        icon={LuSmartphone}
        title={`About the ${schoolApp.name} app`}
        lead={`${schoolApp.name} is the official mobile app of ${school.name}, Dharmavaram. It connects the school with parents, students and staff so that everyone stays informed about a child's school day.`}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {p.appUsers.map((u, i) => (
            <Tile
              key={u.who}
              icon={ICONS.users[i]}
              title={u.who}
              accent={i === 0}
            >
              {u.what}
            </Tile>
          ))}
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-clay">
            With the app you can see
          </p>
          <CheckGrid
            items={p.appFeatures}
            cols="sm:grid-cols-2 xl:grid-cols-3"
          />
        </div>
      </Band>

      {/* 02 Information we collect */}
      <Band
        id="information-we-collect"
        tone="white"
        icon={LuDatabase}
        title="Information we collect"
        lead="We collect only what is needed to run the school and the app. Most of it is given by parents at admission or created by the school during the academic year."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {p.collected.map((c, i) => (
            <Tile key={c.title} icon={ICONS.collected[i]} title={c.title}>
              <ul className="space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    {it}
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </div>
        <div className="rounded-3xl border border-clay/25 bg-clay/[0.06] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">
            What we never collect
          </p>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {p.notCollected.map((t) => (
              <li key={t} className="flex gap-3 text-ink">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay text-white">
                  <LuX className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* 03 How we use */}
      <Band
        id="how-we-use"
        tone="sage"
        icon={LuListChecks}
        title="How we use information"
        lead="Your information is used only for school and educational purposes – never for advertising."
      >
        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {p.uses.map((u, i) => (
            <li
              key={u}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-card"
            >
              <span
                className="absolute -right-2 -top-4 font-serif text-7xl text-forest/[0.06]"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2B632] text-sm font-bold text-ink">
                {i + 1}
              </span>
              <p className="relative mt-4 font-medium text-ink">{u}</p>
            </li>
          ))}
        </ol>
        <p className="flex items-center gap-3 rounded-2xl bg-forest px-5 py-4 font-medium text-ivory">
          <LuShieldCheck
            className="h-5 w-5 shrink-0 text-[#F2B632]"
            aria-hidden="true"
          />
          We never sell, rent or trade personal data, and the app shows no
          third-party advertisements.
        </p>
      </Band>

      {/* 04 Permissions */}
      <Band
        id="app-permissions"
        tone="ivory"
        icon={LuBellRing}
        title="App permissions"
        lead="The app asks only for what it needs. You can turn permissions off anytime in your phone's settings – the app keeps working, though alerts may stop."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {p.permissions.map((x) => (
            <Tile
              key={x.name}
              icon={ICONS.permissions[x.name] || LuBellRing}
              title={x.name}
            >
              {x.why}
            </Tile>
          ))}
        </div>
      </Band>

      {/* 05 Sharing */}
      <Band
        id="sharing"
        tone="white"
        icon={LuShare2}
        title="Who we share information with"
        lead="Information stays within the school. It is shared only in these limited cases."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {p.sharing.map((s, i) => (
            <div key={s.who} className="relative">
              <Tile icon={ICONS.sharing[i]} title={s.who}>
                {s.what}
              </Tile>
              {i < p.sharing.length - 1 && (
                <LuArrowRight
                  className="absolute -right-3.5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 rounded-full bg-[#F2B632] p-1.5 text-ink md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Band>

      {/* 06 Security */}
      <Band
        id="security"
        tone="sage"
        icon={LuLock}
        title="How we protect your data"
        lead="No online system is 100% secure, but we take every reasonable step. Keep your login private and tell the school straight away if you think your account was misused."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {p.security.map((t, i) => (
            <Tile key={t} icon={ICONS.security[i]} title={t} />
          ))}
        </div>
      </Band>

      {/* 07 Retention & children – two-up */}
      <Band
        id="retention"
        tone="ivory"
        icon={LuArchive}
        title="Retention & children's privacy"
        lead="How long information is kept, and how children's data is handled."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Tile icon={LuArchive} title="How long we keep data">
            {p.retention}
          </Tile>
          <Tile icon={LuBaby} title="Children's privacy" accent>
            {p.children}
          </Tile>
        </div>
      </Band>

      {/* 08 Rights */}
      <Band
        id="your-rights"
        tone="white"
        icon={LuScale}
        title="Your rights"
        lead="Under the Digital Personal Data Protection Act, 2023, parents and guardians (on behalf of their child) and staff have the right to:"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {p.rights.map((r, i) => (
            <Tile
              key={r.title}
              icon={ICONS.rights[i]}
              title={r.title}
              accent={i === 2}
            >
              {r.text}
            </Tile>
          ))}
        </div>
      </Band>

      {/* 09 Delete account – full-width feature band */}
      <section
        id="delete-account"
        className="scroll-mt-[132px] relative overflow-hidden bg-clay text-white"
        aria-labelledby="delete-account-h"
      >
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div className={`${WIDE} relative py-16 sm:py-20 lg:py-24`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="select-none font-serif text-[5.5rem] font-medium leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.6)] sm:text-[7rem]"
                aria-hidden="true"
              >
                {num("delete-account")}
              </p>
              <h2
                id="delete-account-h"
                className="mt-2 text-[1.9rem] font-medium leading-tight !text-white sm:text-4xl"
              >
                Delete your {schoolApp.name} account &amp; data
              </h2>
              <p className="mt-3 max-w-2xl text-white/80">
                You can ask us to delete your app account and the personal data
                linked to it at any time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`${primaryEmail.href}?subject=${encodeURIComponent(`Delete my ${schoolApp.name} account`)}`}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-clay-dark transition-transform hover:-translate-y-0.5"
              >
                <LuMail className="h-4 w-4" aria-hidden="true" /> Email a
                deletion request
              </a>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp
                the school
              </a>
            </div>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {p.deletionSteps.map((s, i) => (
              <li
                key={s}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Step {i + 1}
                </span>
                <p className="mt-3 leading-relaxed text-white">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10 Website & updates – two-up */}
      <Band
        id="website"
        tone="ivory"
        icon={LuGlobe}
        title="This website & policy updates"
        lead="How fazeelah.com handles your details, and how we tell you about changes to this policy."
      >
        <CheckGrid items={p.website} />

        {/* Static card – no hover effect */}
        <div className="rounded-3xl border border-forest bg-forest p-6 text-ivory">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#F2B632]">
            <LuRefreshCw className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-4 font-serif text-lg text-white">
            Changes to this policy
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ivory/75">
            We may update this policy when the app or the law changes. The new
            version will always be published on this page with a new “Last
            updated” date (currently {p.lastUpdated}). For important changes we
            will also inform parents through the app.
          </p>
        </div>
      </Band>

      {/* 11 Contact – full-width dark */}
      <section
        id="contact"
        className="scroll-mt-[132px] bg-forest-900 text-ivory"
        aria-labelledby="contact-h"
      >
        <div
          className={`${WIDE} grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-24`}
        >
          <div>
            <p
              className="select-none font-serif text-[5.5rem] font-medium leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(242,182,50,0.6)] sm:text-[7rem]"
              aria-hidden="true"
            >
              {num("contact")}
            </p>
            <h2
              id="contact-h"
              className="mt-2 text-[1.9rem] font-medium leading-tight !text-white sm:text-4xl"
            >
              Contact us &amp; grievance officer
            </h2>
            <p className="mt-4 max-w-md text-ivory/70">
              For any question, correction, deletion request or complaint about
              your data, contact us. We aim to reply to every privacy request
              within 30 days.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#F2B632] p-6 text-ink sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
                Grievance Officer
              </p>
              <p className="mt-2 font-serif text-2xl">
                {p.grievanceOfficer.title}
              </p>
              <a
                href={`mailto:${p.grievanceOfficer.email}`}
                className="mt-3 inline-flex items-center gap-2 break-all font-semibold underline-offset-4 hover:underline"
              >
                <LuMail className="h-4 w-4 shrink-0" aria-hidden="true" />{" "}
                {p.grievanceOfficer.email}
              </a>
            </div>
            <a
              href={primaryEmail.href}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <LuMail
                className="h-6 w-6 shrink-0 text-[#F2B632]"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
                  School email
                </span>
                <span className="block break-all font-semibold text-white">
                  {primaryEmail.label}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <LuPhone
                className="h-6 w-6 shrink-0 text-[#F2B632]"
                aria-hidden="true"
              />
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
                  Call
                </span>
                {phones.map((ph) => (
                  <a
                    key={ph.href}
                    href={ph.href}
                    className="block font-semibold text-white hover:text-[#F2B632]"
                  >
                    {ph.label}
                  </a>
                ))}
              </span>
            </div>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:col-span-2"
            >
              <LuMapPin
                className="h-6 w-6 shrink-0 text-[#F2B632]"
                aria-hidden="true"
              />
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ivory/50">
                  Visit the school office
                </span>
                <span className="block font-semibold leading-relaxed text-white">
                  {address.short}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
