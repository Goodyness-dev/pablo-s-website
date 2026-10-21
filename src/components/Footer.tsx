import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface FooterProps {
  motionPaused?: boolean;
  onToggleMotion?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  motionPaused = false,
  onToggleMotion,
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
    <footer className="relative bg-[#000000] text-[#B8B6AD] py-16 border-t border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Tier: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#33332F]">
          
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

          <div className="flex items-center gap-6 text-xs font-mono">
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
