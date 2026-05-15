import { useEffect, useState, useRef } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create loading particles
    if (containerRef.current) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 60 + 20;
        p.style.cssText = `
          position:absolute; border-radius:50%;
          background: radial-gradient(circle, rgba(201,168,76,0.4), transparent);
          width:${size}px; height:${size}px;
          left:${Math.random() * 100}%;
          animation: floatUp ${Math.random() * 8 + 6}s linear ${Math.random() * 6}s infinite;
        `;
        containerRef.current.appendChild(p);
      }
    }
    const timer = setTimeout(() => setHidden(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 transition-all duration-1000
        ${hidden ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      style={{ background: 'radial-gradient(ellipse at 50% 30%, #fdf6e8 0%, #f5ece0 40%, #ede3d8 100%)' }}
    >
      {/* Particles */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Mandala */}
      <div className="w-[120px] h-[120px] rounded-full border border-gold/30 flex items-center justify-center relative"
        style={{ animation: 'mandalaRotate 8s linear infinite' }}>
        <div className="absolute w-[80%] h-[80%] rounded-full border border-gold/20" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-gold/20"
          style={{ animation: 'mandalaRotate 4s linear infinite reverse' }} />
        <span className="text-2xl text-gold/60">✿</span>
      </div>

      {/* Initials */}
      <div className="font-serif text-4xl md:text-5xl font-light text-gold tracking-[0.3em] text-center"
        style={{ animation: 'fadeGlow 2s ease-in-out infinite alternate' }}>
        N ♥ K
      </div>

      {/* Welcome */}
      <div className="font-serif text-sm md:text-lg font-light text-text-mid tracking-[0.15em] text-center"
        style={{ animation: 'fadeIn 1.5s ease 0.5s both' }}>
        Welcome to Our Wedding Celebration
      </div>

      <div className="text-xs md:text-sm text-text-light font-light text-center px-4"
        style={{ animation: 'fadeIn 1.5s ease 1s both' }}>
        අපගේ ආදරණීය විවාහ මංගල්‍යයට සාදරයෙන් පිළිගනිමු
      </div>

      <div className="font-display text-xl md:text-2xl text-text-dark tracking-[0.1em]"
        style={{ animation: 'fadeIn 1.5s ease 1.5s both' }}>
        Nethmi ♥ Kavindu
      </div>

      <div className="font-serif text-sm text-rose-gold tracking-[0.25em] uppercase"
        style={{ animation: 'fadeIn 1.5s ease 2s both' }}>
        12 December 2026
      </div>

      {/* Loading bar */}
      <div className="w-40 h-px bg-gold/15 relative overflow-hidden"
        style={{ animation: 'fadeIn 1s ease 2s both' }}>
        <div className="absolute inset-y-0 left-[-100%] w-full gold-gradient"
          style={{ animation: 'loadBar 2.5s ease 2s forwards' }} />
      </div>
    </div>
  );
}
