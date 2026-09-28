import { Link } from 'react-router-dom';
import { images } from '../../assets/images.js';
import { school } from '../../data/schoolData.js';

/** School crest + wordmark. On dark backgrounds the crest sits in an ivory medallion so its lettering stays legible. */
export default function Logo({ variant = 'header', onClick }) {
  const dark = variant === 'footer';
  return (
    <Link to="/" onClick={onClick} aria-label={`${school.name} — Home`} className="group inline-flex items-center gap-3">
      <span className={`flex shrink-0 items-center justify-center ${dark ? 'h-16 w-16 rounded-full bg-ivory p-1.5' : ''}`}>
        <img
          src={images.crest}
          alt=""
          width={300}
          height={283}
          className={`${dark ? 'h-full' : 'h-11 sm:h-12'} w-auto transition-transform duration-500 group-hover:scale-105`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.4rem] font-semibold tracking-[0.02em] sm:text-[1.55rem] ${dark ? 'text-ivory' : 'text-forest'}`}>
          Fazeelah
        </span>
        <span className={`mt-1 text-[0.58rem] font-bold uppercase tracking-[0.22em] sm:text-[0.62rem] ${dark ? 'text-ivory/60' : 'text-ink-soft'}`}>
          English Medium School
        </span>
      </span>
    </Link>
  );
}
