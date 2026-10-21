import React from 'react';
import { PNL_RECEIPTS } from '../data/projects';
import { LightboxItem } from './ImageLightbox';
import { ScrollReveal } from './ScrollReveal';

interface PnlCarouselProps {
  onOpenLightbox?: (items: LightboxItem[], initialIndex: number) => void;
}

export const PnlCarousel: React.FC<PnlCarouselProps> = ({ onOpenLightbox }) => {
  const lightboxItems: LightboxItem[] = PNL_RECEIPTS.map((receipt) => ({
    src: receipt.imageSrc,
    alt: `${receipt.ticker} Call Receipt`,
    title: `${receipt.ticker} — ${receipt.multiplier} Peak Gain`,
    subtitle: `Called at ${receipt.calledAt} → Peak ${receipt.reached} (${receipt.date})`,
    badge: receipt.multiplier,
  }));

  const handleCardClick = (idx: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(lightboxItems, idx);
    }
  };

  return (
    <ScrollReveal className="my-10 sm:my-14">
      <div>
        {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
            PROVEN TRACK RECORD
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F8FAFC] mt-1 tracking-tight">
            Curated PNL Receipts
          </h3>
        </div>
        <p className="font-mono text-xs text-[#64748B]">
          Verified bot timestamps · Tap card to inspect &amp; zoom
        </p>
      </div>

      {/* Cards Grid / Mobile Horizontal Snap Scroller */}
      <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
        {PNL_RECEIPTS.map((receipt, idx) => (
          <div
            key={receipt.id}
            onClick={() => handleCardClick(idx)}
            className="metallic-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl cursor-pointer group hover:border-[#6FD8FF]/40 transition-all w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0 md:shrink shadow-lg"
          >
            {/* Screenshot Frame with Ambient Backdrop & Exact 16:9 Aspect Ratio */}
            <div className="relative w-full rounded-xl overflow-hidden aspect-[16/9] bg-[#07090F] mb-3.5 border border-white/10 p-1 flex items-center justify-center">
              
              {/* Ambient Glow Clone */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 filter blur-lg scale-110"
                style={{
                  backgroundImage: `url(${receipt.imageSrc})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />

              <img
                src={receipt.imageSrc}
                alt={`${receipt.ticker} Call Receipt`}
                className="max-w-full max-h-full w-auto h-auto object-contain relative z-10"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2FA8E6]/10 mix-blend-multiply pointer-events-none z-10" />

              {/* Multiplier Badge in Gold (OpenCircle Leaderboard Style) */}
              <div className="absolute top-2.5 right-2.5 z-20 px-3 py-1 rounded-full bg-[#05060A]/90 border border-[#FFE49A]/50 backdrop-blur-md shadow-md">
                <span className="font-display font-extrabold text-xs gold-text">
                  {receipt.multiplier}
                </span>
              </div>

              {/* Tap to Zoom Hint */}
              <div className="absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded-full bg-[#05060A]/80 backdrop-blur-md border border-white/15 text-[9px] font-mono text-[#A8B4C8] opacity-80 group-hover:opacity-100 transition-opacity">
                🔍 Tap to zoom
              </div>
            </div>

            {/* Meta Table */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#F8FAFC] font-bold text-sm">{receipt.ticker}</span>
                <span className="text-[#6FD8FF] font-semibold">{receipt.result}</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Called At:</span>
                <span>{receipt.calledAt}</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Peak Reached:</span>
                <span className="text-[#FFE49A] font-semibold">{receipt.reached}</span>
              </div>
              <div className="flex items-center justify-between text-[#64748B] pt-2 border-t border-white/5">
                <span>{receipt.date}</span>
                {receipt.isCommunityTrade ? (
                  <span className="text-[10px] text-[#A8B4C8] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Community Trade
                  </span>
                ) : (
                  <span className="text-[10px] text-[#6FD8FF] bg-[#6FD8FF]/10 px-2.5 py-0.5 rounded-full border border-[#6FD8FF]/20">
                    Promoted Run
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legal Disclaimer Line */}
      <p className="font-mono text-xs text-center text-[#64748B] mt-6">
        Past results are not a promise. NFA, DYOR. Community trades are labeled accordingly.
      </p>
    </div>
  </ScrollReveal>
);
};
