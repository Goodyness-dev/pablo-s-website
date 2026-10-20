import React from 'react';
import { DiamondStage } from '../types';

interface ProgressRailProps {
  currentStage: DiamondStage;
  onSelectStage: (stage: DiamondStage) => void;
}

const STAGES_META: { stage: DiamondStage; label: string; name: string }[] = [
  { stage: 0, label: '01', name: 'Rough: The Trenches' },
  { stage: 1, label: '02', name: 'Cleave: Pleased Devs' },
  { stage: 2, label: '03', name: 'Facet: The Fundraiser' },
  { stage: 3, label: '04', name: 'Polish: The Comeback' },
  { stage: 4, label: '05', name: 'Brilliant: Fundraisers Web' },
  { stage: 5, label: '06', name: 'Set: Partners' },
  { stage: 6, label: '07', name: 'Chain: Contact' },
];

export const ProgressRail: React.FC<ProgressRailProps> = ({
  currentStage,
  onSelectStage,
}) => {
  return (
    <>
      {/* Desktop Vertical Rail */}
      <aside
        aria-label="Story stage progress"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-4 px-2 rounded-full bg-[#0E1226]/50 backdrop-blur-md border border-[#BDE7FF]/10 shadow-[0_4px_20px_rgba(5,6,10,0.5)]"
      >
        <div className="absolute top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#6FD8FF]/20 via-[#BDE7FF]/40 to-[#6FD8FF]/20" />

        {STAGES_META.map((item) => {
          const isCurrent = currentStage === item.stage;
          const isPassed = currentStage > item.stage;

          return (
            <button
              key={item.stage}
              onClick={() => onSelectStage(item.stage)}
              className="group relative z-10 p-1.5 focus:outline-none"
              title={`${item.label} ${item.name}`}
            >
              {/* Diamond Marker */}
              <div
                className={`w-3.5 h-3.5 rotate-45 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#6FD8FF] scale-125 shadow-[0_0_10px_#6FD8FF] border border-[#F4FBFF]'
                    : isPassed
                    ? 'bg-[#BDE7FF]/60 border border-[#BDE7FF]'
                    : 'bg-[#0E1226] border border-[#BDE7FF]/30 group-hover:border-[#6FD8FF]'
                }`}
              />

              {/* Tooltip on Hover */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center px-2.5 py-1 rounded bg-[#07080C] border border-[#BDE7FF]/30 text-[10px] font-mono text-[#F4FBFF] whitespace-nowrap shadow-lg">
                <span className="text-[#6FD8FF] mr-1.5">{item.label}</span>
                {item.name}
              </div>
            </button>
          );
        })}
      </aside>

      {/* Mobile Horizontal Progress Bar (Pinned beneath navbar) */}
      <div className="lg:hidden fixed top-[60px] left-0 right-0 z-30 bg-[#07080C]/90 backdrop-blur-md border-b border-[#BDE7FF]/10 py-1.5 px-4 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#6FD8FF]">
          STAGE {STAGES_META[currentStage]?.label} · {STAGES_META[currentStage]?.name.split(':')[0]}
        </span>
        <div className="flex items-center gap-2">
          {STAGES_META.map((item) => {
            const isCurrent = currentStage === item.stage;
            const isPassed = currentStage > item.stage;
            return (
              <button
                key={item.stage}
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
