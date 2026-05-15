import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';
import { FaEnvelope, FaCheckCircle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function RSVP() {
  const [ref, vis] = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState('');

  function handleSubmit() {
    const name = document.getElementById('rsvp-name')?.value?.trim();
    if (!name) { alert('Please enter your name.'); return; }
    setSubmitted(true);
  }

  return (
    <section id="rsvp" style={{ background: 'radial-gradient(ellipse at 50% 20%, #fdf6e8 0%, #f5ece0 100%)' }}>
      <div className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <SectionHeader ornamentIcon={<FaEnvelope className="text-gold/40" />} title="Kindly" titleEm="RSVP" subtitle="We'd love to celebrate with you" />

        <div
          ref={ref}
          className={`max-w-[560px] mx-auto mt-10 glass-card rounded-3xl p-8 md:p-12 shadow-md transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {!submitted ? (
            <div>
              <div className="mb-5 text-left">
                <label className="block text-[0.7rem] tracking-[0.2em] text-text-light uppercase mb-1 font-medium">Your Full Name</label>
                <input type="text" id="rsvp-name" placeholder="e.g. Amara Jayawardena"
                  className="w-full px-4 py-3 bg-white/80 border border-gold/25 rounded-xl text-sm font-light text-text-dark outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all" />
              </div>
              <div className="mb-5 text-left">
                <label className="block text-[0.7rem] tracking-[0.2em] text-text-light uppercase mb-1 font-medium">Phone Number</label>
                <input type="tel" placeholder="+94 77 000 0000"
                  className="w-full px-4 py-3 bg-white/80 border border-gold/25 rounded-xl text-sm font-light text-text-dark outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all" />
              </div>
              <div className="mb-5 text-left">
                <label className="block text-[0.7rem] tracking-[0.2em] text-text-light uppercase mb-1 font-medium">Number of Guests</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-gold/25 rounded-xl text-sm font-light text-text-dark outline-none focus:border-gold transition-all appearance-none">
                  <option value="">Select guests</option>
                  <option>1 person (Just me)</option>
                  <option>2 persons</option>
                  <option>3 persons</option>
                  <option>4 persons</option>
                  <option>5+ persons</option>
                </select>
              </div>
              <div className="mb-5 text-left">
                <label className="block text-[0.7rem] tracking-[0.2em] text-text-light uppercase mb-1 font-medium">Attendance</label>
                <div className="flex gap-3 flex-wrap mt-4">
                  {[
                    { val: 'accept', icon: <FaCheckCircle />, label: 'Accept' },
                    { val: 'maybe', icon: <FaQuestionCircle />, label: 'Maybe' },
                    { val: 'decline', icon: <FaTimesCircle />, label: 'Decline' },
                  ].map(({ val, icon, label }) => (
                    <button key={val} onClick={() => setAttendance(val)}
                      className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl border font-serif text-sm tracking-wide cursor-pointer transition-all duration-300 flex items-center justify-center gap-2
                        ${attendance === val ? 'gold-gradient text-white border-transparent shadow-lg' : 'bg-transparent text-text-mid border-gold/30 hover:border-gold'}`}>
                      {icon} {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-5 text-left">
                <label className="block text-[0.7rem] tracking-[0.2em] text-text-light uppercase mb-1 font-medium">A Message for the Couple</label>
                <textarea placeholder="Share your wishes, blessings, or a heartfelt note..."
                  className="w-full h-24 px-4 py-3 bg-white/80 border border-gold/25 rounded-xl text-sm font-light text-text-dark outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all resize-y" />
              </div>
              <button onClick={handleSubmit}
                className="w-full mt-4 py-4 gold-gradient text-white rounded-full font-serif text-base tracking-[0.2em] uppercase border-none cursor-pointer shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                Send RSVP →
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <HiMail className="text-5xl text-gold mx-auto mb-4" />
              <div className="font-display text-2xl text-text-dark mb-2">Thank you!</div>
              <div className="font-sans text-sm font-light text-text-light">
                We've received your response.<br />
                <em className="text-rose-gold">ඔබගේ ප්‍රතිචාරයට ස්තූතියි.</em>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
