import { motion } from "framer-motion";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuArrowUpRight,
  LuNavigation,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/ui/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ContactCard from "../components/ContactCard.jsx";
import OfficeHours from "../components/OfficeHours.jsx";
import AdmissionCTA from "../components/AdmissionCTA.jsx";
import {
  Reveal,
  RevealImage,
  staggerParent,
} from "../components/ui/Reveal.jsx";
import { images } from "../assets/images.js";
import {
  address,
  contact,
  emails,
  officeHours,
  phones,
  whatsapp,
} from "../data/schoolData.js";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | FAZEELAH ENGLISH MEDIUM SCHOOL, Dharmavaram"
        description="Contact Fazeelah English Medium School, Bathalapalli Road, Nagalur Village, Dharmavaram. Call +91 70753 55455, WhatsApp +91 72078 77077. Open Mon–Sat, 09:00 AM – 05:00 PM."
        path="/contact"
      />
      <PageHero
        crumb="Contact Us"
        label="Get In Touch"
        title={contact.hero.heading}
        description={contact.hero.description}
        image={images.schoolFront}
        imageAlt="Fazeelah School main entrance at dusk"
      >
        <motion.div
          className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#26d466] font-bold text-[#ffffff] shadow-[0_14px_30px_-12px_rgba(242,182,50,0.8)] hover:-translate-y-0.5 hover:bg-[#184036] hover:text-[#faf8f2]"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp
            Admissions
          </a>
          <a
            href={phones[0].href}
            className="btn border border-white/50 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white hover:text-[#18221F]"
          >
            <LuPhone className="h-4 w-4" aria-hidden="true" /> Call Now
          </a>
        </motion.div>
      </PageHero>

      {/* CONTACT CARDS */}
      <section
        className="section-y bg-ivory"
        aria-labelledby="enquiries-heading"
      >
        <div className="container-site">
          <SectionHeading
            id="enquiries-heading"
            label={contact.enquiries.label}
            title={contact.enquiries.heading}
          />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerParent(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ContactCard
              icon={LuMapPin}
              title="Visit Us"
              footer={
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-clay"
                >
                  <LuNavigation className="h-4 w-4" aria-hidden="true" /> Get
                  Directions
                </a>
              }
            >
              <address className="font-serif text-xl not-italic leading-relaxed">
                {address.line1},
                <br />
                {address.line2},
                <br />
                {address.city},
                <br />
                {address.district},
                <br />
                {address.stateShort} - {address.pin}
              </address>
            </ContactCard>

            <ContactCard
              icon={LuPhone}
              title="Call Us"
              footer={
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#128C4B] hover:text-forest"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />{" "}
                  WhatsApp: {whatsapp.label}
                </a>
              }
            >
              <ul className="space-y-3">
                {phones.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      className="group/link inline-flex items-center gap-2 font-serif text-2xl transition-colors hover:text-clay"
                    >
                      {p.label}
                      <LuArrowUpRight
                        className="h-4 w-4 opacity-0 transition-opacity group-hover/link:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                {officeHours.summary}
              </p>
            </ContactCard>

            <ContactCard icon={LuMail} title="Email Us">
              <ul className="space-y-3">
                {emails.map((e) => (
                  <li key={e.href}>
                    <a
                      href={e.href}
                      className={`break-all transition-colors hover:text-clay ${e.primary ? "font-serif text-xl" : "text-[0.95rem] font-semibold text-ink/80"}`}
                    >
                      {e.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ContactCard>
          </motion.div>
        </div>
      </section>

      {/* PLAN YOUR VISIT */}
      <section className="section-y bg-white" aria-labelledby="visit-heading">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="visit-heading"
              label={contact.visit.label}
              title={contact.visit.heading}
              align="left"
            />
            <Reveal delay={0.1} className="mt-10">
              <OfficeHours />
            </Reveal>
            <Reveal
              delay={0.2}
              className="mt-8 flex flex-col gap-3 min-[420px]:flex-row"
            >
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp
                Admissions
              </a>
              <a href={phones[0].href} className="btn-outline">
                <LuPhone className="h-4 w-4" aria-hidden="true" /> Call Now
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            <RevealImage
              src={images.schoolAerial}
              alt="The Fazeelah School campus building at dusk"
              className="aspect-[4/3] shadow-lift lg:aspect-auto lg:flex-1"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="flex items-start gap-4 rounded-2xl bg-forest p-6 text-ivory">
                <LuClock
                  className="mt-1 h-6 w-6 shrink-0 text-clay-light"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-clay-light">
                    Office Hours
                  </p>
                  <p className="mt-2 font-semibold">{officeHours.summary}</p>
                  <p className="text-sm text-ivory/70">{officeHours.closed}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full items-start gap-4 rounded-2xl bg-sage p-6 transition-colors hover:bg-sage-dark"
                >
                  <FaWhatsapp
                    className="mt-1 h-6 w-6 shrink-0 text-[#128C4B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-clay">
                      WhatsApp
                    </p>
                    <p className="mt-2 font-semibold text-ink">
                      {whatsapp.label}
                    </p>
                    <p className="text-sm text-ink-soft">
                      Admissions enquiries
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <AdmissionCTA background="ivory" />
    </>
  );
}
