import React, { useState } from 'react';
import { RealDiamondIcon } from './RealDiamondIcon';

export const ContactChain: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [needs, setNeeds] = useState('Raids & Community');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName || !contactHandle) return;
    setFormSubmitted(true);
    // Open Telegram with pre-filled text
    const message = encodeURIComponent(
      `Hello Fundraiser! I'm reaching out regarding ${projectName}. We need: ${needs}. My handle is ${contactHandle}.`
    );
    window.open(`https://t.me/Senor_Izyche?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background Radial Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(242,193,78,0.12) 0%, rgba(111,216,255,0.08) 50%, rgba(5,6,8,0) 80%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[840px] mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D111D] border border-[#FFE49A]/30 text-[#FFE49A] font-mono text-xs uppercase tracking-wider mb-4 shadow-sm">
          <RealDiamondIcon size={13} glow={true} />
          <span>STAGE 07 · THE DIAMOND CHAIN</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F8FAFC] tracking-tight mb-4">
          Your project is <span className="gold-text">next.</span>
        </h2>

        <p className="font-body text-[#94A3B8] text-sm sm:text-base md:text-lg leading-relaxed max-w-[560px] mx-auto mb-10">
          Tell us what you are launching. We will tell you how we would make it shine across the timeline.
        </p>

        {/* 7-Diamond Linked Chain Button */}
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Diamond Chain Links */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <React.Fragment key={i}>
                <div className="p-1 rounded-full bg-[#0D111D] border border-[#FFE49A]/50 shadow-[0_0_10px_rgba(242,193,78,0.4)] transform transition-transform hover:scale-135">
                  <RealDiamondIcon size={16} glow={true} pulse={i === 3} />
                </div>
                {i < 6 && (
                  <div className="w-3 sm:w-5 h-[1.5px] bg-gradient-to-r from-[#FFE49A] to-[#F2C14E]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Master Telegram Metallic Pill */}
          <a
            href="https://t.me/Senor_Izyche"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-pill-primary px-8 sm:px-10 py-4 text-sm sm:text-base font-body font-bold min-h-[52px] shadow-2xl group flex items-center justify-center"
          >
            <RealDiamondIcon size={16} glow={true} className="mr-3" />
            <span>Message on Telegram (@Senor_Izyche)</span>
            <span className="ml-2 text-[#6FD8FF] group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <div className="mt-4 flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
            <a
              href="https://x.com/IZYCHE_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6FD8FF] transition-colors"
            >
              Follow on X (@IZYCHE_) ↗
            </a>
            <span>·</span>
            <span className="text-[#64748B]">Direct Response within 2h</span>
          </div>
        </div>

        {/* Lightweight Quick Outreach Form */}
        <div className="metallic-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-left border border-white/12 max-w-[620px] mx-auto shadow-2xl">
          <h3 className="font-display font-bold text-lg text-[#F8FAFC] mb-1.5">
            Prefer a direct brief?
          </h3>
          <p className="font-body text-xs text-[#94A3B8] mb-5">
            Fill in your project details and we will connect immediately.
          </p>

          {formSubmitted ? (
            <div className="p-4 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] font-mono text-xs">
              ✓ Got it! Telegram opened with your brief. Light work.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-[#94A3B8] mb-1.5 uppercase">
                  Project or Token Name *
                </label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Clover Boys, DeFi Protocol, GameFi"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080A12] border border-white/12 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#6FD8FF] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#94A3B8] mb-1.5 uppercase">
                    Your Telegram or X Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder="@handle or t.me/link"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080A12] border border-white/12 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#6FD8FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94A3B8] mb-1.5 uppercase">
                    Service Needed
                  </label>
                  <select
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080A12] border border-white/12 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#6FD8FF] transition-colors"
                  >
                    <option value="Raids & Community">Raids &amp; Community</option>
                    <option value="Ambassador Role">Ambassador Role</option>
                    <option value="X Space Hosting">X Space Hosting</option>
                    <option value="Vote Trending">Vote Trending</option>
                    <option value="Full Launch Package">Full Launch Package</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="metallic-pill w-full py-3.5 text-sm font-semibold text-[#6FD8FF] hover:border-[#6FD8FF]"
              >
                Send Brief via Telegram →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
