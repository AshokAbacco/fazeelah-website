import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuMenu,
  LuX,
  LuPhone,
  LuMail,
  LuClock,
  LuArrowUpRight,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../ui/Logo.jsx";
import {
  emails,
  navigation,
  officeHours,
  phones,
  school,
  whatsapp,
} from "../../data/schoolData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const menuBtnRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Scroll lock, Escape to close, focus trap for the mobile drawer
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
      if (e.key === "Tab" && drawerRef.current) {
        const f = drawerRef.current.querySelectorAll("a, button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(
      () => drawerRef.current?.querySelector("a, button")?.focus(),
      60,
    );
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar (desktop) */}
      <div
        className={`hidden overflow-hidden bg-forest text-ivory/85 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="container-site flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 animate-blink rounded-full bg-clay-light"
              aria-hidden="true"
            />
            Admissions open for {school.admissionYear} · {school.classesOffered}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={phones[0].href}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <LuPhone className="h-3.5 w-3.5" aria-hidden="true" />{" "}
              {phones[0].label}
            </a>
            <a
              href={emails[0].href}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <LuMail className="h-3.5 w-3.5" aria-hidden="true" />{" "}
              {emails[0].label}
            </a>
            <span className="flex items-center gap-1.5">
              <LuClock className="h-3.5 w-3.5" aria-hidden="true" />{" "}
              {officeHours.summary}
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? "border-forest/10 shadow-[0_10px_30px_-18px_rgba(15,43,36,0.35)]"
            : "border-transparent"
        }`}
      >
        <div
          className={`container-site flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[68px]" : "h-[76px]"}`}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[0.92rem] font-semibold 2xl:px-4 transition-colors ${
                        isActive
                          ? "text-forest"
                          : "text-ink-soft hover:text-forest"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-sage"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative">{item.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-clay px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-clay transition-colors hover:bg-clay hover:text-white sm:inline-flex"
            >
              Admissions Open
              <LuArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-forest transition-colors hover:bg-forest hover:text-ivory xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <LuX className="h-5 w-5" />
              ) : (
                <LuMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="fixed inset-0 z-[65] bg-forest-950/50 backdrop-blur-sm xl:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                id="mobile-menu"
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col overflow-y-auto bg-ivory shadow-2xl xl:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
              >
                <div className="flex items-center justify-between border-b border-forest/10 px-6 py-5">
                  <p className="eyebrow">Menu</p>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      menuBtnRef.current?.focus();
                    }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-forest hover:bg-forest hover:text-ivory"
                    aria-label="Close menu"
                  >
                    <LuX className="h-5 w-5" />
                  </button>
                </div>
                <nav aria-label="Mobile" className="flex-1 px-6 py-4">
                  <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.06,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {navigation.map((item, i) => (
                      <motion.li
                        key={item.to}
                        variants={{
                          hidden: { opacity: 0, x: 24 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          className={({ isActive }) =>
                            `flex items-baseline gap-4 border-b border-forest/[0.08] py-4 font-serif text-2xl transition-colors ${
                              isActive
                                ? "text-clay"
                                : "text-ink hover:text-forest"
                            }`
                          }
                        >
                          <span className="font-sans text-xs font-bold text-ink-soft/60">
                            0{i + 1}
                          </span>
                          {item.label}
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 w-full"
                  >
                    Admissions Open {school.admissionYearShort}
                  </a>
                </nav>
                <div className="space-y-3 bg-sage px-6 py-6 text-sm">
                  <a
                    href={phones[0].href}
                    className="flex items-center gap-3 text-ink hover:text-clay"
                  >
                    <LuPhone
                      className="h-4 w-4 text-forest"
                      aria-hidden="true"
                    />{" "}
                    {phones[0].label}
                  </a>
                  <a
                    href={whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink hover:text-clay"
                  >
                    <FaWhatsapp
                      className="h-4 w-4 text-[#128C4B]"
                      aria-hidden="true"
                    />{" "}
                    {whatsapp.label}
                  </a>
                  <p className="flex items-center gap-3 text-ink-soft">
                    <LuClock
                      className="h-4 w-4 text-forest"
                      aria-hidden="true"
                    />{" "}
                    {officeHours.summary}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
