import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import { IoShirt, IoSparkles } from 'react-icons/io5';

const details = [
  { icon: <FaCalendarAlt />, label: 'Date', value: '12 December\n2026', sub: 'Sunday' },
  { icon: <FaClock />, label: 'Time', value: '10:30 AM', sub: 'Ceremony begins' },
  { icon: <FaMapMarkerAlt />, label: 'Venue', value: 'Cinnamon Grand\nColombo', sub: 'Grand Ballroom' },
  { icon: <FaUtensils />, label: 'Reception', value: '1:00 PM', sub: 'Lunch & celebration' },
  { icon: <IoShirt />, label: 'Dress Code', value: 'Ivory & Gold\nFormal', sub: 'Traditional or Western' },
];

function DetailCard({ detail, index }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-6 text-center hover:-translate-y-1.5 hover:shadow-lg hover:border-gold/40 transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-2xl text-gold mb-3">{detail.icon}</div>
      <div className="font-serif text-[0.65rem] tracking-[0.3em] text-gold uppercase mb-1">{detail.label}</div>
      <div className="font-display text-base md:text-lg text-text-dark whitespace-pre-line">{detail.value}</div>
      <div className="text-xs text-text-light font-light mt-1">{detail.sub}</div>
    </div>
  );
}

export default function EventDetails() {
  return (
    <section id="details" className="bg-champagne">
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<IoSparkles className="text-gold/40" />} title="Wedding" titleEm="Details" subtitle="Everything you need to join our celebration" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {details.map((d, i) => <DetailCard key={d.label} detail={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}
