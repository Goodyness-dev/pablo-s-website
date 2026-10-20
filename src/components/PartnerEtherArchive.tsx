import React from 'react';

export const PartnerEtherArchive: React.FC = () => {
  return (
    <div className="my-12">
      {/* Main Ether Archive Feature Card */}
      <div className="relative glass-card cut-corner p-6 md:p-10 rounded-2xl border border-[#BDE7FF]/25 overflow-hidden shadow-[0_16px_64px_rgba(5,6,10,0.8)]">
        {/* Planet Horizon Glow Effect */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(111,216,255,0.25) 0%, rgba(155,124,255,0.12) 50%, rgba(5,6,10,0) 80%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1226] border border-[#FFE49A]/30 text-[#FFE49A] font-mono text-xs uppercase tracking-wider mb-4">
              <span>★ OFFICIAL ALLIANCE</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4FBFF] mb-3">
              The Fundraiser 🤝 Ether Archive
            </h3>

            <p className="font-body text-[#A8B4C8] text-base leading-relaxed mb-6">
              We partnered with <strong className="text-[#F4FBFF]">Ether Archive</strong> — an exclusive historical Ethereum collection of 4,088 unique 1/1 digital artifacts. As part of this alliance, we secured 10 whitelist spots exclusively for our core community members.
            </p>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#07080C]/80 border border-[#BDE7FF]/15 text-center">
                <div className="font-display font-extrabold text-2xl gold-text">10</div>
                <div className="font-mono text-[10px] text-[#A8B4C8] uppercase mt-1">WL Spots</div>
              </div>
              <div className="p-3 rounded-xl bg-[#07080C]/80 border border-[#BDE7FF]/15 text-center">
                <div className="font-display font-extrabold text-2xl text-[#F4FBFF]">4,088</div>
                <div className="font-mono text-[10px] text-[#A8B4C8] uppercase mt-1">1/1 NFTs</div>
              </div>
              <div className="p-3 rounded-xl bg-[#07080C]/80 border border-[#BDE7FF]/15 text-center">
                <div className="font-display font-extrabold text-2xl text-[#6FD8FF]">31 OCT</div>
                <div className="font-mono text-[10px] text-[#A8B4C8] uppercase mt-1">Mint Date</div>
              </div>
            </div>

            {/* Quote */}
            <p className="font-body italic text-sm text-[#BDE7FF] mb-6">
              "This is just the beginning. We're creating more opportunities, connecting communities, and growing together in Web3."
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://etherarchive.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-medium text-xs sm:text-sm bg-[#FFE49A] text-[#05060A] hover:bg-[#F2C14E] transition-all transform active:scale-95"
              >
                <span>Explore Ether Archive</span>
                <span>↗</span>
              </a>

              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-medium text-xs sm:text-sm bg-[#0E1226] border border-[#BDE7FF]/30 text-[#F4FBFF] hover:border-[#6FD8FF] transition-all"
              >
                <span>Join Community Whitelist</span>
              </a>
            </div>
          </div>

          {/* Right Floating Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[340px] w-full">
              <div className="rounded-xl overflow-hidden border border-[#BDE7FF]/30 bg-[#07080C] shadow-[0_20px_50px_rgba(5,6,10,0.9)] transform transition-transform duration-500 group-hover:scale-102 group-hover:-rotate-1">
                <img
                  src="/assets/ether-archive-poster.jpg"
                  alt="Official Ether Archive x The Fundraiser Partnership Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Chrome Star Flares */}
              <div className="absolute -top-3 -right-3 text-[#BDE7FF] animate-pulse">✦</div>
              <div className="absolute -bottom-2 -left-2 text-[#FFE49A] animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Funpump Launchpad Ambassadorship Tile */}
      <div className="mt-4 p-4 rounded-xl bg-[#0E1226]/60 border border-[#BDE7FF]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#161B36] border border-[#6FD8FF]/30 flex items-center justify-center font-display font-extrabold text-sm text-[#6FD8FF]">
            FP
          </div>
          <div>
            <div className="font-display font-semibold text-sm text-[#F4FBFF]">
              Funpump Launchpad Ambassadorship
            </div>
            <div className="font-mono text-xs text-[#A8B4C8]">
              Appointed Ambassador (15 June 2026) · Launchpad advisory &amp; promotion
            </div>
          </div>
        </div>
        <span className="font-mono text-[11px] text-[#346538] bg-[#EDF3EC] px-2.5 py-1 rounded-full font-bold">
          ✓ ACTIVE ROLE
        </span>
      </div>
    </div>
  );
};
