import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaSun, FaUserTie, FaMusic, FaLandmark } from 'react-icons/fa';
import { LuFlower2, LuPartyPopper, LuCake, LuPen } from 'react-icons/lu';
import { MdCelebration } from 'react-icons/md';

const schedule = [
  { time: '7:00 AM', name: 'Bride Preparation', icon: <FaSun className="text-gold" /> },
  { time: '7:30 AM', name: 'Groom Preparation', icon: <FaUserTie className="text-gold" /> },
  { time: '9:30 AM', name: 'Guest Arrival & Welcome', icon: <LuFlower2 className="text-gold" /> },
  { time: '10:30 AM', name: 'Poruwa Ceremony Begins', icon: <FaLandmark className="text-gold" /> },
  { time: '11:15 AM', name: 'Marriage Registration', icon: <LuPen className="text-gold" /> },
  { time: '1:00 PM', name: 'Lunch Reception', icon: <LuPartyPopper className="text-gold" /> },
  { time: '2:30 PM', name: 'Cake Cutting Ceremony', icon: <LuCake className="text-gold" /> },
  { time: '3:00 PM', name: 'First Dance', icon: <FaMusic className="text-gold" /> },
  { time: '4:00 PM', name: 'Evening Celebration', icon: <MdCelebration className="text-rose-gold" /> },
];

function ScheduleItem({ item, index }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 py-4 border-b border-gold/10 text-left transition-all duration-600 ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="font-serif text-sm text-gold tracking-wide min-w-[70px] mt-0.5">{item.time}</div>
      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2 shadow-[0_0_0_4px_rgba(201,168,76,0.12)]" />
      <div className="flex items-center gap-2">
        <span className="text-lg">{item.icon}</span>
        <span className="font-display text-sm md:text-base text-text-dark">{item.name}</span>
      </div>
    </div>
  );
}

export default function DayTimeline() {
  return (
    <section id="day-timeline" className="bg-ivory">
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<LuFlower2 className="text-gold/40" />} title="The Wedding" titleEm="Day" subtitle="A beautiful day, beautifully planned" />

        <div className="max-w-[500px] mx-auto mt-10 flex flex-col">
          {schedule.map((item, i) => (
            <ScheduleItem key={item.time} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
