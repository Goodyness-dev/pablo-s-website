import React, { useState } from 'react';

export const WhoIsFundraiser: React.FC = () => {
  const [winked, setWinked] = useState(false);

  const handleMascotClick = () => {
    setWinked(true);
    setTimeout(() => setWinked(false), 1400);
  };

  return (
    <section className="relative py-16 md:py-24 border-y border-[#5589C2]/20 bg-[#070B12] overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          
          {/* Mascot / Thick White Sticker Avatar (Patch Section 1 & 4) */}
          <div className="relative group shrink-0">
            <button
              onClick={handleMascotClick}
              aria-label="Click the Fundraiser sticker"
              className="relative block rounded-full p-1 bg-[#5589C2] shadow-[0_8px_32px_rgba(85,137,194,0.35)] transform transition-transform duration-300 hover:rotate-3 active:scale-95 focus:outline-none"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-black border-4 border-white shadow-2xl relative">
                <img
                  src="/assets/logo-face.jpg"
                  alt="Izyche - The Fundraiser face mark"
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    winked ? 'scale-110' : 'scale-100'
                  }`}
                />

                {/* Iced Out Grill Sparkle Effect (Patch Section 4: Star teeth catch a glint) */}
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none"
                >
                  <span className="text-[#C1E9C2] text-xs animate-ping">✦</span>
                  <span className="text-white text-[10px] animate-pulse">✦</span>
                </div>
              </div>
            </button>

            {/* Sticker Speech Bubble */}
            <div className="absolute -top-3 -right-6 px-3 py-1 rounded-xl bg-black border-2 border-[#5589C2] shadow-[3px_3px_0px_#C1E9C2] transform rotate-6">
              <span className="font-display text-xs text-[#C1E9C2]">
                {winked ? 'Light work! ⚡' : 'You dig?'}
              </span>
            </div>
          </div>

          {/* Bio Copy */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 font-body font-bold text-xs text-[#5589C2] uppercase tracking-wider mb-2">
              <span>★ THE IDENTITY BEHIND THE ENGINE</span>
            </div>
            
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-4">
              Meet the Fundraiser.
            </h2>
            <p className="font-body text-[#C5DAF0] text-base leading-relaxed mb-6">
              I came into Web3 as a degen with a wallet and no fear. Now I run <span className="text-white font-bold">Fundraisers Web</span>, a growth agency for projects that need eyes, hands, and heat. I do raids, community, Spaces, and visibility — and I show every receipt.
            </p>

            {/* 3-Item Credential Strip with Star Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0B121D] border border-[#5589C2]/20">
                <span className="text-[#C1E9C2] font-bold text-xs">★</span>
                <span className="font-body font-semibold text-xs text-white">Channel since Mar 2025</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0B121D] border border-[#5589C2]/20">
                <span className="text-[#5589C2] font-bold text-xs">★</span>
                <span className="font-body font-semibold text-xs text-white">Hosts Live X Spaces</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0B121D] border border-[#5589C2]/20">
                <span className="text-[#C1E9C2] font-bold text-xs">★</span>
                <span className="font-body font-semibold text-xs text-white">Multi-Launch Ambassador</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
