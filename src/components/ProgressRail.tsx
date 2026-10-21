import React from 'react';
import { DiamondStage } from '../types';
import { RealDiamondIcon } from './RealDiamondIcon';

interface ProgressRailProps {
  currentStage: DiamondStage;
  onSelectStage: (stage: DiamondStage) => void;
  navbarHidden?: boolean;
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
  navbarHidden = false,
}) => {
  return (
    <>
      {/* Desktop Vertical Rail (Metallic Spine with Real Diamonds) */}
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
              className="group relative z-10 p-1 focus:outline-none transition-transform hover:scale-110 active:scale-95"
              title={`${item.label} ${item.name}`}
            >
              {/* Real Diamond Marker */}
              <div
                className={`relative rounded-full p-0.5 transition-all duration-300 ${
                  isCurrent
                    ? 'ring-2 ring-[#6FD8FF] bg-[#12192B] shadow-[0_0_14px_#6FD8FF] scale-125'
                    : isPassed
                    ? 'ring-1 ring-[#BDE7FF]/60 bg-[#0E1322]'
                    : 'opacity-40 hover:opacity-100'
                }`}
              >
                <RealDiamondIcon
                  size={isCurrent ? 16 : 13}
                  glow={isCurrent}
                  pulse={isCurrent}
                />
              </div>

              {/* Tooltip on Hover */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center px-3 py-1.5 rounded-full bg-[#0A0D16] border border-white/15 text-[11px] font-mono text-[#F8FAFC] whitespace-nowrap shadow-xl">
                <span className="text-[#6FD8FF] mr-1.5 font-bold">{item.label}</span>
                {item.name}
              </div>
            </button>
          );
        })}
      </aside>

      {/* Mobile Horizontal Progress Bar */}
      <div
        className={`lg:hidden fixed left-0 right-0 z-30 bg-[#080A0F]/90 backdrop-blur-xl border-b border-white/10 py-1.5 px-4 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          navbarHidden ? 'top-0' : 'top-[56px]'
        }`}
      >
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#6FD8FF] font-semibold flex items-center gap-1.5">
          <RealDiamondIcon size={12} glow={false} />
          STAGE {STAGES_META[currentStage]?.label} · {STAGES_META[currentStage]?.name.split(':')[0]}
        </span>
        <div className="flex items-center gap-1.5">
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
                  className={`rounded-full p-0.5 transition-all ${
                    isCurrent
                      ? 'ring-1 ring-[#6FD8FF] bg-[#12192B] scale-125'
                      : isPassed
                      ? 'opacity-80'
                      : 'opacity-30'
                  }`}
                >
                  <RealDiamondIcon size={10} glow={isCurrent} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
