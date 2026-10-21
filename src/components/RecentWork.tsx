import React from 'react';

export const RecentWork: React.FC = () => {
  return (
    <section id="recent-work" className="py-20 md:py-32 relative bg-[#000000]">
      {/* Background Giant Watermark Letters */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[12vw] font-black text-transparent [-webkit-text-stroke:1px_rgba(85,137,194,0.08)] pointer-events-none select-none whitespace-nowrap">
        FUNDRAISER
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#5589C2]/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/40 text-[#5589C2] font-mono text-xs uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C1E9C2]" />
              <span>PRODUCTION SHIPPED · ALL LIVE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white headline-shadow">
              Recent work.
            </h2>
          </div>
          <p className="font-body text-[#C5DAF0] text-sm sm:text-base max-w-[420px] mt-4 md:mt-0">
            What we shipped lately. Every single project is live, verified with receipts, and active across the Web3 ecosystem.
          </p>
        </div>

        {/* 1. BIG FEATURED CARD: ETHER ARCHIVE */}
        <div className="mb-10 glass-card cut-corner p-6 md:p-10 rounded-2xl border-2 border-[#5589C2]/30 relative overflow-hidden group">
          {/* Top Browser Chrome Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-3 px-3 py-1 rounded bg-[#070B12] border border-[#5589C2]/30 flex items-center gap-2 text-xs font-mono text-[#C5DAF0]">
                <img src="/assets/logo-face.jpg" alt="favicon" className="w-3.5 h-3.5 rounded-full" />
                <span>etherarchive.xyz</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#5589C2]/20 border border-[#5589C2] text-[#C1E9C2] font-mono text-xs font-bold uppercase">
              ★ UPCOMING MINT · 31 OCT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#121C2E] text-[#5589C2] font-body font-bold text-xs uppercase">
                  NFT ALLIANCE
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#121C2E] text-[#C1E9C2] font-body font-bold text-xs uppercase">
                  WHITELIST ALLOCATION
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
                Ether Archive Partnership
              </h3>
              <p className="font-body text-[#C5DAF0] text-base leading-relaxed mb-4">
                Official partnership with <strong className="text-white">Ether Archive</strong>. We brought dedicated traction and secured 10 whitelist spots for The Fundraiser community for their historical 4,088 1-of-1 Ethereum collection.
              </p>

              {/* Stat Badges with Brand Green Numbers */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#04070C] border border-[#5589C2]/30 text-center">
                  <div className="font-display font-extrabold text-2xl text-[#C1E9C2]">10</div>
                  <div className="font-body font-bold text-[10px] text-[#C5DAF0] uppercase mt-0.5">WL Spots</div>
                </div>
                <div className="p-3 rounded-xl bg-[#04070C] border border-[#5589C2]/30 text-center">
                  <div className="font-display font-extrabold text-2xl text-white">4,088</div>
                  <div className="font-body font-bold text-[10px] text-[#C5DAF0] uppercase mt-0.5">1/1 NFTs</div>
                </div>
                <div className="p-3 rounded-xl bg-[#04070C] border border-[#5589C2]/30 text-center">
                  <div className="font-display font-extrabold text-2xl text-[#5589C2]">31 OCT</div>
                  <div className="font-body font-bold text-[10px] text-[#C5DAF0] uppercase mt-0.5">Mint Date</div>
                </div>
              </div>

              {/* Wire Globe External Link */}
              <a
                href="https://etherarchive.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#5589C2] text-black font-body font-bold text-sm shadow-[4px_4px_0px_#C1E9C2] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {/* SVG Wire Globe */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Open Project (etherarchive.xyz)</span>
              </a>
            </div>

            {/* Right Poster Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-xl overflow-hidden border border-[#5589C2]/40 shadow-2xl max-w-[320px] w-full">
                <img
                  src="/assets/ether-archive-poster.jpg"
                  alt="Ether Archive Official Partnership Poster"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. GRID OF THREE RECENT PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Clover Boys */}
          <div className="glass-card cut-corner p-6 rounded-2xl border border-[#5589C2]/30 flex flex-col justify-between group">
            <div>
              {/* Browser bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="px-2 py-0.5 rounded bg-[#1B3556] text-[#C1E9C2] font-mono text-[10px] font-bold">
                  ✓ DONE · AMBASSADOR
                </span>
              </div>

              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black mb-4 border border-[#5589C2]/20">
                <img
                  src="/assets/clover-analytics.jpg"
                  alt="Clover Boys Analytics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#5589C2] font-body font-bold text-[10px] uppercase">
                  X SPACES
                </span>
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#C1E9C2] font-body font-bold text-[10px] uppercase">
                  RAID LEAD
                </span>
              </div>

              <h4 className="font-display font-black text-xl text-white mb-1.5">
                Clover Boys ($CLOVR)
              </h4>
              <p className="font-body text-xs text-[#C5DAF0] leading-relaxed mb-4">
                Took official X account from &lt;1K to 30.2K impressions in 7 days. Hosted live X Space with 72 tuned in.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#C1E9C2]">30.2K</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Impressions</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#5589C2]">72 Live</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Space Listeners</div>
                </div>
              </div>
            </div>

            {/* Link */}
            <a
              href="https://cloverboys.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold text-xs text-[#5589C2] hover:text-[#C1E9C2] transition-colors pt-3 border-t border-white/5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>cloverboys.vercel.app ↗</span>
            </a>
          </div>

          {/* Wojak Meter */}
          <div className="glass-card cut-corner p-6 rounded-2xl border border-[#5589C2]/30 flex flex-col justify-between group">
            <div>
              {/* Browser bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="px-2 py-0.5 rounded bg-[#1B3556] text-[#C1E9C2] font-mono text-[10px] font-bold">
                  ● LIVE UTILITY
                </span>
              </div>

              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black mb-4 border border-[#5589C2]/20">
                <img
                  src="/assets/wojak-after.jpg"
                  alt="Wojak Meter Utility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#5589C2] font-body font-bold text-[10px] uppercase">
                  UTILITY GROWTH
                </span>
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#C1E9C2] font-body font-bold text-[10px] uppercase">
                  SENTIMENT ALPHA
                </span>
              </div>

              <h4 className="font-display font-black text-xl text-white mb-1.5">
                Wojak Meter Utility
              </h4>
              <p className="font-body text-xs text-[#C5DAF0] leading-relaxed mb-4">
                Scaled utility site to hundreds of active daily users. Created organic sentiment alpha threads with 3.6K+ views.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#C1E9C2]">3.6K</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Thread Views</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#5589C2]">100s</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Daily Users</div>
                </div>
              </div>
            </div>

            {/* Link */}
            <a
              href="http://wojakmeter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold text-xs text-[#5589C2] hover:text-[#C1E9C2] transition-colors pt-3 border-t border-white/5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>wojakmeter.com ↗</span>
            </a>
          </div>

          {/* Funpump */}
          <div className="glass-card cut-corner p-6 rounded-2xl border border-[#5589C2]/30 flex flex-col justify-between group">
            <div>
              {/* Browser bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="px-2 py-0.5 rounded bg-[#1B3556] text-[#C1E9C2] font-mono text-[10px] font-bold">
                  ● ACTIVE AMBASSADOR
                </span>
              </div>

              {/* Graphic Display */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#070B12] mb-4 border border-[#5589C2]/20 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#121C2E] border-2 border-[#5589C2] flex items-center justify-center font-display font-black text-2xl text-[#C1E9C2] shadow-lg mb-2">
                    FP
                  </div>
                  <div className="font-display font-bold text-sm text-white">Funpump Launchpad</div>
                  <div className="font-mono text-[10px] text-[#5589C2]">Launchpad Infrastructure</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#5589C2] font-body font-bold text-[10px] uppercase">
                  LAUNCHPAD ADVISORY
                </span>
                <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#C1E9C2] font-body font-bold text-[10px] uppercase">
                  COMMUNITY BRIDGE
                </span>
              </div>

              <h4 className="font-display font-black text-xl text-white mb-1.5">
                Funpump Launchpad
              </h4>
              <p className="font-body text-xs text-[#C5DAF0] leading-relaxed mb-4">
                Official ambassadorship representing launchpad mechanics, community onboarding, and token launch advisory.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#C1E9C2]">JUN 2026</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Appointed</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#04070C] border border-[#5589C2]/20 text-center">
                  <div className="font-display font-extrabold text-lg text-[#5589C2]">Core</div>
                  <div className="font-body text-[9px] text-[#C5DAF0] uppercase">Ambassador</div>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="pt-3 border-t border-white/5 font-body font-bold text-xs text-[#5589C2]">
              <span>Official Ambassador Role · Web3 Infrastructure</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
