import React from 'react';

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
          
          {/* Hero Visual: Riley / The Fundraiser */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center py-4 lg:py-0">
            <div className="relative group flex items-center justify-center">
              {/* Radial Specular Ambient Glow */}
              <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-[#6FD8FF]/15 via-[#2FA8E6]/10 to-transparent blur-3xl pointer-events-none" />
              
              {/* Riley Face Artwork */}
              <div className="relative z-10 p-2">
                <img
                  src="/assets/riley.png"
                  alt="The Fundraiser"
                  className="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[420px] max-w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] drop-shadow-[0_0_25px_rgba(111,216,255,0.22)] transition-transform duration-500 hover:scale-[1.03]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Left Text Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Diamond-Inspired "THE FUNDRAISER" Crest Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0C1222] via-[#10182E] to-[#0C1222] border border-[#6FD8FF]/35 shadow-[0_0_24px_rgba(111,216,255,0.2)] mb-4 sm:mb-5 group backdrop-blur-md">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#6FD8FF]">
                <path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21L8 9L12 3L16 9L12 21Z" stroke="#BDE7FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9H22" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="font-display font-extrabold text-xs tracking-wider text-[#F8FAFC]">
                THE FUNDRAISER
              </span>
              <span className="w-[1px] h-3 bg-white/20" />
              <span className="font-mono text-[10px] text-[#6FD8FF] uppercase tracking-wider font-semibold">
                Diamond Grade
              </span>
            </div>

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
          </div>

        </div>
      </div>
    </section>
  );
};
