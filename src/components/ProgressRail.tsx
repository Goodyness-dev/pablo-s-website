import React from 'react';
import { DiamondStage } from '../types';

interface ProgressRailProps {
  currentStage: DiamondStage;
  onSelectStage: (stage: DiamondStage) => void;
  navbarHidden?: boolean;
}

const STAGES_META: { stage: DiamondStage; label: string; name: string }[] = [
  { stage: 0, label: '01', name: 'Rough: The Trenches' },
  { stage: 1, label: '02', name: 'Cleave: Pleased Devs' },
  { stage: 2, label: '03', name: 'Facet: The Fundraiser' },
  { stage: 3, label: '04', name: 'Brilliant: Fundraisers Web' },
  { stage: 4, label: '05', name: 'Chain: Contact' },
];

export const ProgressRail: React.FC<ProgressRailProps> = ({
  currentStage,
  onSelectStage,
  navbarHidden = false,
}) => {
  return (
    <>
      {/* Desktop Vertical Rail (OpenCircle Style Metallic Spine) */}
      <aside
        aria-label="Story stage progress"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2.5 rounded-full bg-[#080B14]/75 backdrop-blur-xl border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      >
        <div className="absolute top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#6FD8FF]/20 via-[#BDE7FF]/40 to-[#6FD8FF]/20" />

        {STAGES_META.map((item) => {
          const isCurrent = currentStage === item.stage;
          const isPassed = currentStage > item.stage;

          return (
            <button
              key={item.stage}
              type="button"
              onClick={() => onSelectStage(item.stage)}
              className="group relative z-10 p-1.5 focus:outline-none"
              title={`${item.label} ${item.name}`}
            >
              {/* Diamond Marker */}
              <div
                className={`w-3 h-3 rotate-45 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#6FD8FF] scale-125 shadow-[0_0_12px_#6FD8FF] border border-[#F8FAFC]'
                    : isPassed
                    ? 'bg-[#BDE7FF]/60 border border-[#BDE7FF]/40'
                    : 'bg-[#0E1226] border border-white/20 group-hover:border-[#6FD8FF]'
                }`}
              />

              {/* Tooltip on Hover */}
              <div className="absolute right-9 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center px-3 py-1.5 rounded-full bg-[#0A0D16] border border-white/15 text-[11px] font-mono text-[#F8FAFC] whitespace-nowrap shadow-xl">
                <span className="text-[#6FD8FF] mr-1.5 font-bold">{item.label}</span>
                {item.name}
              </div>
            </button>
          );
        })}
      </aside>

      {/* Mobile Horizontal Progress Bar (Subtle beneath navbar or at top when navbar hidden) */}
      <div className={`lg:hidden fixed left-0 right-0 z-30 bg-[#080A0F]/90 backdrop-blur-xl border-b border-white/10 py-1.5 px-4 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        navbarHidden ? 'top-0' : 'top-[56px]'
      }`}>
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#6FD8FF] font-semibold">
          STAGE {STAGES_META[currentStage]?.label} · {STAGES_META[currentStage]?.name.split(':')[0]}
        </span>
        <div className="flex items-center gap-2">
          {STAGES_META.map((item) => {
            const isCurrent = currentStage === item.stage;
            const isPassed = currentStage > item.stage;
            return (
              <button
                key={item.stage}
                type="button"
                onClick={() => onSelectStage(item.stage)}
                aria-label={`Jump to stage ${item.label}`}
                className="p-1 focus:outline-none"
              >
                <div
                  className={`w-2 h-2 rotate-45 transition-all ${
                    isCurrent
                      ? 'bg-[#6FD8FF] scale-125 shadow-[0_0_6px_#6FD8FF]'
                      : isPassed
                      ? 'bg-[#BDE7FF]/60'
                      : 'bg-[#0E1226] border border-white/20'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
