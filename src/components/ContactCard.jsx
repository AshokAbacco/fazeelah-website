import { motion } from 'framer-motion';
import { fadeUp } from './ui/Reveal.jsx';

export default function ContactCard({ icon: Icon, title, children, footer }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col rounded-3xl border border-forest/[0.08] bg-white p-7 shadow-card transition-shadow duration-500 hover:shadow-lift sm:p-9"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-b-[14px] rounded-t-[28px] bg-sage text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-ivory">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-clay">{title}</h3>
      </div>
      <div className="mt-7 flex-1 text-ink">{children}</div>
      {footer && <div className="mt-7 border-t border-forest/[0.08] pt-5">{footer}</div>}
    </motion.article>
  );
}
