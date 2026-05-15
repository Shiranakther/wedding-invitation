import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-gold/15 text-center py-10 px-6">
      <div className="font-serif text-2xl text-gold tracking-[0.3em] mb-2 flex items-center justify-center gap-2">
        N <FaHeart className="text-rose-gold text-sm" /> K
      </div>
      <div className="text-xs text-text-light tracking-[0.2em] font-light">12 · 12 · 2026</div>
      <div className="w-20 h-px gold-gradient mx-auto my-4" />
      <div className="text-[0.7rem] text-text-light/60 font-light flex items-center justify-center gap-1">
        Made with love for a celebration of love <FaHeart className="text-rose-gold text-[0.5rem]" />
      </div>
    </footer>
  );
}
