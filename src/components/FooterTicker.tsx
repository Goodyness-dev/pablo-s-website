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
        colors: ['#BDE7FF', '#6FD8FF', '#F8FAFC', '#FFE49A', '#9B7CFF'],
      });

      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 overflow-hidden pb-28 sm:pb-32">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand & Sign Off */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 p-[1px] bg-[#0E1226]">
                <img
                  src="/assets/logo-face.jpg"
                  alt="The Fundraiser"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-display font-extrabold text-base text-[#F8FAFC]">
                THE FUNDRAISER
              </span>
            </div>
            <p className="font-mono text-xs text-[#64748B]">
              Fundraisers Web Agency · Growth &amp; Visibility Engine
            </p>
          </div>

          {/* Interactive Easter Egg Diamond */}
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={handleDiamondEasterEgg}
              aria-label="Clickable Diamond Easter Egg"
              className="p-3 rounded-full hover:bg-white/5 transition-transform active:scale-90 focus:outline-none"
              title="Click 7 times for fam toast"
            >
              <div className="w-5 h-5 rotate-45 bg-[#0C101C] border-2 border-[#6FD8FF] shadow-[0_0_12px_rgba(111,216,255,0.4)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#FFE49A]" />
              </div>
            </button>
            <span className="font-street text-xs text-[#FFE49A] mt-1">
              You dig?
            </span>
          </div>

          {/* Channels & Direct Links */}
          <div className="flex flex-col items-center md:items-end gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/IZYCHE_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter) @IZYCHE_"
                className="metallic-social-pill group"
              >
                <svg className="w-4 h-4 fill-current text-[#6FD8FF] group-hover:text-white transition-colors group-hover:scale-110 drop-shadow-[0_0_6px_rgba(111,216,255,0.4)]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[#F8FAFC] group-hover:text-[#BDE7FF] transition-colors">@IZYCHE_</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram @Senor_Izyche"
                className="metallic-social-pill group"
              >
                <svg className="w-4 h-4 fill-current text-[#6FD8FF] group-hover:text-white transition-colors group-hover:scale-110 drop-shadow-[0_0_6px_rgba(111,216,255,0.4)]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                <span className="text-[#F8FAFC] group-hover:text-[#BDE7FF] transition-colors">@Senor_Izyche</span>
              </a>
            </div>
            <p className="text-[11px] text-[#64748B]">
              NFA, DYOR. Past results are not a promise.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-[11px] font-mono text-[#64748B]">
          &copy; {new Date().getFullYear()} The Fundraiser / Fundraisers Web. All receipts verified in public.
        </div>
      </div>

      {/* 7-Click Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 sm:bottom-28 right-6 z-50 p-4 rounded-2xl bg-[#0D111D] border border-[#6FD8FF] shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="text-xl">💎</span>
          <div>
            <div className="font-display font-bold text-sm text-[#F8FAFC]">
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
