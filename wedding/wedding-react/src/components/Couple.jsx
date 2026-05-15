import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { PiFlowerLotusFill } from 'react-icons/pi';

export default function Couple() {
  const [refBride, visBride] = useReveal();
  const [refGroom, visGroom] = useReveal();

  return (
    <section id="couple" className="bg-ivory text-center">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        <SectionHeader ornamentIcon={<PiFlowerLotusFill className="text-gold/40" />} title="The" titleEm="Beloved Two" subtitle="The hearts who found each other" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Bride */}
          <div
            ref={refBride}
            className={`text-center p-8 glass-card rounded-3xl shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 ${visBride ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-5 border-2 border-gold/40 shadow-[0_0_0_6px_rgba(201,168,76,0.08)] overflow-hidden bg-beige">
              <img src="/images/bride.png" alt="Nethmi Perera - The Bride" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-xl md:text-2xl text-text-dark mb-1">Nethmi Perera</h3>
            <div className="font-serif text-sm tracking-[0.25em] text-gold uppercase mb-3">The Bride</div>
            <p className="text-xs text-text-light font-light mb-3">✨ Interior Designer · Colombo</p>
            <p className="font-serif text-base italic text-text-mid leading-relaxed">
              "A heart full of grace, a soul full of art — she turns every moment into something beautiful."
            </p>
            <p className="text-xs text-text-light font-light mt-2 leading-relaxed">
              ආදරයෙන් පිරුණු හදවතක්, ජීවිතය වර්ණ ගන්වන්නෙකු...
            </p>
          </div>

          {/* Groom */}
          <div
            ref={refGroom}
            className={`text-center p-8 glass-card rounded-3xl shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-500 delay-200 ${visGroom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-5 border-2 border-gold/40 shadow-[0_0_0_6px_rgba(201,168,76,0.08)] overflow-hidden bg-beige">
              <img src="/images/groom.png" alt="Kavindu Fernando - The Groom" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-xl md:text-2xl text-text-dark mb-1">Kavindu Fernando</h3>
            <div className="font-serif text-sm tracking-[0.25em] text-gold uppercase mb-3">The Groom</div>
            <p className="text-xs text-text-light font-light mb-3">✨ Civil Engineer · Kandy</p>
            <p className="font-serif text-base italic text-text-mid leading-relaxed">
              "With a steady hand and an even steadier heart — he builds a life worth living, one smile at a time."
            </p>
            <p className="text-xs text-text-light font-light mt-2 leading-relaxed">
              සිනහවෙන් ජීවිතය අලංකාර කරන ආත්මයක්...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
