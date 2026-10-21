import React, { useState } from 'react';
import { RETRO_ARCHIVE, PNL_RECEIPTS } from '../data/projects';

export const ArchiveMasonry: React.FC = () => {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    date: string;
    source: string;
    imageSrc: string;
    description: string;
  } | null>(null);

  return (
    <section id="archive" className="py-20 border-b border-[#5589C2]/20 bg-[#04070C]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Brand Motif: Black Barcode Label Divider (Patch Section 4: FUND on one side, RAISER on other, face in middle) */}
        <div className="flex items-center justify-center my-6 select-none">
          <div className="px-6 py-2 rounded-lg bg-black border border-[#5589C2]/40 flex items-center gap-4 shadow-lg">
            <span className="font-display font-black text-sm tracking-widest text-white">FUND</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-[-0.1em] text-[#5589C2]">||||||||||||||||</span>
              <img src="/assets/logo-face.jpg" alt="Logo" className="w-6 h-6 rounded-full border border-white" />
              <span className="font-mono text-xs tracking-[-0.1em] text-[#5589C2]">||||||||||||||||</span>
            </div>
            <span className="font-display font-black text-sm tracking-widest text-white">RAISER</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white headline-shadow mb-2">
            The Historical Archive &amp; PNLs
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#C5DAF0]">
            Early snipes, genesis receipts, and verified multiples from the trenches.
          </p>
        </div>

        {/* Compact PNL Receipts Strip (Numbers in brand_green LAROF instead of gold) */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PNL_RECEIPTS.slice(0, 3).map((pnl) => (
              <div
                key={pnl.id}
                onClick={() =>
                  setActiveItem({
                    title: `${pnl.ticker} — ${pnl.result}`,
                    date: pnl.date,
                    source: pnl.isCommunityTrade ? 'Community Trade' : 'Client Run',
                    imageSrc: pnl.imageSrc,
                    description: `Called at ${pnl.calledAt}, peaked at ${pnl.reached} in ${pnl.timeframe}.`,
                  })
                }
                className="glass-card cut-corner-small p-4 rounded-xl border border-[#5589C2]/30 cursor-pointer group hover:border-[#C1E9C2] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-black text-lg text-white">{pnl.ticker}</span>
                  <span className="font-display font-black text-xl text-[#C1E9C2]">
                    {pnl.multiplier}
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-black mb-2.5">
                  <img
                    src={pnl.imageSrc}
                    alt={pnl.ticker}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#C5DAF0]">
                  <span>{pnl.calledAt}</span>
                  <span className="text-[#5589C2] font-bold">ATH {pnl.reached}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[11px] text-center text-[#5589C2] mt-3">
            Past results are not a promise. NFA, DYOR. Community trades labeled accordingly.
          </p>
        </div>

        {/* Vintage Artifacts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {RETRO_ARCHIVE.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="glass-card cut-corner-small p-3 rounded-xl cursor-pointer group hover:border-[#5589C2] transition-all opacity-80 hover:opacity-100"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black mb-2">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="font-mono text-[10px] text-[#5589C2] uppercase font-bold">{item.date}</div>
              <div className="font-display font-bold text-xs text-white truncate">{item.title}</div>
              <div className="font-body text-[11px] text-[#C1E9C2]">{item.result}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[560px] w-full p-5 rounded-2xl bg-[#0B121D] border-2 border-[#5589C2] shadow-2xl relative"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-[#C5DAF0] hover:text-white font-body font-bold text-sm p-2"
            >
              ✕ Close
            </button>
            <div className="font-mono text-xs text-[#5589C2] uppercase font-bold mb-1">
              {activeItem.date} · {activeItem.source}
            </div>
            <h4 className="font-display font-black text-xl text-white mb-3">
              {activeItem.title}
            </h4>
            <div className="rounded-xl overflow-hidden bg-black mb-4 border border-white/10">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="w-full h-auto object-contain max-h-[60vh]"
              />
            </div>
            <p className="font-body text-xs text-[#C5DAF0]">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
