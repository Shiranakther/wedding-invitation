import { useReveal } from '../hooks/useReveal';

export default function SectionHeader({ ornamentIcon, title, titleEm, subtitle, delay = 0 }) {
  const [ref, vis] = useReveal();
  return (
    <div className="text-center mb-8">
      <div className="text-gold/40 tracking-[0.5em] text-lg mb-2 flex items-center justify-center gap-3">
        {ornamentIcon} {ornamentIcon} {ornamentIcon}
      </div>
      <div className="w-20 h-px gold-gradient mx-auto mb-6" />
      <h2
        ref={ref}
        className={`font-display text-3xl md:text-5xl font-normal text-text-dark transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {title} <em className="italic text-rose-gold">{titleEm}</em>
      </h2>
      {subtitle && (
        <p className={`font-serif text-sm md:text-base text-text-light tracking-[0.2em] mt-2 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
