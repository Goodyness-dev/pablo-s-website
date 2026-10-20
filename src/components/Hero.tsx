import React from 'react';
import { VectorDiamond } from './VectorDiamond';

interface HeroProps {
  onWatchCut: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchCut }) => {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Star Dust / Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 rounded-full bg-[#BDE7FF] dust-particle" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#6FD8FF] dust-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#FF7AD9] dust-particle" style={{ animationDelay: '4s' }} />
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
              {/* Floating Monogram Chip */}
              <div className="absolute -bottom-2 right-4 sm:right-8 px-3 py-1.5 rounded-full bg-[#0E1226]/80 backdrop-blur-md border border-[#BDE7FF]/20 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#346538] animate-ping" />
                <span className="font-mono text-[11px] text-[#F4FBFF]">@IZYCHE_ · ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Left Text Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Eyebrow Mono Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1226] border border-[#BDE7FF]/20 text-[#6FD8FF] font-mono text-[11px] tracking-[0.16em] uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
              <span>WEB3 · DEFI · GROWTH STRATEGY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F4FBFF] mb-4 sm:mb-6">
              Pressure makes <br className="hidden sm:inline" />
              <span className="diamond-sheen">diamonds.</span>
            </h1>

            {/* Subtext: < 20 words, tight value prop */}
            <p className="font-body text-[#A8B4C8] text-base sm:text-lg md:text-xl leading-relaxed max-w-[540px] mb-8">
              We turn early Web3 projects into names people trust. Raids, communities, Spaces, and visibility. All proven in public.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onWatchCut}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-body font-medium text-base text-[#F4FBFF] bg-[#0E1226] border border-[#6FD8FF]/40 hover:border-[#6FD8FF] hover:bg-[#161B36] transition-all transform active:scale-98 shadow-[0_4px_20px_rgba(111,216,255,0.2)] group"
              >
                <span>Watch the cut</span>
                <span className="inline-block ml-2 group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </button>

              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-body font-semibold text-base text-[#05060A] bg-[#FFE49A] hover:bg-[#F2C14E] transition-all transform active:scale-98 shadow-[0_4px_16px_rgba(242,193,78,0.3)]"
              >
                Work with us
              </a>
            </div>

            {/* Micro Scroll Hint */}
            <p className="font-mono text-xs text-[#6B778C] uppercase tracking-wider mt-5">
              Scroll down to cut the stone
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
