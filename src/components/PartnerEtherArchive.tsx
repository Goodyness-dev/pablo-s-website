import React from 'react';
import { LightboxItem } from './ImageLightbox';

interface PartnerEtherArchiveProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const PartnerEtherArchive: React.FC<PartnerEtherArchiveProps> = ({ onOpenLightbox }) => {
  const handlePosterClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: '/assets/ether-archive-poster.jpg',
        title: 'The Fundraiser 🤝 Ether Archive Official Alliance',
        subtitle: '10 Exclusive Community Whitelist Spots · 4,088 1/1 Historical Ethereum NFTs',
        badge: 'OFFICIAL ALLIANCE',
      });
    }
  };

  return (
    <div>
      {/* Main Ether Archive Feature Card */}
      <div className="relative metallic-card p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/12 overflow-hidden shadow-[0_20px_64px_rgba(0,0,0,0.85)]">
        {/* Planet Horizon Glow Effect */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(111,216,255,0.20) 0%, rgba(155,124,255,0.10) 50%, rgba(5,6,8,0) 80%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D111D] border border-[#FFE49A]/30 text-[#FFE49A] font-mono text-xs uppercase tracking-wider mb-4 shadow-sm">
              <span>★ OFFICIAL ALLIANCE</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F8FAFC] mb-3 tracking-tight">
              The Fundraiser 🤝 Ether Archive
            </h3>

            <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
              We partnered with <strong className="text-[#F8FAFC]">Ether Archive</strong> — an exclusive historical Ethereum collection of 4,088 unique 1/1 digital artifacts. As part of this alliance, we secured 10 whitelist spots exclusively for our core community members.
            </p>

            {/* 3 Metric Wells */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="metallic-well p-3 rounded-xl text-center">
                <div className="font-display font-extrabold text-xl sm:text-2xl gold-text">10</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">WL Spots</div>
              </div>
              <div className="metallic-well p-3 rounded-xl text-center">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F8FAFC]">4,088</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">1/1 NFTs</div>
              </div>
              <div className="metallic-well p-3 rounded-xl text-center">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#6FD8FF]">31 OCT</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">Mint Date</div>
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
                className="metallic-pill-primary px-5 py-2.5 text-xs sm:text-sm font-semibold"
              >
                <span>Explore Ether Archive</span>
                <span className="ml-1 text-[#6FD8FF]">↗</span>
              </a>

              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-pill px-5 py-2.5 text-xs sm:text-sm font-medium"
              >
                <span>Join Community Whitelist</span>
              </a>
            </div>
          </div>

          {/* Right Floating Poster with Tap to Zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={handlePosterClick}
              className="relative group max-w-[340px] w-full cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#07090F] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="/assets/ether-archive-poster.jpg"
                  alt="Official Ether Archive x The Fundraiser Partnership Poster"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#05060A]/85 backdrop-blur-md border border-white/20 text-[9px] font-mono text-[#F8FAFC]">
                  🔍 Tap to zoom
                </div>
              </div>
              {/* Chrome Star Flares */}
              <div className="absolute -top-3 -right-3 text-[#BDE7FF] animate-pulse">✦</div>
              <div className="absolute -bottom-2 -left-2 text-[#FFE49A] animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Funpump Launchpad Ambassadorship Tile */}
      <div className="mt-4 metallic-card p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#14192B] border border-[#6FD8FF]/30 flex items-center justify-center font-display font-extrabold text-sm text-[#6FD8FF]">
            FP
          </div>
          <div>
            <div className="font-display font-semibold text-sm text-[#F8FAFC]">
              Funpump Launchpad Ambassadorship
            </div>
            <div className="font-mono text-xs text-[#94A3B8]">
              Appointed Ambassador (15 June 2026) · Launchpad advisory &amp; promotion
            </div>
          </div>
        </div>
        <span className="font-mono text-[11px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-3 py-1 rounded-full font-bold">
          ✓ ACTIVE ROLE
        </span>
      </div>
    </div>
  );
};
