import { useState } from "react";
import { LuQuote } from "react-icons/lu";

/**
 * Testimonial card shared by the Home page section (variant="marquee")
 * and the /testimonials page (variant="grid").
 */

export function initials(name = "") {
  const clean = name.replace(/[[\]]/g, "").trim();
  if (!clean || /^(parent|teacher|student) name$/i.test(clean))
    return clean ? clean[0].toUpperCase() : "?";
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/* ------------------------------------------------------------------ */
/*  Student photos                                                     */
/*  Any of these work for `photo` in schoolData.js:                    */
/*   • "ayaan.jpg"                  → file in src/assets/testimonials/  */
/*   • "/testimonials/ayaan.jpg"    → file in public/testimonials/      */
/*   • "https://res.cloudinary.com/…" (any full image URL)             */
/*   • an imported image:  import ayaan from "../assets/…/ayaan.jpg"   */
/* ------------------------------------------------------------------ */

// Every image inside src/assets/testimonials/ is bundled automatically
const bundledPhotos = Object.fromEntries(
  Object.entries(
    import.meta.glob(
      "../../assets/testimonials/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
      { eager: true, query: "?url", import: "default" },
    ),
  ).map(([path, url]) => [path.split("/").pop().toLowerCase(), url]),
);

export function resolvePhoto(t) {
  const photo = t.photo || t.image || t.img;
  if (!photo) return null;
  if (typeof photo !== "string") return photo; // imported image module
  const value = photo.trim();
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  // Same file name inside src/assets/testimonials/ (also handles "src/assets/testimonials/x.jpg")
  const fileName = value.split("/").pop().toLowerCase();
  if (bundledPhotos[fileName]) return bundledPhotos[fileName];
  // Otherwise treat it as a file in /public
  const publicPath = value.replace(/^\.?\/?(public\/)?/, "/");
  try {
    return encodeURI(decodeURI(publicPath)); // allows spaces in file names
  } catch {
    return publicPath;
  }
}

/**
 * Round photo of any size for a person object ({ name, photo, photoPosition, student }).
 * Falls back to gold initials on dark green when there is no photo or it fails to load.
 */
export function PersonPhoto({
  person,
  className = "h-14 w-14",
  textClass = "text-base",
  ringClass = "",
}) {
  const [failed, setFailed] = useState(false);
  const src = resolvePhoto(person);
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`Photo of ${person.student || person.name}`}
        className={`shrink-0 rounded-full object-cover ${className} ${ringClass}`}
        style={
          person.photoPosition
            ? { objectPosition: person.photoPosition }
            : undefined
        }
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#18221F] font-serif text-[#F2B632] ${className} ${textClass} ${ringClass}`}
      aria-hidden="true"
    >
      {initials(person.name)}
    </span>
  );
}

/**
 * Round avatar: shows the student's photo when `photo` is set in schoolData.js,
 * otherwise (or if the image fails to load) the gold initials.
 */
function Avatar({ t, dark }) {
  const [failed, setFailed] = useState(false);
  const src = resolvePhoto(t);
  const ring = dark
    ? "ring-2 ring-[#F2B632]/50"
    : "ring-2 ring-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.35)]";

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`Photo of ${t.student || t.name}`}
        className={`h-14 w-14 shrink-0 rounded-full object-cover ${ring}`}
        style={
          t.photoPosition ? { objectPosition: t.photoPosition } : undefined
        }
        loading="lazy"
        decoding="async"
        onError={() => {
          if (import.meta.env.DEV)
            console.warn(
              `[Testimonials] Photo not found for "${t.name}": ${src}. Put it in src/assets/testimonials/ or public/testimonials/.`,
            );
          setFailed(true);
        }}
      />
    );
  }
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18221F] font-serif text-base text-[#F2B632] ${
        dark ? "ring-2 ring-[#F2B632]/50" : ""
      }`}
      aria-hidden="true"
    >
      {initials(t.name)}
    </span>
  );
}

/**
 * One testimonial card.
 * Light card = white (default). Dark card = website green theme.
 * Both use the same avatar style (dark circle with gold initials).
 */
export default function TestimonialCard({ t, dark, variant = "marquee" }) {
  return (
    <figure
      className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 ease-out sm:p-7 ${
        variant === "grid"
          ? "h-full w-full hover:-translate-y-1 motion-reduce:hover:translate-y-0"
          : "h-full w-[300px] shrink-0 origin-center hover:z-10 hover:scale-110 motion-reduce:hover:scale-100 sm:w-[360px]"
      } ${
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
        <Avatar t={t} dark={dark} />
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
