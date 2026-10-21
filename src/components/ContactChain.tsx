import React, { useState } from 'react';

export const ContactChain: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [needs, setNeeds] = useState('Raids & Community');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName || !contactHandle) return;
    setFormSubmitted(true);
    const message = encodeURIComponent(
      `Hello Fundraiser! I'm reaching out regarding ${projectName}. We need: ${needs}. My handle is ${contactHandle}.`
    );
    window.open(`https://t.me/Senor_Izyche?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-[#000000]">
      {/* Background Soft Blue Aura */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(85,137,194,0.18) 0%, rgba(193,233,194,0.08) 50%, rgba(0,0,0,0) 80%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[840px] mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/40 text-[#5589C2] font-mono text-xs uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C1E9C2]" />
          <span>STAGE 07 · THE DIAMOND CHAIN</span>
        </div>

        {/* Heading in LAROF with Block Shadow */}
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white headline-shadow tracking-tight mb-4">
          Your project is <span className="text-[#C1E9C2]">next.</span>
        </h2>

        <p className="font-body text-[#C5DAF0] text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto mb-10">
          Tell us what you are launching. We will tell you how we would make it shine across the timeline.
        </p>

        {/* Diamond Chain (Patch Section 8: links in brand_blue metal, main button in brand_green with black text) */}
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Metal Chain Links in brand_blue */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <React.Fragment key={i}>
                <div className="w-3.5 h-3.5 rotate-45 bg-[#0B121D] border-2 border-[#5589C2] shadow-[0_0_8px_rgba(85,137,194,0.5)] transform transition-transform hover:scale-125" />
                {i < 6 && (
                  <div className="w-3 sm:w-5 h-[2px] bg-[#5589C2]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Master Telegram Chain CTA in Brand Green */}
          <a
            href="https://t.me/Senor_Izyche"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full font-body font-bold text-base sm:text-lg bg-[#C1E9C2] text-black shadow-[4px_4px_0px_#5589C2] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform active:scale-98"
          >
            <span className="w-2.5 h-2.5 rotate-45 bg-black mr-3" />
            <span>Message on Telegram (@Senor_Izyche)</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <div className="mt-4 flex items-center gap-4 text-xs font-body text-[#C5DAF0]">
            <a
              href="https://x.com/IZYCHE_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C1E9C2] transition-colors font-bold"
            >
              Follow on X (@IZYCHE_) ↗
            </a>
            <span>·</span>
            <span className="text-[#5589C2]">Direct Response within 2h</span>
          </div>
        </div>

        {/* Lightweight Quick Outreach Form */}
        <div className="glass-card cut-corner p-6 sm:p-8 rounded-2xl text-left border-2 border-[#5589C2]/30 max-w-[620px] mx-auto shadow-2xl">
          <h3 className="font-display font-black text-xl text-white mb-2">
            Prefer a direct brief?
          </h3>
          <p className="font-body text-xs text-[#C5DAF0] mb-5">
            Fill in your project details and we will connect immediately.
          </p>

          {formSubmitted ? (
            <div className="p-4 rounded-xl bg-[#0B121D] border border-[#C1E9C2] text-[#C1E9C2] font-body font-bold text-xs">
              ✓ Got it! Telegram opened with your brief. Light work.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body font-bold text-xs text-[#C5DAF0] mb-1.5 uppercase">
                  Project or Token Name *
                </label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Ether Archive, DeFi Protocol, Utility"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#5589C2]/40 text-white text-sm focus:outline-none focus:border-[#C1E9C2] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body font-bold text-xs text-[#C5DAF0] mb-1.5 uppercase">
                    Your Telegram or X Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder="@handle or t.me/link"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#5589C2]/40 text-white text-sm focus:outline-none focus:border-[#C1E9C2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body font-bold text-xs text-[#C5DAF0] mb-1.5 uppercase">
                    Service Needed
                  </label>
                  <select
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#5589C2]/40 text-white text-sm focus:outline-none focus:border-[#C1E9C2] transition-colors"
                  >
                    <option value="Raids & Community">Raids &amp; Community</option>
                    <option value="Ambassador Role">Ambassador Role</option>
                    <option value="X Space Hosting">X Space Hosting</option>
                    <option value="Utility Launch">Utility Launch</option>
                    <option value="Full Agency Firepower">Full Agency Firepower</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-body font-bold text-sm bg-[#5589C2] text-black shadow-[3px_3px_0px_#C1E9C2] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform active:scale-98"
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
