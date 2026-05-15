import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaInstagram, FaFacebookF, FaTiktok, FaHashtag } from 'react-icons/fa';

const hashtags = ['#NethmiWedsKavindu', '#ForeverStartsHere', '#SriLankanWedding2026', '#N♥K2026', '#CinnamonGrandWedding'];

export default function Social() {
  const [ref, vis] = useReveal();

  return (
    <section id="social" className="bg-champagne">
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<FaHashtag className="text-gold/40" />} title="Share the" titleEm="Love" subtitle="Use our wedding hashtag and share your memories" />

        <div
          ref={ref}
          className={`flex flex-wrap gap-3 justify-center mt-8 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {hashtags.map((h) => (
            <div key={h} className="px-5 py-2 border border-gold/35 rounded-full font-serif text-sm text-text-mid bg-white/60 backdrop-blur-sm hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer">
              {h}
            </div>
          ))}
        </div>

        <div className={`flex gap-4 justify-center mt-8 transition-all duration-700 delay-300 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { icon: <FaInstagram />, label: 'Instagram' },
            { icon: <FaFacebookF />, label: 'Facebook' },
            { icon: <FaTiktok />, label: 'TikTok' },
          ].map(({ icon, label }) => (
            <a key={label} href="#" title={label}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-lg text-gold hover:scale-110 hover:shadow-md transition-all duration-300">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
