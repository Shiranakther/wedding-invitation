import { useReveal } from '../hooks/useReveal';
import { PiFlowerLotusFill } from 'react-icons/pi';

/* ─── Tiny SVG components for wedding-card ornaments ─── */

function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 md:w-20 gold-gradient opacity-60" />
      <PiFlowerLotusFill className="text-gold/50 text-sm" />
      <div className="h-px w-12 md:w-20 gold-gradient opacity-60" />
    </div>
  );
}

function WeddingRings() {
  return (
    <div className="flex items-center justify-center my-4">
      <svg width="64" height="36" viewBox="0 0 64 36" fill="none" className="drop-shadow-sm">
        {/* Left ring */}
        <ellipse cx="22" cy="18" rx="14" ry="14" stroke="url(#ringGrad)" strokeWidth="2.2" fill="none" opacity="0.85"/>
        {/* Right ring */}
        <ellipse cx="42" cy="18" rx="14" ry="14" stroke="url(#ringGrad)" strokeWidth="2.2" fill="none" opacity="0.85"/>
        {/* Interlock shimmer */}
        <ellipse cx="32" cy="18" rx="4" ry="10" fill="url(#ringGlow)" opacity="0.18"/>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="64" y2="36">
            <stop offset="0%" stopColor="#c9a84c"/>
            <stop offset="50%" stopColor="#e8d08a"/>
            <stop offset="100%" stopColor="#c9a84c"/>
          </linearGradient>
          <radialGradient id="ringGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#e8d08a" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function CornerOrnament({ position }) {
  const base = 'absolute text-gold/25 pointer-events-none select-none';
  const posClass = {
    tl: 'top-3 left-3 md:top-5 md:left-5',
    tr: 'top-3 right-3 md:top-5 md:right-5 -scale-x-100',
    bl: 'bottom-3 left-3 md:bottom-5 md:left-5 -scale-y-100',
    br: 'bottom-3 right-3 md:bottom-5 md:right-5 -scale-x-100 -scale-y-100',
  }[position];

  return (
    <svg className={`${base} ${posClass} w-10 h-10 md:w-14 md:h-14`} viewBox="0 0 60 60" fill="none">
      <path d="M5 55 Q5 5 55 5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
      <path d="M10 55 Q10 10 55 10" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35"/>
      <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.3"/>
      <path d="M3 20 C8 15 15 8 20 3" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3"/>
    </svg>
  );
}

function MandalaBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" viewBox="0 0 400 400" fill="none" style={{ animation: 'mandalaRotate 120s linear infinite' }}>
        {/* Outer petals */}
        {[...Array(12)].map((_, i) => (
          <ellipse key={i} cx="200" cy="80" rx="25" ry="60" fill="#c9a84c" transform={`rotate(${i * 30} 200 200)`} />
        ))}
        {/* Inner petals */}
        {[...Array(8)].map((_, i) => (
          <ellipse key={`inner-${i}`} cx="200" cy="120" rx="18" ry="40" fill="#c9a84c" transform={`rotate(${i * 45} 200 200)`} />
        ))}
        {/* Center circles */}
        <circle cx="200" cy="200" r="50" stroke="#c9a84c" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="30" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
        <circle cx="200" cy="200" r="12" fill="#c9a84c" opacity="0.4" />
      </svg>
    </div>
  );
}

function DoveIllustration({ flip = false }) {
  return (
    <svg className={`w-6 h-6 md:w-8 md:h-8 text-gold/30 ${flip ? '-scale-x-100' : ''}`} viewBox="0 0 32 32" fill="currentColor">
      <path d="M8 24c4-2 7-6 8-10 1 4 4 8 8 10-3-1-6 0-8 2-2-2-5-3-8-2z" opacity="0.6"/>
      <path d="M16 14c0-3 2-6 5-8-2 1-4 3-5 5-1-2-3-4-5-5 3 2 5 5 5 8z" opacity="0.5"/>
    </svg>
  );
}

