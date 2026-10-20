import React, { useState } from 'react';
import { RETRO_ARCHIVE } from '../data/projects';

export const ArchiveMasonry: React.FC = () => {
  const [activeItem, setActiveItem] = useState<typeof RETRO_ARCHIVE[0] | null>(null);

  return (
    <section className="py-20 border-b border-[#BDE7FF]/5 bg-[#07080C]/40">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B778C]">
              BEFORE THE DIAMONDS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#A8B4C8] mt-1">
              The Historical Vault
            </h2>
          </div>
          <p className="font-mono text-xs text-[#6B778C] mt-2 sm:mt-0">
            Genesis artifacts &amp; early degen snipes (March — April 2025)
          </p>
        </div>

        {/* 4-Item Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {RETRO_ARCHIVE.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="glass-card cut-corner p-3 rounded-xl cursor-pointer group hover:border-[#6FD8FF]/40 transition-all opacity-75 hover:opacity-100"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#05060A] mb-2.5">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#05060A]/20 pointer-events-none" />
              </div>

              <div className="space-y-0.5">
                <div className="font-mono text-[10px] text-[#6FD8FF] uppercase">
                  {item.date}
                </div>
                <div className="font-display font-semibold text-xs sm:text-sm text-[#F4FBFF] truncate">
                  {item.title}
                </div>
                <div className="font-mono text-[11px] text-[#A8B4C8]">
                  {item.result}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060A]/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[560px] w-full p-5 rounded-2xl bg-[#0E1226] border border-[#BDE7FF]/30 shadow-2xl relative"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-[#A8B4C8] hover:text-[#F4FBFF] font-mono text-sm p-2"
            >
              ✕ Close
            </button>
            <div className="font-mono text-xs text-[#6FD8FF] uppercase mb-1">
              {activeItem.date} · {activeItem.source}
            </div>
            <h4 className="font-display font-bold text-xl text-[#F4FBFF] mb-3">
              {activeItem.title}
            </h4>
            <div className="rounded-xl overflow-hidden bg-[#05060A] mb-4">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-[#A8B4C8]">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
