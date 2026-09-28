import { schoolApp } from "../../data/schoolData.js";

/** Google Play's four-colour "play" mark. */
function GooglePlayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        fill="#00D7FE"
        d="M48 32c-9 5-15 15-15 28v392c0 13 6 23 15 28l212-224z"
      />
      <path fill="#00F076" d="M48 32l212 224 70-70L85 45c-14-8-28-11-37-13z" />
      <path fill="#FF3A44" d="M48 480c9-2 23-5 37-13l245-141-70-70z" />
      <path fill="#FFD500" d="M330 186l-70 70 70 70 84-48c24-14 24-50 0-64z" />
    </svg>
  );
}

/**
 * Official-style "GET IT ON Google Play" badge (black, rounded, colour logo).
 * Always clickable:
 *  - if `schoolApp.playStoreUrl` is set → opens the app's Play Store page
 *  - otherwise → opens a Google Play search for the app name (FAZEELAH EMS)
 */
export default function PlayStoreBadge({ className = "" }) {
  const url =
    schoolApp.playStoreUrl?.trim() ||
    `https://play.google.com/store/search?q=${encodeURIComponent(schoolApp.name)}&c=apps`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get the ${schoolApp.name} app on Google Play`}
      className={`group inline-flex h-[58px] shrink-0 items-center gap-3 rounded-[12px] border border-[#A6A6A6] bg-black px-4 pr-5 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_16px_30px_-12px_rgba(0,0,0,0.8)] focus-visible:outline-offset-4 ${className}`}
    >
      <GooglePlayIcon className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/90">
          Get it on
        </span>
        <span
          className="mt-1 text-[1.35rem] font-medium tracking-[-0.01em] text-white"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Google Play
        </span>
      </span>
    </a>
  );
}
