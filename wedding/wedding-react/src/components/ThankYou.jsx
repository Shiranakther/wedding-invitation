import { useReveal } from '../hooks/useReveal';
import { PiFlowerLotusFill } from 'react-icons/pi';

export default function ThankYou() {
  const [refTitle, visTitle] = useReveal();
  const [refClosing, visClosing] = useReveal();

  return (
    <section id="thankyou" className="text-center min-h-[70vh] flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #fdf6e8 0%, #f5ece0 50%, #ede3d8 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <PiFlowerLotusFill className="text-4xl text-rose-gold mx-auto mb-4" />
        <div className="w-40 h-px gold-gradient mx-auto mb-8" />

        <h2
          ref={refTitle}
          className={`font-display text-3xl md:text-5xl text-text-dark leading-snug mb-2 transition-all duration-700 ${visTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Thank you for being<br />part of our <em className="text-rose-gold italic">love story</em>
        </h2>

        <p className={`font-sans text-sm font-light text-text-light italic mb-8 transition-all duration-700 delay-100 ${visTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          අපගේ ආදර ගමනේ කොටසක් වූ ඔබට ස්තූතියි.
        </p>

        <div className="w-40 h-px gold-gradient mx-auto mb-8" />

        <p
          ref={refClosing}
          className={`font-serif text-lg md:text-xl italic text-rose-gold transition-all duration-700 delay-200 ${visClosing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          With all our love,<br /><strong className="font-medium">Nethmi & Kavindu</strong>
        </p>

        <div className="text-gold/40 tracking-[0.5em] text-lg mt-8">✦ ❦ ✦</div>
      </div>
    </section>
  );
}
