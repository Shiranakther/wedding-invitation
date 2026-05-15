import { useReveal } from '../hooks/useReveal';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Quote() {
  const [ref, vis] = useReveal();

  return (
    <section className="text-center overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #f9f2e5 0%, #f3e9d8 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="text-gold/40 tracking-[0.5em] text-lg">✦ ✦ ✦</div>
        <div className="w-40 h-px gold-gradient mx-auto my-6" />
        <blockquote
          ref={ref}
          className={`font-serif text-2xl md:text-5xl italic font-light text-text-dark leading-snug max-w-[700px] mx-auto transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <FaQuoteLeft className="inline text-gold text-xl md:text-2xl mr-2 align-top" />
          You are my today and all<br />of my tomorrows.
          <FaQuoteRight className="inline text-gold text-xl md:text-2xl ml-2 align-top" />
        </blockquote>
        <p className={`font-sans text-sm text-rose-gold italic mt-4 transition-all duration-700 delay-100 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          දෙහදක් එකම සිහිනයකට එක්වන සුන්දර මොහොතක්...
        </p>
        <div className="w-40 h-px gold-gradient mx-auto my-6" />
        <div className="text-gold/40 tracking-[0.5em] text-lg">✦ ✦ ✦</div>
      </div>
    </section>
  );
}
