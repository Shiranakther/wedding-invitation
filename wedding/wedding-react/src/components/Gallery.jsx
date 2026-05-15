import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaCamera } from 'react-icons/fa';

const images = [
  { src: '/images/img (1).png', size: 'h-[380px]', label: 'Magic Moments' },
  { src: '/images/img (2).png', size: 'h-[280px]', label: 'Beautiful Memories' },
  { src: '/images/img (3).png', size: 'h-[200px]', label: 'Joyful Times' },
  { src: '/images/img (4).png', size: 'h-[380px]', label: 'Forever Yours' },
  { src: '/images/img (5).png', size: 'h-[280px]', label: 'Natural Love' },
  { src: '/images/img(6).jpg', size: 'h-[200px]', label: 'Peaceful Together' },
  { src: '/images/img(7).jpg', size: 'h-[280px]', label: 'Eternal Bond' },
];

export default function Gallery() {
  const [ref, vis] = useReveal();

  return (
    <section id="gallery" className="bg-ivory">
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<FaCamera className="text-gold/40" />} title="Our" titleEm="Gallery" subtitle="Moments captured in love" />

        <div
          ref={ref}
          className={`columns-2 md:columns-3 gap-4 mt-10 transition-all duration-700 delay-200 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {images.map((img) => (
            <div key={img.src} className="break-inside-avoid mb-4 rounded-2xl overflow-hidden relative cursor-pointer group">
              <img
                src={img.src}
                alt={img.label}
                className={`gallery-img ${img.size} group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                <span className="text-white font-sans text-sm font-light tracking-wide">{img.label}</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
