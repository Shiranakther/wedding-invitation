import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { PiFlowerLotusFill } from 'react-icons/pi';
import { FaLandmark, FaFire, FaDrum } from 'react-icons/fa';
import { LuFlower2, LuSparkles } from 'react-icons/lu';
import { MdOutlineHandshake } from 'react-icons/md';

const traditions = [
  { icon: <FaLandmark />, name: 'Poruwa Ceremony', desc: 'The sacred union under the Poruwa — an auspicious platform where vows are exchanged.', sinhala: 'පෝරුවේ චාරිත්‍රය - දෙහදක් එකම අරමුණක බැඳෙන පූජනීය මොහොත...' },
  { icon: <FaFire />, name: 'Oil Lamp Lighting', desc: 'The traditional oil lamp symbolises the light of wisdom and love guiding the journey ahead.', sinhala: 'මංගල පහන් දැල්වීම - ජීවිතය ආලෝකවත් කරන මංගල පහන් සිල...' },
  { icon: <LuFlower2 />, name: 'Floral Blessings', desc: 'Sacred jasmine and lotus garlands adorn the ceremony, bringing purity and divine blessings.', sinhala: 'මල් පූජාව - සුපිපුණු මල් සේ ජීවිතය සුවඳවත් කරන ආශිර්වාදය...' },
  { icon: <FaDrum />, name: 'Traditional Drumming', desc: 'The resonant beat of the Kandyan drum fills the air, announcing the union with joy.', sinhala: 'මංගල බෙර වාදනය - සතුට හා මංගල්‍යයේ රාවය ලොවට පවසන මොහොත...' },
  { icon: <LuSparkles />, name: 'Kandyan Dancers', desc: 'Graceful Ves dancers welcome the couple with traditional cultural elegance and colour.', sinhala: 'උඩරට නර්තනය - හෙළ සංස්කෘතියේ අභිමානයෙන් යුත් පිළිගැනීම...' },
  { icon: <MdOutlineHandshake />, name: 'Family Blessings', desc: 'Elders bestow blessings upon the couple, weaving together generations of love and heritage.', sinhala: 'වැඩිහිටි ආශිර්වාදය - පරම්පරාවක ආදරය මැද නව ගමනක ඇරඹුම...' },
];

function TraditionCard({ tradition, index }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-3xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl text-gold mb-4">{tradition.icon}</div>
      <div className="font-display text-base md:text-lg text-text-dark mb-2">{tradition.name}</div>
      <div className="font-serif text-sm italic text-text-mid leading-relaxed">
        {tradition.desc}
        <span className="block mt-2 text-rose-gold not-italic text-xs">{tradition.sinhala}</span>
      </div>
    </div>
  );
}

export default function Traditions() {
  return (
    <section id="ceremony" style={{ background: 'linear-gradient(160deg, #fdf6e8 0%, #f9edd8 50%, #f5e5cc 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<PiFlowerLotusFill className="text-gold/40" />} title="Sri Lankan" titleEm="Traditions" subtitle="" />

        <p className="font-sans text-xs md:text-sm font-light text-text-light max-w-[500px] mx-auto mb-10 leading-relaxed">
          ශ්‍රී ලාංකික සම්ප්‍රදායන්ගේ අලංකාරය හා ආශිර්වාදය සමඟින් අපගේ ආදර ගමන ආරම්භ වේ.<br />
          <span className="italic text-text-light/70 text-xs">With the beauty and blessings of Sri Lankan traditions, our love journey begins.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {traditions.map((t, i) => <TraditionCard key={t.name} tradition={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
