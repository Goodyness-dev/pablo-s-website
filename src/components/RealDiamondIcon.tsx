import React from 'react';

interface RealDiamondIconProps {
  size?: number;
  className?: string;
  glow?: boolean;
  pulse?: boolean;
  variant?: 'single' | 'cluster' | 'macro';
}

export const RealDiamondIcon: React.FC<RealDiamondIconProps> = ({
  size = 16,
  className = '',
  glow = true,
  pulse = false,
  variant = 'single',
}) => {
  const imgSrc =
    variant === 'cluster'
      ? '/assets/expensive-diamond.png'
      : variant === 'macro'
      ? '/assets/diamond-cut-1.jpg'
      : '/assets/diamond-icon.jpg';

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 select-none relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Luminous Ambient Diamond Caustic Glow */}
      {glow && (
        <span
          className={`absolute inset-0 rounded-full bg-[#6FD8FF]/30 blur-[4px] pointer-events-none ${
            pulse ? 'animate-ping' : ''
          }`}
          style={{ transform: 'scale(1.4)' }}
        />
      )}

      {/* Real Diamond Image Framed with Subtle Jewel Rim */}
      <span
        className={`relative w-full h-full rounded-sm overflow-hidden flex items-center justify-center ${
          pulse ? 'animate-pulse' : ''
        }`}
        style={{
          boxShadow: glow ? '0 0 8px rgba(111,216,255,0.45)' : 'none',
        }}
      >
        <img
          src={imgSrc}
          alt="Real Diamond"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
          style={{
            objectPosition: variant === 'single' ? '50% 36%' : 'center center',
            transform: variant === 'single' ? 'scale(2.1)' : 'scale(1.1)',
            filter: 'contrast(1.15) brightness(1.1)',
            mixBlendMode: 'screen',
          }}
          loading="lazy"
        />
      </span>
    </span>
  );
};
