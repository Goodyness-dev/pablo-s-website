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

      // Fire diamond sparkle confetti in brand colors
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.9 },
        colors: ['#5589C2', '#C1E9C2', '#FFFFFF', '#3F6EA3'],
      });

      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-[#5589C2]/20 overflow-hidden">
      
      {/* Marquee GM Ticker in Outline Text (Patch Section 8) */}
      <div className="py-3 border-b border-white/10 bg-[#04070C] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display text-sm md:text-base uppercase tracking-widest text-transparent [-webkit-text-stroke:1px_rgba(85,137,194,0.6)]">
          <span>GM</span>
          <span className="text-[#C1E9C2] font-bold text-xs">★</span>
          <span>THE FUNDRAISER</span>
          <span className="text-[#5589C2] font-bold text-xs">★</span>
          <span>WE DELIVER</span>
          <span className="text-[#C1E9C2] font-bold text-xs">★</span>
          <span>VALUE BREEDS VALUE</span>
          <span className="text-[#5589C2] font-bold text-xs">★</span>
          <span>LIGHT WORK</span>
          <span className="text-[#C1E9C2] font-bold text-xs">★</span>
          <span>PRESSURE MAKES DIAMONDS</span>
          <span className="text-[#5589C2] font-bold text-xs">★</span>
          <span>GM</span>
          <span className="text-[#C1E9C2] font-bold text-xs">★</span>
          <span>THE FUNDRAISER</span>
          <span className="text-[#5589C2] font-bold text-xs">★</span>
          <span>WE DELIVER</span>
          <span className="text-[#C1E9C2] font-bold text-xs">★</span>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand with White Sticker Outline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white p-[1px] bg-black">
                <img
                  src="/assets/logo-face.jpg"
                  alt="The Fundraiser"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-display font-black text-lg text-white">
                THE FUNDRAISER
              </span>
            </div>
            <p className="font-body text-xs text-[#5589C2]">
              Official Agency Brand Kit · Web3 &amp; Growth Engine
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
              <div className="w-6 h-6 rotate-45 bg-[#0B121D] border-2 border-[#5589C2] shadow-[0_0_12px_rgba(85,137,194,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#C1E9C2]" />
              </div>
            </button>
            <span className="font-body font-bold text-xs text-[#C1E9C2] mt-1">
              You dig? ★
            </span>
          </div>

          {/* Channels & Direct Links */}
          <div className="flex flex-col md:items-end gap-2 text-xs font-body">
            <div className="flex items-center gap-4 text-[#C5DAF0]">
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C1E9C2] transition-colors font-bold"
              >
                Telegram (@Senor_Izyche) ↗
              </a>
              <span>·</span>
              <a
                href="https://x.com/IZYCHE_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5589C2] transition-colors font-bold"
              >
                X (@IZYCHE_) ↗
              </a>
            </div>
            <p className="text-[11px] text-[#5589C2]">
              NFA, DYOR. Past results are not a promise.
            </p>
          </div>

        </div>

        {/* Barcode Divider */}
        <div className="my-8 flex items-center justify-center select-none">
          <div className="px-5 py-1.5 rounded bg-black border border-[#5589C2]/30 flex items-center gap-3">
            <span className="font-display font-black text-xs tracking-wider text-white">FUND</span>
            <span className="font-mono text-[10px] tracking-[-0.1em] text-[#5589C2]">||||||||||||||</span>
            <span className="font-display font-black text-xs tracking-wider text-white">RAISER</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/5 text-center text-[11px] font-body text-[#5589C2]">
          &copy; {new Date().getFullYear()} The Fundraiser / Fundraisers Web. All receipts verified in public.
        </div>
      </div>

      {/* 7-Click Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#0B121D] border-2 border-[#5589C2] shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="text-xl">💎</span>
          <div>
            <div className="font-display font-bold text-sm text-white">
              GM, fundraiser fam!
            </div>
            <div className="font-body text-xs text-[#C1E9C2] font-semibold">
              Vault unlocked. You found the secret.
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
