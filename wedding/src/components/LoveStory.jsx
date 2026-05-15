import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaHeart, FaCoffee, FaSun, FaRing, FaCrown } from 'react-icons/fa';
import { LuFlower2, LuSparkles } from 'react-icons/lu';

const events = [
  { year: '2019', title: 'The First Meeting', desc: 'It all started with a simple conversation that became a lifetime connection at a mutual friend\'s gathering.', sinhala: 'දෙහදක සුන්දර පළමු හමුවීම...', icon: <FaCoffee /> },
  { year: '2020', title: 'Friendship Blossoms', desc: 'What began as conversations grew into long walks, shared laughter, and an unspoken bond.', sinhala: 'සරල හමුවීමක් සදාකාලික ආදර කතාවක් බවට...', icon: <LuFlower2 /> },
  { year: '2021', title: 'Love Confessed', desc: 'Under a sunset sky in Galle, Kavindu told Nethmi what his heart had been saying all along.', sinhala: 'ආදරය ප්‍රකාශ කළ ඒ සොඳුරු සැඳෑව...', icon: <FaSun /> },
  { year: '2023', title: 'The Proposal', desc: 'In the quiet of a lotus-lit evening, he asked — and she said yes, in a heartbeat.', sinhala: 'මුළු ජීවිතයටම එක්වන්නට දුන් පොරොන්දුව...', icon: <FaRing /> },
  { year: '2024', title: 'The Engagement', desc: 'Surrounded by family and flowers, they promised their forever to each other as two families became one.', sinhala: 'පවුල් දෙකක ආදරණීය බැඳීමක ඇරඹුම...', icon: <LuSparkles /> },
  { year: '2026', title: 'The Wedding', desc: 'The most beautiful chapter yet — where two souls unite before their loved ones, forever.', sinhala: 'සදාකාලික ආදර ගමනක නව ආරම්භය...', icon: <FaCrown /> },
];

function TimelineItem({ event, index }) {
  const [ref, vis] = useReveal();
  const isOdd = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-[50px_1fr] md:grid-cols-[1fr_60px_1fr] gap-4 md:gap-0 mb-16 items-center transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Desktop: alternating sides */}
      {isOdd ? (
        <>
          <div className="hidden md:block text-right pr-8">
            <div className="font-serif text-xs tracking-[0.25em] text-gold uppercase mb-1">{event.year}</div>
            <div className="font-display text-lg text-text-dark mb-1">{event.title}</div>
            <div className="font-serif text-sm italic text-text-mid leading-relaxed">
              {event.desc}<br />
              <span className="text-rose-gold not-italic text-xs">{event.sinhala}</span>
            </div>
          </div>
          <div className="hidden md:flex w-11 h-11 rounded-full bg-champagne border border-gold/40 items-center justify-center text-lg flex-shrink-0 shadow-[0_0_0_8px_rgba(201,168,76,0.06)] mx-auto">
            {event.icon}
          </div>
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          <div className="hidden md:flex w-11 h-11 rounded-full bg-champagne border border-gold/40 items-center justify-center text-lg flex-shrink-0 shadow-[0_0_0_8px_rgba(201,168,76,0.06)] mx-auto">
            {event.icon}
          </div>
          <div className="hidden md:block text-left pl-8">
            <div className="font-serif text-xs tracking-[0.25em] text-gold uppercase mb-1">{event.year}</div>
            <div className="font-display text-lg text-text-dark mb-1">{event.title}</div>
            <div className="font-serif text-sm italic text-text-mid leading-relaxed">
              {event.desc}<br />
              <span className="text-rose-gold not-italic text-xs">{event.sinhala}</span>
            </div>
          </div>
        </>
      )}

      {/* Mobile layout always left-aligned */}
      <div className="flex md:hidden w-11 h-11 rounded-full bg-champagne border border-gold/40 items-center justify-center text-lg flex-shrink-0 shadow-[0_0_0_8px_rgba(201,168,76,0.06)]">
        {event.icon}
      </div>
      <div className="md:hidden">
        <div className="font-serif text-xs tracking-[0.25em] text-gold uppercase mb-1">{event.year}</div>
        <div className="font-display text-lg text-text-dark mb-1">{event.title}</div>
        <div className="font-serif text-sm italic text-text-mid leading-relaxed">
          {event.desc}<br />
          <span className="text-rose-gold not-italic text-xs">{event.sinhala}</span>
        </div>
      </div>
    </div>
  );
}

export default function LoveStory() {
  return (
    <section id="love-story" className="bg-ivory">
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<FaHeart className="text-gold/40" />} title="Our" titleEm="Love Story" subtitle="The journey of two hearts becoming one" />

        <div className="relative max-w-[700px] mx-auto mt-12">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px opacity-30"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-gold), var(--color-gold), transparent)' }} />
          <div className="md:hidden absolute left-[24px] top-0 bottom-0 w-px opacity-30"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-gold), var(--color-gold), transparent)' }} />

          {events.map((event, i) => (
            <TimelineItem key={event.year} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
