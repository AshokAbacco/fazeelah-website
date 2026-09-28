import { Reveal } from './Reveal.jsx';

/** Eyebrow label + serif heading + optional lead paragraph. */
export default function SectionHeading({
  id,
  label,
  title,
  description,
  align = 'center',
  tone = 'dark',
  as: Tag = 'h2',
  className = '',
}) {
  const center = align === 'center';
  const light = tone === 'light';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className={`eyebrow ${center ? 'eyebrow-center' : ''} ${light ? '!text-clay-light' : ''}`}>{label}</p>
      <Tag
        id={id}
        className={`mt-5 text-[2.1rem] font-medium leading-[1.1] sm:text-[2.7rem] lg:text-[3.2rem] ${light ? '!text-ivory' : ''}`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-ivory/70' : 'text-ink-soft'}`}>{description}</p>
      )}
    </Reveal>
  );
}
