import React, { useState, useEffect } from 'react';
import { DiamondStage } from '../types';

interface VectorDiamondProps {
  stage: DiamondStage;
  className?: string;
  size?: number;
  interactive?: boolean;
  usePhotorealistic?: boolean;
}

export const VectorDiamond: React.FC<VectorDiamondProps> = ({
  stage,
  className = '',
  size = 340,
  interactive = true,
  usePhotorealistic = false,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle jewelry tilt (max 8 degrees as per Patch spec)
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setTilt({
        x: -dy * 8,
        y: dx * 8,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const isRough = stage === 0;
  const isCleave = stage === 1;

  if (usePhotorealistic) {
    return (
      <div
        className={`relative select-none flex flex-col items-center justify-center transition-transform duration-500 ease-out ${className}`}
        style={{
          width: size,
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Soft Spotlight Cone from Top Left */}
        <div
          className="absolute -top-24 -left-20 w-[420px] h-[420px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(193,233,194,0.15) 0%, rgba(85,137,194,0.12) 40%, rgba(0,0,0,0) 70%)',
            filter: 'blur(36px)',
          }}
        />

        {/* Real Cut Diamond Jewelry Piece */}
        <div className="relative rounded-2xl overflow-hidden border border-[#5589C2]/30 shadow-[0_24px_60px_rgba(0,0,0,0.9)] bg-[#04070C]">
          <img
            src="/assets/image 2.jpg"
            alt="Real Cut Brilliant Diamonds"
            className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
          />

          {/* Specular Glint Flares */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white rounded-full blur-[1px] animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#C1E9C2] rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1.2s' }} />
        </div>

        {/* Ground Reflection & Shadow */}
        <div className="w-3/4 h-6 mt-2 rounded-full bg-black/80 blur-md pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`relative select-none flex flex-col items-center justify-center transition-transform duration-300 ease-out ${className}`}
      style={{
        width: size,
        height: size + 40,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Soft Top-Left Spotlight Cone */}
      <div
        className="absolute -top-12 -left-12 w-[340px] h-[340px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(193,233,194,0.14) 0%, rgba(85,137,194,0.1) 45%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Main Vector Diamond Visual */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* STAGE 0: ROUGH STONE */}
        {isRough ? (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)] animate-pulse">
            <polygon
              points="22,30 38,18 68,22 84,38 78,74 54,88 26,78 16,50"
              fill="#0B121D"
              stroke="#5589C2"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            <polygon points="22,30 50,42 38,18" fill="#121C2E" fillOpacity="0.6" />
            <polygon points="38,18 50,42 68,22" fill="#04070C" fillOpacity="0.9" />
            <polygon points="68,22 50,42 84,38" fill="#1B3556" fillOpacity="0.5" />
            <polygon points="84,38 50,42 78,74" fill="#070B12" fillOpacity="0.95" />
            <polygon points="78,74 50,42 54,88" fill="#121C2E" fillOpacity="0.7" />
            <polygon points="54,88 50,42 26,78" fill="#04070C" fillOpacity="0.9" />
          </svg>
        ) : isCleave ? (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g transform="translate(-3, 0)">
              <polygon points="10,38 28,16 50,16 50,92 10,38" fill="#0B121D" stroke="#5589C2" strokeWidth="1.2" />
              <polygon points="28,16 50,16 38,38" fill="#5589C2" fillOpacity="0.5" />
              <polygon points="10,38 28,16 38,38" fill="#C1E9C2" fillOpacity="0.3" />
            </g>
            <line x1="50" y1="12" x2="50" y2="94" stroke="#FFFFFF" strokeWidth="2.5" className="animate-pulse" />
            <g transform="translate(3, 0)">
              <polygon points="50,16 72,16 90,38 50,92" fill="#070B12" stroke="#5589C2" strokeWidth="1.2" />
              <polygon points="50,16 72,16 62,38" fill="#1B3556" fillOpacity="0.8" />
              <polygon points="72,16 90,38 62,38" fill="#3F6EA3" fillOpacity="0.4" />
            </g>
          </svg>
        ) : (
          /* HIGH-CONTRAST EXPENSIVE MASTER FACET MAP (Patch Section 5) */
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
            <defs>
              {/* Crown Facet Gradients */}
              <linearGradient id="crownLeftKite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C5DAF0" />
                <stop offset="100%" stopColor="#5589C2" />
              </linearGradient>

              <linearGradient id="crownTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#C1E9C2" />
              </linearGradient>

              {/* Center Dark Contrast Triangle */}
              <linearGradient id="crownCenterDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B3556" />
                <stop offset="100%" stopColor="#5589C2" />
              </linearGradient>

              <linearGradient id="crownTopRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9DBFE3" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>

              <linearGradient id="crownRightKite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3F6EA3" />
                <stop offset="100%" stopColor="#1B3556" />
              </linearGradient>

              {/* Pavilion Facet Gradients */}
              <linearGradient id="pavilionLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5589C2" />
                <stop offset="100%" stopColor="#0B121D" />
              </linearGradient>

              <linearGradient id="pavilionCenterLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C1E9C2" />
                <stop offset="100%" stopColor="#3F6EA3" />
              </linearGradient>

              {/* Center Right Darkest Pavilion */}
              <linearGradient id="pavilionCenterRightDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B3556" />
                <stop offset="100%" stopColor="#070B12" />
              </linearGradient>

              <linearGradient id="pavilionRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3F6EA3" />
                <stop offset="100%" stopColor="#0B121D" />
              </linearGradient>

              {/* Table Top Surface Gradient */}
              <linearGradient id="gemTableLuxury" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#C1E9C2" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#9DBFE3" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1B3556" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Base Outline & Rim Light (offset 0.5px dispersion) */}
            <polygon
              points="10,38 28,16 72,16 90,38 50,92"
              fill="#000000"
              stroke="#5589C2"
              strokeWidth="0.75"
              strokeOpacity="0.9"
            />

            {/* Dispersion Fringe (Brand Green offset) */}
            <polygon
              points="9.6,38 27.6,15.6 72.4,15.6 90.4,38 50,92.4"
              fill="none"
              stroke="#C1E9C2"
              strokeWidth="0.4"
              strokeOpacity="0.5"
            />

            {/* Table Surface */}
            <polygon
              points="28,16 72,16 62,38 38,38"
              fill="url(#gemTableLuxury)"
              stroke="#FFFFFF"
              strokeWidth="0.6"
              strokeOpacity="0.8"
            />

            {/* Crown Facets (High Contrast) */}
            <polygon points="10,38 28,16 38,38" fill="url(#crownLeftKite)" stroke="#9DBFE3" strokeWidth="0.5" />
            <polygon points="28,16 50,16 38,38" fill="url(#crownTopLeft)" stroke="#FFFFFF" strokeWidth="0.5" />
            <polygon points="50,16 62,38 38,38" fill="url(#crownCenterDark)" stroke="#1B3556" strokeWidth="0.5" />
            <polygon points="50,16 72,16 62,38" fill="url(#crownTopRight)" stroke="#FFFFFF" strokeWidth="0.5" />
            <polygon points="72,16 90,38 62,38" fill="url(#crownRightKite)" stroke="#3F6EA3" strokeWidth="0.5" />

            {/* Girdle Dividing Line */}
            <line x1="10" y1="38" x2="90" y2="38" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.85" />

            {/* Pavilion Facets */}
            <polygon points="10,38 38,38 50,92" fill="url(#pavilionLeft)" stroke="#3F6EA3" strokeWidth="0.5" />
            <polygon points="38,38 50,38 50,92" fill="url(#pavilionCenterLeft)" stroke="#5589C2" strokeWidth="0.5" />
            <polygon points="50,38 62,38 50,92" fill="url(#pavilionCenterRightDark)" stroke="#1B3556" strokeWidth="0.5" />
            <polygon points="62,38 90,38 50,92" fill="url(#pavilionRight)" stroke="#3F6EA3" strokeWidth="0.5" />

            {/* Internal Reflection (Scaled Lower Facets at 20% opacity) */}
            <polygon
              points="38,38 50,56 62,38"
              fill="#FFFFFF"
              fillOpacity="0.16"
              stroke="#9DBFE3"
              strokeWidth="0.3"
            />

            {/* Three Master Specular Hot Spots (Patch Section 5) */}
            {/* Hot Spot 1: near (33, 22) */}
            <circle cx="33" cy="22" r="2.2" fill="#FFFFFF" filter="drop-shadow(0 0 3px #FFFFFF)" />
            {/* Hot Spot 2: near (44, 52) */}
            <circle cx="44" cy="52" r="1.6" fill="#FFFFFF" filter="drop-shadow(0 0 2px #C1E9C2)" />
            {/* Hot Spot 3: near (78, 40) */}
            <circle cx="78" cy="40" r="1.8" fill="#FFFFFF" filter="drop-shadow(0 0 2px #5589C2)" />

            {/* Right Edge Rim Light in Brand Blue */}
            <path d="M 72,16 L 90,38 L 50,92" fill="none" stroke="#5589C2" strokeWidth="1.2" strokeOpacity="0.8" />
          </svg>
        )}
      </div>

      {/* Ground Shadow & Mirrored Reflection Fading within 60px */}
      <div className="w-3/5 h-8 mt-1 relative flex items-center justify-center pointer-events-none">
        <div className="w-full h-3 rounded-full bg-black/90 blur-sm" />
        <div
          className="absolute top-1 w-2/3 h-5 opacity-15 ground-reflection"
          style={{
            background: 'linear-gradient(to bottom, #5589C2 0%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>
    </div>
  );
};