export default function Invitation() {
  const [refCard, visCard] = useReveal();
  const [refParents, visParents] = useReveal();
  const [refInvite, visInvite] = useReveal();
  const [refDetails, visDetails] = useReveal();
  const [refFooter, visFooter] = useReveal();

  return (
    <section
      id="invitation"
      className="text-center py-16 md:py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #f7f0e3 0%, #faf5ec 30%, #fdf9f0 60%, #f7f0e3 100%)' }}
    >
      {/* ─── THE CARD ─── */}
      <div
        ref={refCard}
        className={`relative max-w-[640px] mx-auto rounded-2xl overflow-hidden transition-all duration-1000 ${visCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          background: 'linear-gradient(180deg, #fefcf7 0%, #faf5ec 30%, #f8f0e2 70%, #fefcf7 100%)',
          boxShadow: '0 4px 60px rgba(201,168,76,0.12), 0 1px 3px rgba(0,0,0,0.04)',
          border: '1px solid rgba(201,168,76,0.18)',
        }}
      >
        {/* Mandala watermark */}
        <MandalaBg />

        {/* Corner ornaments */}
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        {/* Inner decorative border */}
        <div className="absolute inset-3 md:inset-5 border border-gold/10 rounded-xl pointer-events-none" />
        <div className="absolute inset-5 md:inset-7 border border-gold/[0.06] rounded-lg pointer-events-none" />

        {/* ─── Card Content ─── */}
        <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">

          {/* ═══ TOP HEADING ═══ */}
          <div className="mb-6">
            <div className="text-gold/35 tracking-[0.5em] text-xs flex items-center justify-center gap-2 mb-4">
              ✦ ✦ ✦
            </div>
            <h2
              className="text-2xl md:text-[2rem] leading-snug"
              style={{
                fontFamily: "'Maname', serif",
                color: '#8b3a3a',
                textShadow: '0 1px 2px rgba(139,58,58,0.08)',
              }}
            >
              ශ්‍රී සුභ මංගල්‍යය
            </h2>
            <div className="text-gold/30 tracking-[0.4em] text-[0.6rem] mt-2 uppercase font-light">
              Auspicious Wedding Ceremony
            </div>
          </div>

          <GoldDivider className="my-5" />

          {/* ═══ NILAME ILLUSTRATION ═══ */}
          <div className="relative mx-auto w-40 h-48 md:w-52 md:h-60 my-6">
            {/* Soft glow behind image */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, rgba(245,239,230,0.3) 50%, transparent 70%)',
                transform: 'scale(1.4)',
              }}
            />
            <img
              src="/images/nilame.png"
              alt="Traditional Sri Lankan Wedding Couple"
              className="relative w-full h-full object-contain drop-shadow-md"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(139,58,58,0.1))' }}
            />
          </div>

          <GoldDivider className="my-5" />

          {/* ═══ PARENT NAMES ═══ */}
          <div
            ref={refParents}
            className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 my-8 transition-all duration-700 delay-200 ${visParents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Bride Side */}
            <div className="text-center">
              <p className="text-text-light text-sm mb-2" style={{ fontFamily: "'Maname', serif" }}>
                දයාබර
              </p>
              <p className="text-text-mid text-sm leading-loose" style={{ fontFamily: "'Maname', serif" }}>
                සමන් පෙරේරා මහතාගේ<br />
                <span className="text-text-light text-xs">සහ</span><br />
                මාලනී පෙරේරා මහත්මියගේ
              </p>
              <p className="text-rose-gold text-sm mt-3" style={{ fontFamily: "'Maname', serif" }}>
                ආදරණීය දියණිය
              </p>
              <p
                className="text-xl md:text-2xl mt-2"
                style={{
                  fontFamily: "'Maname', serif",
                  color: '#8b3a3a',
                }}
              >
                නෙත්මි පෙරේරා
              </p>
              <p className="font-display text-sm text-text-mid mt-1 italic">Nethmi Perera</p>
            </div>

            {/* Center — Wedding Rings */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-px h-8 bg-gold/15" />
              <WeddingRings />
              <div className="w-px h-8 bg-gold/15" />
            </div>

            {/* Mobile rings */}
            <div className="flex md:hidden items-center justify-center">
              <WeddingRings />
            </div>

            {/* Groom Side */}
            <div className="text-center">
              <p className="text-text-light text-sm mb-2" style={{ fontFamily: "'Maname', serif" }}>
                දයාබර
              </p>
              <p className="text-text-mid text-sm leading-loose" style={{ fontFamily: "'Maname', serif" }}>
                චන්දන ප්‍රනාන්දු මහතාගේ<br />
                <span className="text-text-light text-xs">සහ</span><br />
                ශිරෝමි ප්‍රනාන්දු මහත්මියගේ
              </p>
              <p className="text-rose-gold text-sm mt-3" style={{ fontFamily: "'Maname', serif" }}>
                ආදරණීය පුතු
              </p>
              <p
                className="text-xl md:text-2xl mt-2"
                style={{
                  fontFamily: "'Maname', serif",
                  color: '#8b3a3a',
                }}
              >
                කවිඳු ප්‍රනාන්දු
              </p>
              <p className="font-display text-sm text-text-mid mt-1 italic">Kavindu Fernando</p>
            </div>
          </div>

          <GoldDivider className="my-6" />

          {/* ═══ MAIN SINHALA INVITATION ═══ */}
          <div
            ref={refInvite}
            className={`my-8 transition-all duration-700 delay-300 ${visInvite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div
              className="text-base md:text-lg leading-loose"
              style={{
                fontFamily: "'Maname', serif",
                color: '#5a3e35',
              }}
            >
              <p>ආදරණීය ආශිර්වාදය මධ්‍යයේ</p>
              <p>අපගේ විවාහ මංගල්‍ය උත්සවයට</p>
              <p>ඔබ හා ඔබගේ පවුලේ සැම</p>
              <p className="mb-0">ගෞරවයෙන් ආරාධනා කරමු.</p>
            </div>

            <p className="text-xs text-text-light italic mt-4 font-light tracking-wide">
              We warmly invite you and your family to grace our wedding celebration with your blessings.
            </p>
          </div>

          <GoldDivider className="my-6" />

          {/* ═══ EVENT DETAILS — 3 COLUMNS ═══ */}
          <div
            ref={refDetails}
            className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-0 my-8 transition-all duration-700 delay-400 ${visDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Date */}
            <div className="text-center px-2">
              <p className="text-gold text-[0.65rem] tracking-[0.2em] mb-2" style={{ fontFamily: "'Maname', serif" }}>දිනය</p>
              <p className="text-sm text-text-mid leading-relaxed" style={{ fontFamily: "'Maname', serif" }}>
                වර්ෂ දෙදහස් විසි හය<br />
                දෙසැම්බර් මස<br />
                දොළොස් වන දින
              </p>
              <p className="text-xs text-text-light mt-1 font-light italic">12 December 2026</p>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:flex items-center px-2">
              <div className="w-px h-16 bg-gold/15" />
            </div>
            <div className="md:hidden flex justify-center">
              <div className="w-16 h-px bg-gold/15" />
            </div>

            {/* Venue */}
            <div className="text-center px-2">
              <p className="text-gold text-[0.65rem] tracking-[0.2em] mb-2" style={{ fontFamily: "'Maname', serif" }}>ස්ථානය</p>
              <p className="text-sm text-text-dark font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                Willow Ballroom
              </p>
              <p className="text-sm text-text-mid" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Cinnamon Grand<br />Colombo
              </p>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:flex items-center px-2">
              <div className="w-px h-16 bg-gold/15" />
            </div>
            <div className="md:hidden flex justify-center">
              <div className="w-16 h-px bg-gold/15" />
            </div>

            {/* Time */}
            <div className="text-center px-2">
              <p className="text-gold text-[0.65rem] tracking-[0.2em] mb-2" style={{ fontFamily: "'Maname', serif" }}>වේලාව</p>
              <p className="text-sm text-text-mid leading-relaxed" style={{ fontFamily: "'Maname', serif" }}>
                පූර්ව භාග 10.30 සිට<br />
                අපර භාග 4.30 දක්වා
              </p>
              <p className="text-xs text-text-light mt-1 font-light italic">10:30 AM — 4:30 PM</p>
            </div>
          </div>

          <GoldDivider className="my-6" />

          {/* ═══ FOOTER — CLOSING ═══ */}
          <div
            ref={refFooter}
            className={`mt-6 transition-all duration-700 delay-500 ${visFooter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Dove illustrations */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <DoveIllustration />
              <PiFlowerLotusFill className="text-gold/25 text-xs" />
              <DoveIllustration flip />
            </div>

            <p
              className="text-lg md:text-xl"
              style={{
                fontFamily: "'Maname', serif",
                color: '#8b3a3a',
              }}
            >
              ඔබගේ පැමිණීම අපගේ සතුටයි
            </p>
            <p className="text-xs text-text-light italic mt-2 font-light tracking-wide">
              Your presence is our happiness
            </p>

            <div className="mt-6 pt-5 border-t border-gold/10">
              <p className="font-display text-lg md:text-xl text-text-dark tracking-wide">
                Nethmi & Kavindu
              </p>
              <p className="text-[0.6rem] text-gold/50 tracking-[0.35em] uppercase mt-1">
                12 · December · 2026
              </p>
            </div>

            <div className="text-gold/30 tracking-[0.5em] text-xs mt-6">
              ✦ ❦ ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
