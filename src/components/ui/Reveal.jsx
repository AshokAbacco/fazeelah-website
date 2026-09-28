import { motion } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const staggerParent = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Scroll-triggered fade-up reveal (runs once). */
export function Reveal({ children, delay = 0, y = 30, as = 'div', ...rest }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Parent that staggers <StaggerItem> children when scrolled into view. */
export function Stagger({ children, stagger = 0.08, delay = 0, as = 'div', ...rest }) {
  const Comp = motion[as];
  return (
    <Comp
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ children, as = 'div', ...rest }) {
  const Comp = motion[as];
  return (
    <Comp variants={fadeUp} {...rest}>
      {children}
    </Comp>
  );
}

/**
 * Image that reveals with a sliding "curtain" + gentle zoom when scrolled into view.
 * `shape`: 'rounded' | 'circle' | 'arch' (4:5) | 'arch-2-3' | 'arch-3-5' | 'arch-1-2'
 * — the arched-window frame used across the site.
 */
export function RevealImage({ src, alt, className = '', imgClassName = '', delay = 0, shape = 'rounded', eager = false }) {
  const radius = shape.startsWith('arch') ? shape : shape === 'circle' ? 'rounded-full' : 'rounded-3xl';
  return (
    <motion.div
      className={`relative overflow-hidden bg-sage ${radius} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        variants={{ hidden: { scale: 1.18 }, show: { scale: 1, transition: { duration: 1.5, delay, ease } } }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 bg-sage-dark"
        variants={{ hidden: { y: '0%' }, show: { y: '-101%', transition: { duration: 1, delay, ease } } }}
      />
    </motion.div>
  );
}
