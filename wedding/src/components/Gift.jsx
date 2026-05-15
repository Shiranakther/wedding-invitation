import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaGift, FaHeart } from 'react-icons/fa';

export default function Gift() {
  const [ref, vis] = useReveal();

  return (
    <section id="gift" style={{ background: 'radial-gradient(ellipse at center, #fdf6e8 0%, #f3e9d8 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<FaGift className="text-gold/40" />} title="With" titleEm="Gratitude" subtitle="" />

        <p
          ref={ref}
          className={`font-serif text-base md:text-lg italic text-text-mid max-w-[500px] mx-auto leading-relaxed mb-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          "Your love and blessings are the greatest gift of all.<br />
          Simply having you celebrate with us is more than enough."
        </p>

        {/* <div className={`max-w-[400px] mx-auto glass-card rounded-3xl p-6 shadow-sm transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <FaHeart className="text-3xl text-rose-gold mx-auto mb-3" />
          <div className="font-serif text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-1">Optional Gift</div>
          <div className="font-display text-base text-text-dark">Honeymoon Fund</div>
          <div className="text-xs text-text-light font-light mt-2">
            For those who wish to contribute to our honeymoon adventure, details will be shared at the venue.
          </div>
        </div> */}
      </div>
    </section>
  );
}
