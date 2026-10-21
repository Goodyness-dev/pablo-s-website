import React, { useState } from 'react';
import { PNL_RECEIPTS } from '../data/projects';

export const PnlCarousel: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="my-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
            PROVEN TRACK RECORD
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F4FBFF] mt-1">
            Curated PNL Receipts
          </h3>
        </div>
        <p className="font-mono text-xs text-[#6B778C] mt-2 sm:mt-0">
          Only verified multiples · Real bot timestamps
        </p>
      </div>

      {/* Cards Grid / Mobile Horizontal Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PNL_RECEIPTS.map((receipt, idx) => (
          <div
            key={receipt.id}
            onClick={() => setSelectedIdx(idx)}
            className="glass-card cut-corner p-4 rounded-xl cursor-pointer group hover:border-[#6FD8FF]/50 transition-all"
          >
            {/* Screenshot Frame with Ice Overlay */}
            <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-[#05060A] mb-3">
              <img
                src={receipt.imageSrc}
                alt={`${receipt.ticker} Call Receipt`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#2FA8E6]/10 mix-blend-multiply pointer-events-none" />

              {/* Multiplier Badge in Gold */}
              <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#05060A]/90 border border-[#FFE49A]/50">
                <span className="font-display font-extrabold text-xs gold-text">
                  {receipt.multiplier}
                </span>
              </div>
            </div>

            {/* Meta Table */}
            <div className="space-y-1 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#F4FBFF] font-bold text-sm">{receipt.ticker}</span>
                <span className="text-[#6FD8FF]">{receipt.result}</span>
              </div>
              <div className="flex items-center justify-between text-[#A8B4C8]">
                <span>Called At:</span>
                <span>{receipt.calledAt}</span>
              </div>
              <div className="flex items-center justify-between text-[#A8B4C8]">
                <span>Peak Reached:</span>
                <span className="text-[#FFE49A] font-semibold">{receipt.reached}</span>
              </div>
              <div className="flex items-center justify-between text-[#6B778C] pt-1 border-t border-white/5">
                <span>{receipt.date}</span>
                {receipt.isCommunityTrade ? (
                  <span className="text-[10px] text-[#A8B4C8] bg-white/5 px-2 py-0.5 rounded">
                    Community Trade
                  </span>
                ) : (
                  <span className="text-[10px] text-[#6FD8FF] bg-[#6FD8FF]/10 px-2 py-0.5 rounded">
                    Promoted Run
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legal Disclaimer Line */}
      <p className="font-mono text-xs text-center text-[#6B778C] mt-6">
        Past results are not a promise. NFA, DYOR. Community trades are labeled accordingly.
      </p>

      {/* Lightbox Modal on Card Click */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060A]/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[600px] w-full p-4 rounded-2xl bg-[#0E1226] border border-[#BDE7FF]/30 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 text-[#A8B4C8] hover:text-[#F4FBFF] font-mono text-sm p-2"
            >
              ✕ Close
            </button>
            <h4 className="font-display font-bold text-lg text-[#F4FBFF] mb-3">
              {PNL_RECEIPTS[selectedIdx].ticker} — Verified Bot Receipt
            </h4>
            <div className="rounded-xl overflow-hidden bg-[#05060A] mb-3">
              <img
                src={PNL_RECEIPTS[selectedIdx].imageSrc}
                alt={PNL_RECEIPTS[selectedIdx].ticker}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="font-mono text-xs text-[#A8B4C8] space-y-1">
              <div>Peak Reached: {PNL_RECEIPTS[selectedIdx].reached}</div>
              <div>Timeframe: {PNL_RECEIPTS[selectedIdx].timeframe}</div>
              <div>Type: {PNL_RECEIPTS[selectedIdx].isCommunityTrade ? 'Community Trench Trade' : 'Client Promotion Run'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
