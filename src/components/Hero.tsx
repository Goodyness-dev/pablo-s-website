import React from 'react';
import { VectorDiamond } from './VectorDiamond';

interface HeroProps {
  onSeeRecentWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeRecentWork }) => {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Soft Background Spotlight Cone */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(85,137,194,0.12) 0%, rgba(193,233,194,0.06) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Diamond on Top for Mobile, Right Column for Desktop */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center items-center py-4 lg:py-0">
            <div className="relative">
              {/* High-Contrast Expensive Diamond */}
              <VectorDiamond
                stage={4}
                size={320}
                className="w-[260px] h-[300px] sm:w-[320px] sm:h-[360px] md:w-[380px] md:h-[420px]"
                interactive={true}
              />

              {/* Rotating Circular Seal Badge in Corner (Patch Section 4: 40s per turn) */}
              <div className="absolute -bottom-4 right-0 sm:right-6 animate-spin-slow pointer-events-none">
                <svg width="104" height="104" viewBox="0 0 100 100" className="w-20 h-20 sm:w-26 sm:h-26">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                  <text fill="#5589C2" fontSize="7.8" fontWeight="bold" letterSpacing="0.16em">
                    <textPath href="#circlePath" startOffset="0%">
                      THE FUNDRAISER · WEB3 GROWTH · THE FUNDRAISER ·
                    </textPath>
                  </text>
                  <circle cx="50" cy="50" r="18" fill="#0B121D" stroke="#5589C2" strokeWidth="1.5" />
                  <image href="/assets/logo-face.jpg" x="35" y="35" width="30" height="30" clipPath="url(#sealClip)" />
                  <clipPath id="sealClip">
                    <circle cx="50" cy="50" r="15" />
                  </clipPath>
                </svg>
              </div>
            </div>
          </div>

          {/* Left Text Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/40 text-[#5589C2] font-mono text-[11px] tracking-[0.16em] uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C1E9C2]" />
              <span>OFFICIAL BRAND KIT · WEB3 &amp; DEFI</span>
            </div>

            {/* Main Headline in LAROF with Hard Blue Block Shadow */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white headline-shadow mb-5 sm:mb-7">
              Pressure makes <br />
              <span className="text-white">diamonds.</span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-[#C5DAF0] text-base sm:text-lg md:text-xl leading-relaxed max-w-[540px] mb-8">
              We turn early Web3 projects into names people trust. Raids, communities, Spaces, and utilities. All proven in public.
            </p>

            {/* Dual CTAs (Patch Section 7: Primary 'See recent work', Secondary 'Work with us') */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onSeeRecentWork}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-bold text-base text-black bg-[#5589C2] shadow-[4px_4px_0px_#C1E9C2] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform active:scale-98 group"
              >
                <span>See recent work</span>
                <span className="inline-block ml-2 group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </button>

              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-bold text-base text-white bg-black border-2 border-[#5589C2] hover:border-[#C1E9C2] hover:text-[#C1E9C2] transition-all transform active:scale-98"
              >
                Work with us
              </a>
            </div>

            {/* Slim Live Strip for 4 Newest Projects (Patch Section 7) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-white/10 w-full">
              <span className="font-mono text-[10px] text-[#5589C2] uppercase font-bold mr-1">
                LATEST LIVE:
              </span>
              <a
                href="#recent-work"
                className="px-2.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/30 font-body text-xs text-[#C5DAF0] hover:text-white hover:border-[#5589C2] transition-colors"
              >
                ★ Ether Archive
              </a>
              <a
                href="#recent-work"
                className="px-2.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/30 font-body text-xs text-[#C5DAF0] hover:text-white hover:border-[#5589C2] transition-colors"
              >
                Clover Boys
              </a>
              <a
                href="#recent-work"
                className="px-2.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/30 font-body text-xs text-[#C5DAF0] hover:text-white hover:border-[#5589C2] transition-colors"
              >
                Wojak Meter
              </a>
              <a
                href="#recent-work"
                className="px-2.5 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/30 font-body text-xs text-[#C5DAF0] hover:text-white hover:border-[#5589C2] transition-colors"
              >
                Funpump
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
