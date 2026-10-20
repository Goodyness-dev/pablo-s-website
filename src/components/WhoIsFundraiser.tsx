import React, { useState } from 'react';

export const WhoIsFundraiser: React.FC = () => {
  const [winked, setWinked] = useState(false);

  const handleMascotClick = () => {
    setWinked(true);
    setTimeout(() => setWinked(false), 1200);
  };

  return (
    <section className="relative py-16 md:py-24 border-y border-[#BDE7FF]/10 bg-[#07080C]/60 overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Mascot / Sticker Avatar */}
          <div className="relative group shrink-0">
            <button
              onClick={handleMascotClick}
              aria-label="Click the Fundraiser sticker"
              className="relative block rounded-full p-1.5 bg-gradient-to-tr from-[#6FD8FF] to-[#FFE49A] shadow-[0_8px_32px_rgba(111,216,255,0.25)] transform transition-transform duration-300 hover:rotate-3 active:scale-95 focus:outline-none"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#05060A] border-2 border-white">
                <img
                  src="/assets/logo-face.jpg"
                  alt="Izyche - The Fundraiser face mark"
                  className={`w-full h-full object-cover transition-transform ${
                    winked ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            </button>

            {/* Permanent Marker Street Bubble */}
            <div className="absolute -top-3 -right-6 px-3 py-1 rounded-xl bg-[#05060A] border border-[#6FD8FF]/40 shadow-lg transform rotate-6 animate-bounce">
              <span className="font-street text-xs text-[#FFE49A]">
                {winked ? 'Light work! ⚡' : 'You dig?'}
              </span>
            </div>
          </div>

          {/* Bio Copy */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F4FBFF] mb-4">
              Meet the Fundraiser.
            </h2>
            <p className="font-body text-[#A8B4C8] text-base sm:text-lg leading-relaxed mb-6">
              I came into Web3 as a degen with a wallet and no fear. Now I run <span className="text-[#F4FBFF] font-semibold">Fundraisers Web</span>, a growth agency for projects that need eyes, hands, and heat. I do raids, community, Spaces, and visibility — and I show every receipt.
            </p>

            {/* 3-Item Credential Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0E1226]/80 border border-[#BDE7FF]/10">
                <span className="w-2 h-2 rotate-45 bg-[#6FD8FF] shrink-0" />
                <span className="font-mono text-xs text-[#F4FBFF]">Channel since Mar 2025</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0E1226]/80 border border-[#BDE7FF]/10">
                <span className="w-2 h-2 rotate-45 bg-[#6FD8FF] shrink-0" />
                <span className="font-mono text-xs text-[#F4FBFF]">Hosts Live X Spaces</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#0E1226]/80 border border-[#BDE7FF]/10">
                <span className="w-2 h-2 rotate-45 bg-[#FFE49A] shrink-0" />
                <span className="font-mono text-xs text-[#F4FBFF]">Multi-Project Ambassador</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
