import React from 'react';
import { LightboxItem } from './ImageLightbox';

interface PartnerRentsDueProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const PartnerRentsDue: React.FC<PartnerRentsDueProps> = ({ onOpenLightbox }) => {
  const handlePosterClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: '/assets/rents-due-poster.jpg',
        title: 'The Fundraiser 🤝 Rents Due ($RENT) Partnership',
        subtitle: 'More Memes · Bigger Community · Higher Dreams · Rent Is Temporary. The Moon Is Forever.',
        badge: 'PARTNERSHIP CONFIRMED',
      });
    }
  };

  return (
    <div className="mt-8 sm:mt-10">
      {/* Main Rents Due Feature Card */}
      <div className="relative metallic-card p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/12 overflow-hidden shadow-[0_20px_64px_rgba(0,0,0,0.85)]">
        {/* Amber & Emerald Street Trench Glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[620px] h-[260px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(242,193,78,0.18) 0%, rgba(34,197,94,0.10) 45%, rgba(5,6,8,0) 80%)',
            filter: 'blur(55px)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Metrics */}
          <div className="lg:col-span-7">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E1513] border border-[#22C55E]/40 text-[#4ADE80] font-mono text-xs uppercase tracking-wider shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                <span>★ PARTNERSHIP CONFIRMED</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-[#FFE49A] uppercase tracking-wider">
                👑 $RENT
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F8FAFC] mb-3 tracking-tight">
              The Fundraiser 🤝 Rents Due
            </h3>

            <p className="font-mono text-xs sm:text-sm text-[#FFE49A] tracking-wider uppercase mb-4">
              MORE MEMES. BIGGER COMMUNITY. HIGHER DREAMS.
            </p>

            <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
              The Fundraiser joins forces with <strong className="text-[#F8FAFC]">Rents Due ($RENT)</strong> — the culture-first meme powerhouse born in the trading trenches. Built on the unbreakable belief that <em>rent is temporary, but the moon is forever</em>, this alliance unites viral meme engines, community raid velocity, and long-term momentum.
            </p>

            {/* 3 Metric Wells */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="metallic-well p-3 rounded-xl text-center border-amber-500/20">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F2C14E]">$RENT</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">Official Ticker</div>
              </div>
              <div className="metallic-well p-3 rounded-xl text-center">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F8FAFC]">THE MOON</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">Is Forever</div>
              </div>
              <div className="metallic-well p-3 rounded-xl text-center border-emerald-500/20">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-[#22C55E]">ALLIANCE</div>
                <div className="font-mono text-[10px] text-[#94A3B8] uppercase mt-1">Confirmed</div>
              </div>
            </div>

            {/* Street Lore Quote */}
            <div className="p-3.5 rounded-xl bg-[#090D14]/80 border border-white/10 mb-6 flex items-start gap-3">
              <span className="text-xl leading-none">👑</span>
              <p className="font-body italic text-xs sm:text-sm text-[#BDE7FF]">
                "Broke but still dreaming... Rizza + charts = hope. We keep pushing the community forward."
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-pill-primary px-5 py-2.5 text-xs sm:text-sm font-semibold"
              >
                <span>Connect for Partnership</span>
                <span className="ml-1 text-[#6FD8FF]">↗</span>
              </a>

              <a
                href="https://x.com/IZYCHE_"
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-pill px-5 py-2.5 text-xs sm:text-sm font-medium"
              >
                <span>Alpha &amp; Raids (@IZYCHE_)</span>
                <span className="ml-1 text-[#FFE49A]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Floating Poster with Tap to Zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={handlePosterClick}
              className="relative group max-w-[340px] w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#07090F] shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative">
                <img
                  src="/assets/rents-due-poster.jpg"
                  alt="Official The Fundraiser x Rents Due Partnership Poster"
                  className="w-full h-auto object-cover block"
                />

                {/* Subtle Hover Overlay with Tap Hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[#F8FAFC] font-mono text-[11px] backdrop-blur-md">
                    🔍 Tap to zoom poster
                  </span>
                </div>
              </div>

              {/* Decorative Street Elements */}
              <div className="absolute -top-3 -right-3 text-[#FFE49A] animate-pulse">👑</div>
              <div className="absolute -bottom-2 -left-2 text-[#4ADE80] animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Movement Strip */}
      <div className="mt-3 metallic-card px-4 py-3 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#FFE49A]">✦</span>
          <span className="font-mono text-xs text-[#94A3B8]">
            <strong className="text-[#F8FAFC]">Meme Engine × Degen Raids:</strong> Uniting crypto Twitter, organic engagement &amp; community-led expansion.
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#BDE7FF] bg-[#BDE7FF]/10 border border-[#BDE7FF]/20 px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap">
          VIRAL PROPULSION
        </span>
      </div>
    </div>
  );
};
