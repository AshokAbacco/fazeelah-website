import { Link } from "react-router-dom";
import { images } from "../../assets/images.js";
import { school } from "../../data/schoolData.js";

/** School crest + wordmark. On dark backgrounds the crest sits in an ivory medallion so its lettering stays legible. */
export default function Logo({ variant = "header", onClick }) {
  const dark = variant === "footer";
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${school.name} — Home`}
      className="group inline-flex items-center gap-3"
    >
      <span
        className={`flex shrink-0 items-center justify-center ${dark ? "h-16 w-16 rounded-full bg-ivory p-1.5" : ""}`}
      >
        <img
          src={images.crest}
          alt=""
          width={300}
          height={283}
          className={`${dark ? "h-full" : "h-12 sm:h-14"} w-auto transition-transform duration-500 group-hover:scale-105`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.65rem] font-bold uppercase tracking-[0.06em] sm:text-[1.95rem] ${dark ? "text-ivory" : "text-[#18221F]"}`}
        >
          FAZEELAH
        </span>
        <span
          className={`mt-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] sm:text-[0.68rem] ${dark ? "text-ivory/65" : "text-[#5E5A53]"}`}
        >
          English Medium School
        </span>
      </span>
    </Link>
  );
}
