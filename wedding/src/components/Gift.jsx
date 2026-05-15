import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaGift, FaHeart } from 'react-icons/fa';

export default function Gift() {
  const [ref, vis] = useReveal();

  return (
    <section
      id="gift"
      className="relative overflow-hidden"
      style={{ minHeight: '420px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/final.png')" }}
      />

      {/* Blur + dark gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          background:
            'linear-gradient(180deg, rgba(58,46,40,0.55) 0%, rgba(58,46,40,0.70) 50%, rgba(58,46,40,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader
          ornamentIcon={<FaGift className="text-gold-light/60" />}
          title="With"
          titleEm="Gratitude"
          subtitle=""
          light
        />

        <p
          ref={ref}
          className={`font-serif text-base md:text-lg italic text-ivory/90 max-w-[500px] mx-auto leading-relaxed mb-8 transition-all duration-700 ${
            vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
        >
          "Your love and blessings are the greatest gift of all.<br />
          Simply having you celebrate with us is more than enough."
        </p>
      </div>
    </section>
  );
}

