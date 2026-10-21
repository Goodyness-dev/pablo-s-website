import React, { useState, useEffect } from 'react';
import { DiamondStage } from '../types';

interface VectorDiamondProps {
  stage: DiamondStage;
  className?: string;
  size?: number;
  interactive?: boolean;
}

export const VectorDiamond: React.FC<VectorDiamondProps> = ({
  stage,
  className = '',
  size = 340,
  interactive = true,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeAsset, setActiveAsset] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized cursor tilt (-10deg to +10deg)
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setTilt({
        x: -dy * 10,
        y: dx * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const isPolish = stage === 3;
  const isBrilliant = stage === 4;
  const isSet = stage === 5;
  const isChain = stage === 6;

  // Real diamond image assets from public/assets/
  const diamondAssets = [
    {
      src: '/assets/diamond-icon.jpg',
      label: 'Solitary Brilliant Cut',
      desc: 'Flawless clarity · 58 facets · Natural caustics',
    },
    {
      src: '/assets/expensive-diamond.png',
      label: 'Vault Diamond Cluster',
      desc: 'Loose master-cut gems · High refraction',
    },
    {
      src: '/assets/diamond-cut-1.jpg',
      label: 'Twin Fire Diamonds',
      desc: 'Prismatic dispersion · Specular fire',
    },
  ];

  const currentAsset = diamondAssets[activeAsset];

  return (
    <div
      className={`relative select-none flex flex-col items-center justify-center transition-transform duration-300 ease-out ${className}`}
      style={{
        width: size,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Void Glow Radial Backdrop */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background:
            isBrilliant || isSet || isChain
              ? 'radial-gradient(circle, rgba(111,216,255,0.28) 0%, rgba(155,124,255,0.15) 35%, rgba(5,6,10,0) 70%)'
              : isPolish
              ? 'radial-gradient(circle, rgba(47,168,230,0.22) 0%, rgba(5,6,10,0) 65%)'
              : 'radial-gradient(circle, rgba(14,18,38,0.55) 0%, rgba(5,6,10,0) 60%)',
          filter: 'blur(36px)',
          transform: 'scale(1.25)',
        }}
      />

      {/* Main Real Diamond Presentation Container */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Real Diamond Photographic Image with Natural Caustic Screen Blend */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden flex items-center justify-center p-2">
          <img
            src={currentAsset.src}
            alt={currentAsset.label}
            className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.85)] transition-all duration-500 hover:scale-105"
            style={{
              mixBlendMode: 'screen',
              filter:
                activeAsset === 0
                  ? 'contrast(1.2) brightness(1.1) drop-shadow(0 0 20px rgba(111,216,255,0.35))'
                  : 'contrast(1.15) brightness(1.05) drop-shadow(0 0 16px rgba(111,216,255,0.25))',
            }}
          />

          {/* Real Specular Star Sparkle Bursts at Crown Facets */}
          {(isBrilliant || isSet || isChain || stage >= 2) && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Hotspot 1: Crown Table Specular Glint */}
              <div
                className="absolute top-[28%] left-[48%] -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ animationDuration: '1.8s' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#FFFFFF" />
                  <circle cx="12" cy="12" r="3" fill="#BDE7FF" filter="blur(1px)" />
                </svg>
              </div>

              {/* Hotspot 2: Top Right Facet Flashing Star */}
              <div
                className="absolute top-[32%] right-[22%] animate-pulse"
                style={{ animationDuration: '2.4s', animationDelay: '0.8s' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#6FD8FF" />
                </svg>
              </div>

              {/* Hotspot 3: Left Girdle Prism Sparkle */}
              <div
                className="absolute top-[42%] left-[20%] animate-pulse"
                style={{ animationDuration: '2.1s', animationDelay: '1.4s' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#FFE49A" />
                </svg>
              </div>
            </div>
          )}

          {/* STAGE 5 & 6: REAL GOLD MOUNTING PRONGS & ACCENT */}
          {(isSet || isChain) && (
            <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
              <div className="px-3.5 py-1 rounded-full bg-[#0D111D]/90 border border-[#F2C14E]/60 shadow-[0_0_16px_rgba(242,193,78,0.4)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFE49A] animate-ping" />
                <span className="font-mono text-[10px] text-[#FFE49A] uppercase tracking-wider font-bold">
                  24K Gold Set Prongs Mounted
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Ambient Ground Caustic Shadow and Reflection */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(111,216,255,0.3) 0%, rgba(14,18,38,0.6) 40%, transparent 75%)',
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* Real Diamond Switcher / Proof Badge Strip */}
      <div className="mt-2 flex items-center justify-center gap-1.5 p-1 rounded-full bg-[#090C16]/90 border border-white/10 backdrop-blur-md shadow-xl z-20">
        {diamondAssets.map((asset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveAsset(idx as 0 | 1 | 2)}
            className={`px-3 py-1 rounded-full font-mono text-[10px] sm:text-xs transition-all flex items-center gap-1.5 ${
              activeAsset === idx
                ? 'bg-[#151D33] text-[#6FD8FF] border border-[#6FD8FF]/40 shadow-[0_0_10px_rgba(111,216,255,0.25)] font-bold'
                : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 border border-transparent'
            }`}
            title={asset.desc}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeAsset === idx ? 'bg-[#6FD8FF]' : 'bg-white/30'
              }`}
            />
            <span>{idx === 0 ? 'Brilliant' : idx === 1 ? 'Cluster' : 'Twin Fire'}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
