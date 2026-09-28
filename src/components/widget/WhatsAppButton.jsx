import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsapp } from '../../data/schoolData.js';

/** Green WhatsApp launcher with a subtle radar glow. */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Fazeelah admissions on WhatsApp (${whatsapp.label})`}
      className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)]"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="absolute inset-0 animate-radar rounded-full bg-whatsapp" aria-hidden="true" />
      <span className="absolute inset-0 animate-radar rounded-full bg-whatsapp [animation-delay:1.1s]" aria-hidden="true" />
      <FaWhatsapp className="relative h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        WhatsApp Admissions
      </span>
    </motion.a>
  );
}
