import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface FooterProps {
  motionPaused?: boolean;
  onToggleMotion?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  motionPaused = false,
  onToggleMotion,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleMascotClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next === 7) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.9 },
        colors: ['#F0EEE7', '#B8B6AD', '#FFFFFF'],
      });
      setClickCount(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-[#000000] text-[#B8B6AD] py-16 sm:py-20 border-t border-[#33332F]/80">
      {/* Background Image Container */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/assets/footer-bg.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.05]"
        />
        {/* Dark Editorial Vignette & Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#000000]/65 to-[#000000]/85" />
        <div className="absolute inset-0 bg-[#000000]/25 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Tier: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#33332F]/70">
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleMascotClick}
              title="The Fundraiser"
              className="w-10 h-10 border border-[#33332F] bg-[#111110] rounded-[2px] overflow-hidden flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F0EEE7]"
            >
              <img
                src="/assets/logo-face.jpg"
                alt="The Fundraiser Face Logo"
                className="w-full h-full object-cover filter contrast-105"
              />
            </button>

            <div>
              <span className="font-display font-bold text-lg text-[#F0EEE7] uppercase tracking-tight block leading-none">
                The Fundraiser / Fundraisers Web
              </span>
              <span className="font-body text-xs text-[#A7A69F] block mt-1.5">
                Web3 campaigns, community & conversations.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="text-[#A7A69F] hover:text-[#F0EEE7] transition-colors py-1 px-2 border border-[#33332F] rounded-[2px] flex items-center gap-1.5"
                title={theme === 'light' ? 'Switch to Dark theme' : 'Switch to Light theme'}
              >
                {theme === 'light' ? (
                  <>
                    <svg className="w-3 h-3 text-[#141413]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>Theme: Light</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3 text-[#FFE49A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    <span>Theme: Dark</span>
                  </>
                )}
              </button>
            )}

            {onToggleMotion && (
              <button
                type="button"
                onClick={onToggleMotion}
                className="text-[#A7A69F] hover:text-[#F0EEE7] transition-colors py-1 px-2 border border-[#33332F] rounded-[2px]"
              >
                Motion: {motionPaused ? 'Reduced' : 'Standard'}
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#A7A69F] hover:text-[#F0EEE7] transition-colors flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

        </div>

        {/* Bottom Tier: Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono text-[#A7A69F]">
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://x.com/IZYCHE_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0EEE7] transition-colors"
            >
              X ↗
            </a>
            <a
              href="https://t.me/thefundraiserweb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0EEE7] transition-colors"
            >
              Telegram ↗
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#F0EEE7] transition-colors"
            >
              Back to top ↑
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span>© {new Date().getFullYear()} The Fundraiser / Fundraisers Web</span>
            <span className="hidden sm:inline">·</span>
            <span>Pressure makes diamonds.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
