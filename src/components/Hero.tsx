import React from 'react';
import { VectorDiamond } from './VectorDiamond';

interface HeroProps {
  onWatchCut: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchCut }) => {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Star Dust / Ambient Cold Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-[#BDE7FF] dust-particle" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#6FD8FF] dust-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#FF7AD9] dust-particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6FD8FF]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Diamond on Top / Desktop Right */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center py-4 lg:py-0">
            <div className="relative">
              <VectorDiamond
                stage={4}
                size={280}
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]"
                interactive={true}
              />
              {/* Floating Monogram Chip (OpenCircle Style) */}
              <div className="absolute -bottom-2 right-4 sm:right-8 px-3.5 py-1.5 rounded-full bg-[#0C101B]/90 backdrop-blur-xl border border-white/15 flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                <span className="font-mono text-xs text-[#F8FAFC]">@IZYCHE_ · ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Left Text Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#F8FAFC] mb-4 sm:mb-6">
              Pressure makes <br className="hidden sm:inline" />
              <span className="diamond-sheen">diamonds.</span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-[#94A3B8] text-base sm:text-lg md:text-xl leading-relaxed max-w-[540px] mb-8">
              We turn early Web3 projects into names people trust. Raids, communities, Spaces, and visibility. All proven in public.
            </p>

            {/* Dual CTAs (OpenCircle Inspired Capsule Architecture) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              
              {/* Primary Metallic Telegram CTA */}
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-pill-primary px-8 py-3.5 text-sm sm:text-base font-body font-semibold min-h-[48px] shadow-lg"
              >
                <span>Work with us</span>
                <span className="ml-2 text-[#6FD8FF]">↗</span>
              </a>

              {/* Secondary Glossy Metallic Pill */}
              <button
                type="button"
                onClick={onWatchCut}
                className="metallic-pill px-7 py-3.5 text-sm sm:text-base font-body font-medium min-h-[48px] group"
              >
                <span>Watch the cut</span>
                <span className="inline-block ml-2 group-hover:translate-y-0.5 transition-transform text-[#6FD8FF]">
                  ↓
                </span>
              </button>
            </div>

            {/* Micro Scroll Hint */}
            <p className="font-mono text-xs text-[#64748B] uppercase tracking-wider mt-6 flex items-center gap-1.5">
              <span>Scroll down to cut the stone</span>
              <span className="animate-bounce">↓</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
