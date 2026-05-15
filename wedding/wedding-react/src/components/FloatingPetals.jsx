import { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeUp } from 'react-icons/fa';

export default function FloatingPetals() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  // Floating petals — dense shower
  useEffect(() => {
    const petals = ['🌸', '🌺', '🌼', '✿', '❀', '💮', '🏵️'];
    const PETALS_PER_TICK = 3;

    const id = setInterval(() => {
      if (!containerRef.current) return;
      for (let i = 0; i < PETALS_PER_TICK; i++) {
        const petal = document.createElement('div');
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        const size = Math.random() * 0.8 + 0.5;
        const duration = Math.random() * 6 + 7;
        const delay = Math.random() * 2;
        petal.style.cssText = `
          position: fixed; pointer-events: none; z-index: 500;
          left: ${Math.random() * 100}vw;
          font-size: ${size}rem;
          opacity: 0;
          animation: petalFall ${duration}s linear ${delay}s 1 forwards;
        `;
        containerRef.current.appendChild(petal);
        setTimeout(() => petal.remove(), (duration + delay) * 1000 + 1000);
      }
    }, 800);
    return () => clearInterval(id);
  }, []);

  function toggleMusic() {
    setMusicPlaying(prev => {
      const next = !prev;
      if (next) {
        try {
          if (!audioRef.current) audioRef.current = new (window.AudioContext || window.webkitAudioContext)();
          const ctx = audioRef.current;
          const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
          const melody = [0, 2, 4, 5, 7, 5, 4, 2, 0, 2, 4, 7];
          melody.forEach((n, i) => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(notes[n % notes.length], ctx.currentTime + i * 0.7);
            g.gain.setValueAtTime(0, ctx.currentTime + i * 0.7);
            g.gain.linearRampToValueAtTime(0.025, ctx.currentTime + i * 0.7 + 0.3);
            g.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.7 + 1.2);
            osc.connect(g); g.connect(ctx.destination);
            osc.start(ctx.currentTime + i * 0.7);
            osc.stop(ctx.currentTime + i * 0.7 + 1.2);
          });
        } catch { /* ignore */ }
      }
      return next;
    });
  }

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[500]" />
      <button
        onClick={toggleMusic}
        title="Toggle Music"
        className="fixed bottom-6 right-6 z-[1000] w-12 h-12 rounded-full bg-ivory/90 border border-gold/40 shadow-lg cursor-pointer flex items-center justify-center backdrop-blur-lg hover:scale-110 hover:border-gold transition-all duration-300 text-lg text-gold"
      >
        {musicPlaying ? <FaVolumeUp /> : <FaMusic />}
      </button>
    </>
  );
}
