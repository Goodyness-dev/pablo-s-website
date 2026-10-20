import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const FooterTicker: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleDiamondEasterEgg = () => {
    const next = clickCount + 1;
    setClickCount(next);

    if (next === 7) {
      setClickCount(0);
      setShowToast(true);

      // Fire diamond sparkle confetti
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.9 },
        colors: ['#BDE7FF', '#6FD8FF', '#F4FBFF', '#FFE49A', '#9B7CFF'],
      });

      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <footer className="relative bg-[#05060A] border-t border-[#BDE7FF]/10 overflow-hidden">
      
      {/* Marquee GM Ticker */}
      <div className="py-3 border-b border-white/5 bg-[#07080C] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[#6B778C]">
          <span>GM</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
          <span>GM</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#FFE49A]" />
          <span>THE FUNDRAISER SHOW</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
          <span>VALUE BREEDS VALUE</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#BDE7FF]" />
          <span>WE DELIVER</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#FFE49A]" />
          <span>LIGHT WORK</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
          <span>PRESSURE MAKES DIAMONDS</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#BDE7FF]" />
          <span>GM</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
          <span>GM</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#FFE49A]" />
          <span>THE FUNDRAISER SHOW</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
          <span>VALUE BREEDS VALUE</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#BDE7FF]" />
          <span>WE DELIVER</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#FFE49A]" />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand & Sign Off */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#BDE7FF]/30 p-[1px] bg-[#0E1226]">
                <img
                  src="/assets/logo-face.jpg"
                  alt="The Fundraiser"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-display font-extrabold text-base text-[#F4FBFF]">
                THE FUNDRAISER SHOW
              </span>
            </div>
            <p className="font-mono text-xs text-[#6B778C]">
              Fundraisers Web Agency · Growth &amp; Visibility Engine
            </p>
          </div>

          {/* Interactive Easter Egg Diamond */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleDiamondEasterEgg}
              aria-label="Clickable Diamond Easter Egg"
              className="p-3 rounded-full hover:bg-white/5 transition-transform active:scale-90 focus:outline-none"
              title="Click 7 times for fam toast"
            >
              <div className="w-5 h-5 rotate-45 bg-[#0E1226] border-2 border-[#6FD8FF] shadow-[0_0_12px_rgba(111,216,255,0.4)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#FFE49A]" />
              </div>
            </button>
            <span className="font-street text-xs text-[#FFE49A] mt-1">
              You dig?
            </span>
          </div>

          {/* Channels & Direct Links */}
          <div className="flex flex-col md:items-end gap-2 text-xs font-mono">
            <div className="flex items-center gap-4 text-[#A8B4C8]">
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6FD8FF] transition-colors"
              >
                Telegram (@Senor_Izyche)
              </a>
              <span>·</span>
              <a
                href="https://x.com/IZYCHE_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6FD8FF] transition-colors"
              >
                X (@IZYCHE_)
              </a>
            </div>
            <p className="text-[11px] text-[#6B778C]">
              NFA, DYOR. Past results are not a promise.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-[11px] font-mono text-[#6B778C]">
          &copy; {new Date().getFullYear()} The Fundraiser / Fundraisers Web. All receipts verified in public.
        </div>
      </div>

      {/* 7-Click Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#0E1226] border border-[#6FD8FF] shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="text-xl">💎</span>
          <div>
            <div className="font-display font-bold text-sm text-[#F4FBFF]">
              GM, fundraiser fam!
            </div>
            <div className="font-mono text-xs text-[#6FD8FF]">
              Vault unlocked. You found the secret.
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
