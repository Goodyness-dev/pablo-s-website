import React from 'react';

export const FundraiserEraHeader: React.FC = () => {
  return (
    <div className="relative pt-16 pb-8 sm:pt-24 sm:pb-12 text-center md:text-left overflow-hidden">
      {/* Crystalline Diamond Caustic Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(111,216,255,0.14) 0%, rgba(47,168,230,0.06) 45%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Prismatic Horizon Rule with Center Cut Diamond */}
      <div className="relative flex items-center justify-center mb-8 sm:mb-10">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#6FD8FF]/30 to-[#6FD8FF]/60" />
        
        {/* Center Diamond Jewel Emblem */}
        <div className="mx-4 sm:mx-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080C18] border border-[#6FD8FF]/40 shadow-[0_0_16px_rgba(111,216,255,0.35)] backdrop-blur-xl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#6FD8FF] animate-pulse">
            <path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 21L8 9L12 3L16 9L12 21Z" stroke="#BDE7FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#BDE7FF] font-bold">
            PHASE II
          </span>
        </div>

        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#6FD8FF]/30 to-[#6FD8FF]/60" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Title & Eyebrow */}
        <div className="max-w-[680px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1322] border border-[#6FD8FF]/30 text-[#6FD8FF] font-mono text-[11px] uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FD8FF] animate-ping" />
            <span>The Fundraiser Era · 2026</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] tracking-tight leading-tight">
            The Fundraiser <span className="diamond-sheen">Era.</span>
          </h2>

          <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mt-3">
            Moving beyond calls into full agency execution. Ambassador contracts, live Spaces, custom utility, and strategic partnerships. When raw momentum turns into diamond-grade visibility.
          </p>
        </div>

        {/* Diamond Grade Execution Pillars */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#BDE7FF]">
          <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
            <span>Full Agency Scope</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#22C55E]" />
            <span>Organic Growth</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#FFE49A]" />
            <span>Proven Track Record</span>
          </div>
        </div>
      </div>
    </div>
  );
};
