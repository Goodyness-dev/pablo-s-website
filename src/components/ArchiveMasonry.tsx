import React from 'react';
import { RETRO_ARCHIVE } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

interface ArchiveMasonryProps {
  onOpenLightbox?: (items: LightboxItem[], initialIndex: number) => void;
}

export const ArchiveMasonry: React.FC<ArchiveMasonryProps> = ({ onOpenLightbox }) => {
  const lightboxItems: LightboxItem[] = RETRO_ARCHIVE.map((item) => ({
    src: item.imageSrc,
    alt: item.title,
    title: item.title,
    subtitle: `${item.date} · ${item.source} — ${item.result}`,
    badge: 'HISTORICAL',
  }));

  const handleItemClick = (idx: number) => {
    if (onOpenLightbox) {
      onOpenLightbox(lightboxItems, idx);
    }
  };

  return (
    <section className="py-20 border-b border-white/5 bg-[#06080E]/50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#64748B]">
              BEFORE THE DIAMONDS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#94A3B8] mt-1 tracking-tight">
              The Historical Vault
            </h2>
          </div>
          <p className="font-mono text-xs text-[#64748B]">
            Genesis artifacts &amp; early degen snipes (March — April 2025)
          </p>
        </div>

        {/* 4-Item Grid (2-col mobile, 4-col desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {RETRO_ARCHIVE.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(idx)}
              className="metallic-card p-3 sm:p-3.5 rounded-xl sm:rounded-2xl cursor-pointer group hover:border-[#6FD8FF]/40 transition-all opacity-85 hover:opacity-100 shadow-md"
            >
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-[#07090F] mb-2.5 border border-white/10 p-1.5 flex items-center justify-center">
                {/* Ambient Glow Clone */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 filter blur-md scale-110"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-[#05060A]/85 border border-white/10 text-[9px] font-mono text-[#A8B4C8] opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  🔍 Zoom
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="font-mono text-[10px] text-[#6FD8FF] uppercase">
                  {item.date}
                </div>
                <div className="font-display font-semibold text-xs sm:text-sm text-[#F8FAFC] truncate">
                  {item.title}
                </div>
                <div className="font-mono text-[11px] text-[#94A3B8]">
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
