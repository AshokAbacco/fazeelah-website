import { Link } from "react-router-dom";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuArrowUpRight,
  LuSmartphone,
} from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../ui/Logo.jsx";
import PlayStoreBadge from "./PlayStoreBadge.jsx";
import {
  address,
  emails,
  navigation,
  officeHours,
  phones,
  school,
  schoolApp,
  socialLinks,
  whatsapp,
} from "../../data/schoolData.js";

const socialIcon = { Facebook: FaFacebookF, Instagram: FaInstagram };

/**
 * Website developer credit (bottom of the footer).
 * Clicking the credit opens the ABACCO TECHNOLOGY website in a new tab.
 *    (If `url` is emptied, the credit is shown without a link.)
 * Logo file lives in /public/abacco-logo.png
 */
const developer = {
  name: "ABACCO TECHNOLOGY",
  url: "https://www.abaccotech.com/",
  logo: "/abacco-logo.png",
};

function DeveloperCredit() {
  const content = (
    <>
      <span className="text-ivory/50">Designed &amp; Developed by</span>
      <span className="inline-flex items-center gap-2">
        <span className="flex h-7 items-center">
          <img
            src={developer.logo}
            alt=""
            className="h-full w-auto object-contain rounded-[19px]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.parentElement.style.display = "none";
            }}
          />
        </span>
        <span className="font-bold tracking-[0.12em] text-ivory transition-colors group-hover:text-clay-light">
          {developer.name}
        </span>
        {developer.url && (
          <LuArrowUpRight
            className="h-3.5 w-3.5 text-ivory/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-light"
            aria-hidden="true"
          />
        )}
      </span>
    </>
  );

  const className =
    "group inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm";

  return developer.url ? (
    <a
      href={developer.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Website designed and developed by ${developer.name} (opens in a new tab)`}
    >
      {content}
    </a>
  ) : (
    <p className={className}>{content}</p>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-forest-900 text-ivory"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="absolute inset-0 dots-light" aria-hidden="true" />

      {/* App strip */}
      <div className="relative border-b border-ivory/10">
        <div className="container-site flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ivory/10 text-clay-light">
              <LuSmartphone className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-clay-light">
                Official School App
              </p>
              <p className="mt-1 font-serif text-2xl tracking-wide text-ivory">
                {schoolApp.name}
              </p>
              <p className="mt-1 text-sm text-ivory/60">
                Stay connected with Fazeelah — download the {schoolApp.name} app
                on Google Play.
              </p>
            </div>
          </div>
          <PlayStoreBadge />
        </div>
      </div>

      <div className="container-site relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr] lg:gap-10">
        <div>
          <Logo variant="footer" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
            {school.footerTagline}
          </p>
          <p className="mt-2 font-serif text-lg italic text-clay-light">
            {school.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-whatsapp/15 px-4 text-sm font-semibold text-[#6EE7A0] transition-colors hover:bg-whatsapp hover:text-forest-950"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
            </a>
            {socialLinks.map((s) => {
              const Icon = socialIcon[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Fazeelah School on ${s.name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/75 transition-all hover:-translate-y-0.5 hover:border-ivory hover:bg-ivory hover:text-forest"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-light">
            Quick Links
          </p>
          <ul className="mt-6 space-y-3">
            {navigation.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] text-ivory/75 transition-colors hover:text-ivory"
                >
                  {n.label}
                  <LuArrowUpRight
                    className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-light">
            Contact
          </p>
          <address className="mt-6 space-y-4 text-sm not-italic text-ivory/75">
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 leading-relaxed hover:text-ivory"
            >
              <LuMapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-clay-light"
                aria-hidden="true"
              />
              {address.short}
            </a>
            {phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="flex items-center gap-3 hover:text-ivory"
              >
                <LuPhone
                  className="h-4 w-4 shrink-0 text-clay-light"
                  aria-hidden="true"
                />
                {p.label}
              </a>
            ))}
            <a
              href={emails[0].href}
              className="flex items-center gap-3 break-all hover:text-ivory"
            >
              <LuMail
                className="h-4 w-4 shrink-0 text-clay-light"
                aria-hidden="true"
              />
              {emails[0].label}
            </a>
          </address>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-light">
            Office Hours
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-ivory/10 pb-3">
              <dt className="text-ivory/60">Mon – Sat</dt>
              <dd className="text-ivory">09:00 AM – 05:00 PM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ivory/60">Sunday</dt>
              <dd className="text-ivory">Closed</dd>
            </div>
          </dl>
          <p className="sr-only">
            {officeHours.summary}. {officeHours.closed}.
          </p>
        </div>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ivory/55 sm:text-sm">
            © {school.currentYear} {school.name}. All Rights Reserved.
          </p>
          <p className="font-serif text-sm italic text-ivory/45">
            Built for excellence in education
          </p>
        </div>
      </div>

      {/* Developer credit */}
      <div className="relative border-t border-ivory/10 bg-black/20">
        <div className="container-site flex justify-center py-4">
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
