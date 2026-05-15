import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function Venue() {
  const [ref, vis] = useReveal();

  return (
    <section id="venue" className="relative overflow-hidden min-h-[600px]">
      {/* ─── Blurred Background Image ─── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/cinnamon.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(4px)',
          transform: 'scale(1.05)',
        }}
      />
      {/* ─── Dark warm overlay for readability ─── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(42,30,22,0.55) 0%, rgba(42,30,22,0.65) 50%, rgba(42,30,22,0.7) 100%)',
        }}
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-20 text-center">
        {/* Section Header — light colors for dark bg */}
        <div className="mb-2">
          <div className="text-amber-200/40 tracking-[0.5em] text-lg flex items-center justify-center gap-3">
            <FaMapMarkerAlt />
          </div>
          <div className="w-20 h-px mx-auto my-4" style={{ background: 'linear-gradient(90deg, transparent, #e8d08a, transparent)' }} />
          <h2 className="font-display text-3xl md:text-5xl text-white/95 leading-snug">
            The <em className="text-amber-200 italic">Venue</em>
          </h2>
          <p className="font-serif text-sm md:text-base text-white/50 font-light mt-2 tracking-wider">
            Where our celebration takes place
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-[600px] mx-auto mt-10 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(232,208,138,0.15)',
          }}
        >
          <div className="font-display text-xl md:text-3xl text-white mb-1">Cinnamon Grand Colombo</div>
          <div className="text-sm text-amber-200/70 font-light mb-6" style={{ fontFamily: "'Maname', serif" }}>
            කොළඹ සිනමන් ග්‍රෑන්ඩ් හෝටලය
          </div>

          {/* Address & Map */}
          <div className="w-full rounded-2xl py-4 px-6 flex flex-col items-center gap-2 mb-6"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(232,208,138,0.1)',
            }}
          >
            <FaMapMarkerAlt className="text-2xl text-amber-200/60" />
            <div className="text-sm text-white/70 font-light">77 Galle Rd, Colombo 03, Sri Lanka</div>
            <a href="https://maps.google.com/?q=Cinnamon+Grand+Colombo" target="_blank" rel="noreferrer"
              className="text-xs text-amber-200 no-underline flex items-center gap-1 hover:underline hover:text-amber-100 transition-colors">
              Open in Google Maps <FaExternalLinkAlt className="text-[0.6rem]" />
            </a>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-left">
            {[
              { label: 'Hall', value: 'Grand Ballroom' },
              { label: 'Parking', value: 'Available on-site' },
              { label: 'Nearby Hotels', value: 'Kingsbury, Taj Samudra' },
              { label: 'Contact', value: '+94 11 2437437' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-[0.6rem] tracking-[0.2em] text-amber-200/60 uppercase mb-0.5">{label}</div>
                <div className="font-serif text-sm text-white/80">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
