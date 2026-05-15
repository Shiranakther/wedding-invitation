import { useState, useEffect } from 'react';
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaEnvelopeOpenText } from 'react-icons/fa';

export default function Hero() {
  const [countdown, setCountdown] = useState({ d: '--', h: '--', m: '--', s: '--' });

  useEffect(() => {
    function update() {
      const target = new Date('2026-12-12T10:30:00');
      const diff = target - new Date();
      if (diff <= 0) { setCountdown({ d: '🎉', h: '', m: '', s: '' }); return; }
      setCountdown({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 py-8 overflow-hidden bg-ivory">
      {/* Blurred BG */}
      <div
        className="absolute -inset-2.5 z-0 scale-105"
        style={{
          background: "url('/images/bg-hero.jpg') center/cover no-repeat fixed",
          filter: 'blur(6px) brightness(1.02)',
        }}
      />

      {/* Pinkey Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(250,248,243,0.75) 0%, rgba(242,213,208,0.55) 50%, #faf8f3 100%)' }} />

      {/* Soft floral accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(242,213,208,0.5), transparent 70%)' }} />
      <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-[2]">
        <div className="font-serif text-xs md:text-sm tracking-[0.35em] uppercase text-gold mb-6"
          style={{ animation: 'fadeIn 1s ease 0.3s both', textShadow: '0 1px 4px rgba(255,255,255,0.5)' }}>
          ✦ A Celebration of Love ✦
        </div>

        <h1 className="font-display text-4xl md:text-7xl font-normal leading-tight text-text-dark"
          style={{ animation: 'fadeIn 1s ease 0.5s both', textShadow: '0 2px 20px rgba(255,255,255,0.8), 0 1px 2px rgba(58,46,40,0.1)' }}>
          A New Journey<br /><em className="italic text-rose-gold">Begins…</em>
        </h1>

        <p className="font-sans text-xs md:text-sm font-light text-text-light mt-4 mb-8"
          style={{ animation: 'fadeIn 1s ease 0.7s both', textShadow: '0 1px 4px rgba(255,255,255,0.5)' }}>
          සදාකාලික ආදර ගමනක නව ආරම්භය...
        </p>

        <div className="font-serif text-3xl md:text-5xl font-light text-text-dark tracking-wide my-4"
          style={{ animation: 'fadeIn 1s ease 0.9s both', textShadow: '0 2px 15px rgba(255,255,255,0.6)' }}>
          Nethmi <FaHeart className="inline text-rose-gold text-xl md:text-2xl mx-2" /> Kavindu
        </div>

        <p className="font-serif text-sm md:text-base tracking-[0.25em] text-text-mid uppercase mb-1"
          style={{ animation: 'fadeIn 1s ease 1.1s both', textShadow: '0 1px 4px rgba(255,255,255,0.5)' }}>
          Sunday, 12 December 2026
        </p>
        <p className="flex items-center justify-center gap-1 font-sans text-xs md:text-sm font-light text-text-light mb-10"
          style={{ animation: 'fadeIn 1s ease 1.2s both', textShadow: '0 1px 4px rgba(255,255,255,0.5)' }}>
          <FaMapMarkerAlt className="text-gold text-xs" /> Cinnamon Grand Colombo, Sri Lanka
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-center flex-wrap my-8" style={{ animation: 'fadeIn 1s ease 1.3s both' }}>
          {[
            { val: countdown.d, label: 'Days' },
            { val: countdown.h, label: 'Hours' },
            { val: countdown.m, label: 'Minutes' },
            { val: countdown.s, label: 'Seconds' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center glass-card rounded-2xl px-5 py-3 min-w-[70px] shadow-sm">
              <span className="font-serif text-2xl md:text-4xl font-medium text-gold block">{val}</span>
              <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-text-light">{label}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mt-8" style={{ animation: 'fadeIn 1s ease 1.5s both' }}>
          <a href="#invitation"
            className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] uppercase px-8 py-3 gold-gradient text-white rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 no-underline">
            <FaEnvelopeOpenText /> View Invitation
          </a>
          <a href="#rsvp"
            className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] uppercase px-8 py-3 bg-transparent text-text-mid border border-gold/40 rounded-full hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300 no-underline">
            RSVP Now
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2" style={{ animation: 'fadeIn 1s ease 2s both' }}>
          <span className="text-[0.65rem] tracking-[0.25em] text-text-light uppercase">Scroll to explore</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)', animation: 'scrollPulse 2s ease infinite' }} />
        </div>
      </div>
    </section>
  );
}
