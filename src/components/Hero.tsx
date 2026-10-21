import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLightbox } from '../context/LightboxContext';

interface HeroProps {
  onReadStory?: () => void;
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReadStory, onExploreWork }) => {
  const { openLightbox } = useLightbox();
  const containerRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const lines = [headlineLine1Ref.current, headlineLine2Ref.current].filter(Boolean);
      if (lines.length > 0) {
        gsap.fromTo(
          lines,
          { yPercent: 105, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleReadStory = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onReadStory) {
      onReadStory();
    } else {
      document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreWork) {
      onExploreWork();
    } else {
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90dvh] pt-32 pb-20 md:pt-40 md:pb-32 flex items-center border-b border-[#33332F]"
    >
      <div className="max-w-[1312px] w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Thesis Statement */}
          <div className="lg:col-span-8 flex flex-col items-start z-10">
            
            {/* Editorial Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#F0EEE7] rounded-[1px]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8B6AD]">
                Web3 growth & community
              </span>
            </div>

            {/* Oversized Condensed Headline */}
            <h1 className="text-hero text-[#F0EEE7] mb-8 font-bold tracking-tight">
              <span className="block overflow-hidden py-1">
                <span ref={headlineLine1Ref} className="block will-change-transform">
                  Pressure makes
                </span>
              </span>
              <span className="block overflow-hidden py-1">
                <span ref={headlineLine2Ref} className="block will-change-transform">
                  diamonds.
                </span>
              </span>
            </h1>

            {/* Humanist Subcopy */}
            <p className="font-body text-[#B8B6AD] text-lg sm:text-xl md:text-2xl max-w-[620px] leading-relaxed mb-10 font-normal">
              We help Web3 projects get seen and build a community. Through campaigns, live X Spaces, and work you can inspect.
            </p>

            {/* Clear Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#work"
                onClick={handleExploreWork}
                className="btn-primary text-sm tracking-wide"
              >
                <span>See the work</span>
                <span>↗</span>
              </a>

              <a
                href="#story"
                onClick={handleReadStory}
                className="link-editorial text-sm font-medium"
              >
                <span>How it started</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* Right Column: Preserved Mascot Framing */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-full sm:max-w-[380px]">
              
              {/* Clean Framed Container */}
              <div className="relative border border-[#33332F] bg-[#111110] rounded-[2px] overflow-hidden transition-transform duration-300 hover:border-[#77776F]">
                
                {/* Visual Label */}
                <div className="flex items-center justify-between border-b border-[#33332F] p-4 sm:p-5 text-xs font-mono text-[#A7A69F]">
                  <span className="uppercase tracking-wider">
                    Identity mark
                  </span>
                  <span>
                    Riley / Senor Izyche
                  </span>
                </div>

                {/* Riley Image Preserved with Framing — Full Width of Card */}
                <div
                  className="relative aspect-square w-full overflow-hidden bg-[#0A0A09] border-b border-[#33332F] cursor-pointer group"
                  onClick={() =>
                    openLightbox([
                      {
                        src: '/assets/riley.png',
                        alt: 'The Fundraiser Mascot - Riley',
                        title: 'Riley / Senor Izyche',
                        caption: 'The Fundraiser official identity mark and mascot, Est. 2025',
                        date: '2025',
                      },
                    ])
                  }
                >
                  <img
                    src="/assets/riley.png"
                    alt="The Fundraiser Mascot"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                  <div className="absolute top-2 right-2 bg-black/80 border border-[#33332F] px-2 py-0.5 text-[10px] font-mono text-[#F0EEE7] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2px]">
                    ⛶ Fullscreen
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 sm:p-5 flex items-center justify-between text-[11px] font-mono text-[#A7A69F]">
                  <span>The Fundraiser</span>
                  <span>Est. 2025</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
