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
  size = 320,
  interactive = true,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized cursor tilt (-12deg to +12deg)
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setTilt({
        x: -dy * 12,
        y: dx * 12,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Stage-specific visual parameters
  const isRough = stage === 0;
  const isCleave = stage === 1;
  const isFacet = stage === 2;
  const isPolish = stage === 3;
  const isBrilliant = stage === 4;
  const isSet = stage === 5;
  const isChain = stage === 6;

  return (
    <div
      className={`relative select-none flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      style={{
        width: size,
        height: size,
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Void Glow Radial Backdrop */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: isBrilliant || isSet || isChain
            ? 'radial-gradient(circle, rgba(111,216,255,0.22) 0%, rgba(155,124,255,0.12) 40%, rgba(5,6,10,0) 70%)'
            : isPolish
            ? 'radial-gradient(circle, rgba(47,168,230,0.18) 0%, rgba(5,6,10,0) 65%)'
            : 'radial-gradient(circle, rgba(14,18,38,0.45) 0%, rgba(5,6,10,0) 60%)',
          filter: 'blur(32px)',
          transform: 'scale(1.2)',
        }}
      />

      {/* STAGE 0: ROUGH STONE */}
      {isRough && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_12px_28px_rgba(5,6,10,0.8)] animate-pulse"
          style={{ animationDuration: '4s' }}
        >
          <polygon
            points="22,30 38,18 68,22 84,38 78,74 54,88 26,78 16,50"
            fill="#0E1226"
            stroke="#2FA8E6"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <polygon points="22,30 50,42 38,18" fill="#161B36" fillOpacity="0.6" />
          <polygon points="38,18 50,42 68,22" fill="#0E1226" fillOpacity="0.8" />
          <polygon points="68,22 50,42 84,38" fill="#161B36" fillOpacity="0.5" />
          <polygon points="84,38 50,42 78,74" fill="#0E1226" fillOpacity="0.9" />
          <polygon points="78,74 50,42 54,88" fill="#161B36" fillOpacity="0.7" />
          <polygon points="54,88 50,42 26,78" fill="#0B0E1A" fillOpacity="0.9" />
          <polygon points="26,78 50,42 16,50" fill="#161B36" fillOpacity="0.5" />
          <polygon points="16,50 50,42 22,30" fill="#0E1226" fillOpacity="0.8" />
        </svg>
      )}

      {/* STAGE 1: CLEAVE (Split Seam) */}
      {isCleave && (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Left Cleaved Half */}
          <g transform="translate(-3, 0)">
            <polygon
              points="10,38 28,16 50,16 50,92 10,38"
              fill="#0E1226"
              stroke="#6FD8FF"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            <polygon points="28,16 50,16 38,38" fill="#2FA8E6" fillOpacity="0.4" />
            <polygon points="10,38 28,16 38,38" fill="#BDE7FF" fillOpacity="0.25" />
            <polygon points="10,38 38,38 50,92" fill="#0E1226" fillOpacity="0.8" />
          </g>
          {/* Glowing Laser Cleave Seam */}
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="95"
            stroke="#6FD8FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
          {/* Right Cleaved Half */}
          <g transform="translate(3, 0)">
            <polygon
              points="50,16 72,16 90,38 50,92"
              fill="#0E1226"
              stroke="#6FD8FF"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            <polygon points="50,16 72,16 62,38" fill="#2FA8E6" fillOpacity="0.3" />
            <polygon points="72,16 90,38 62,38" fill="#BDE7FF" fillOpacity="0.2" />
            <polygon points="62,38 90,38 50,92" fill="#0B0E1A" fillOpacity="0.8" />
          </g>
        </svg>
      )}

      {/* STAGES 2 to 6: MASTER BRILLIANT GEM GEOMETRY */}
      {!isRough && !isCleave && (
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            {/* Table Sheen Gradient */}
            <linearGradient id="gemTable" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={isFacet ? 0.2 : 0.95} />
              <stop offset="60%" stopColor="#BDE7FF" stopOpacity={isFacet ? 0.15 : 0.85} />
              <stop offset="100%" stopColor="#6FD8FF" stopOpacity={isFacet ? 0.1 : 0.7} />
            </linearGradient>

            {/* Facet Gradients */}
            <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4FBFF" stopOpacity={isFacet ? 0.2 : 0.8} />
              <stop offset="100%" stopColor="#BDE7FF" stopOpacity={isFacet ? 0.1 : 0.5} />
            </linearGradient>

            <linearGradient id="facetMidLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8FD3FF" stopOpacity={isFacet ? 0.15 : 0.75} />
              <stop offset="100%" stopColor="#6FB6F2" stopOpacity={isFacet ? 0.1 : 0.6} />
            </linearGradient>

            <linearGradient id="facetMidRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6FB6F2" stopOpacity={isFacet ? 0.15 : 0.65} />
              <stop offset="100%" stopColor="#4C9BE0" stopOpacity={isFacet ? 0.1 : 0.5} />
            </linearGradient>

            <linearGradient id="facetRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C9BE0" stopOpacity={isFacet ? 0.15 : 0.55} />
              <stop offset="100%" stopColor="#2FA8E6" stopOpacity={isFacet ? 0.1 : 0.4} />
            </linearGradient>

            {/* Pavilion Gradients */}
            <linearGradient id="pavilionLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6FD8FF" stopOpacity={isFacet ? 0.1 : 0.7} />
              <stop offset="100%" stopColor="#2FA8E6" stopOpacity={isFacet ? 0.05 : 0.85} />
            </linearGradient>

            <linearGradient id="pavilionCenter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2FA8E6" stopOpacity={isFacet ? 0.15 : 0.85} />
              <stop offset="100%" stopColor="#1B5FAE" stopOpacity={isFacet ? 0.1 : 0.95} />
            </linearGradient>

            <linearGradient id="pavilionRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14478A" stopOpacity={isFacet ? 0.1 : 0.85} />
              <stop offset="100%" stopColor="#0E1226" stopOpacity={isFacet ? 0.2 : 0.95} />
            </linearGradient>

            {/* Gold Setting Gradient */}
            <linearGradient id="goldSetting" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE49A" />
              <stop offset="50%" stopColor="#F2C14E" />
              <stop offset="100%" stopColor="#B8862B" />
            </linearGradient>
          </defs>

          {/* Master Diamond Geometry Base */}
          <polygon
            points="10,38 28,16 72,16 90,38 50,92"
            fill="#07080C"
            stroke={isFacet ? '#BDE7FF' : '#F4FBFF'}
            strokeWidth={isFacet ? '1.5' : '1'}
            strokeOpacity={isFacet ? 0.6 : 0.8}
          />

          {/* Table (Top central polygon) */}
          <polygon
            points="28,16 72,16 62,38 38,38"
            fill="url(#gemTable)"
            stroke="#F4FBFF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.7 : 0.9}
          />

          {/* Crown Facets */}
          <polygon
            points="10,38 28,16 38,38"
            fill="url(#facetLeft)"
            stroke="#BDE7FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.7 : 0.6}
          />
          <polygon
            points="28,16 50,16 38,38"
            fill="url(#facetMidLeft)"
            stroke="#BDE7FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.7 : 0.6}
          />
          <polygon
            points="50,16 72,16 62,38"
            fill="url(#facetMidRight)"
            stroke="#BDE7FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.7 : 0.6}
          />
          <polygon
            points="72,16 90,38 62,38"
            fill="url(#facetRight)"
            stroke="#BDE7FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.7 : 0.6}
          />

          {/* Girdle Dividing Line */}
          <line
            x1="10"
            y1="38"
            x2="90"
            y2="38"
            stroke="#F4FBFF"
            strokeWidth="1.2"
            strokeOpacity={isFacet ? 0.7 : 0.85}
          />

          {/* Pavilion Facets */}
          <polygon
            points="10,38 38,38 50,92"
            fill="url(#pavilionLeft)"
            stroke="#6FD8FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.6 : 0.5}
          />
          <polygon
            points="38,38 50,38 50,92"
            fill="url(#pavilionCenter)"
            stroke="#6FD8FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.6 : 0.5}
          />
          <polygon
            points="50,38 62,38 50,92"
            fill="url(#pavilionCenter)"
            stroke="#6FD8FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.6 : 0.5}
          />
          <polygon
            points="62,38 90,38 50,92"
            fill="url(#pavilionRight)"
            stroke="#6FD8FF"
            strokeWidth="0.8"
            strokeOpacity={isFacet ? 0.6 : 0.5}
          />

          {/* STAGE 3: POLISH (Heartbeat specular gleam) */}
          {isPolish && (
            <circle
              cx="50"
              cy="38"
              r="24"
              fill="url(#gemTable)"
              opacity="0.3"
              className="animate-pulse"
            />
          )}

          {/* STAGE 5 & 6: GOLD PRONGS & SETTING */}
          {(isSet || isChain) && (
            <g className="transition-all duration-700">
              {/* Four Gold Prongs */}
              <circle cx="10" cy="38" r="3.5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              <circle cx="28" cy="16" r="3.5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              <circle cx="72" cy="16" r="3.5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              <circle cx="90" cy="38" r="3.5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              <circle cx="50" cy="92" r="3.5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              
              {/* Lower Gold Mounting Band */}
              <path
                d="M 20,44 Q 50,70 80,44"
                fill="none"
                stroke="url(#goldSetting)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Mini Gold F Coin Emblem */}
              <circle cx="50" cy="58" r="5" fill="url(#goldSetting)" stroke="#05060A" strokeWidth="0.8" />
              <text
                x="50"
                y="61"
                textAnchor="middle"
                fontSize="6"
                fontWeight="bold"
                fill="#05060A"
                fontFamily="sans-serif"
              >
                F
              </text>
            </g>
          )}

          {/* STAGE 6: CHAIN LINKS */}
          {isChain && (
            <g className="transition-all duration-500">
              <line x1="50" y1="16" x2="50" y2="2" stroke="url(#goldSetting)" strokeWidth="2" strokeDasharray="3,2" />
              <circle cx="50" cy="2" r="3" fill="url(#goldSetting)" />
            </g>
          )}
        </svg>
      )}

      {/* STAGE 4: BRILLIANT (Four-point star sparkles & light burst) */}
      {(isBrilliant || isSet || isChain) && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-Right Sparkle */}
          <div className="absolute -top-3 -right-3 animate-pulse" style={{ animationDuration: '1.8s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#F4FBFF" />
            </svg>
          </div>
          {/* Bottom-Left Sparkle */}
          <div className="absolute -bottom-2 -left-2 animate-pulse" style={{ animationDuration: '2.4s', animationDelay: '0.6s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#BDE7FF" />
            </svg>
          </div>
          {/* Top-Left Prism Sparkle */}
          <div className="absolute top-1/4 -left-4 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.1s' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#FF7AD9" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
