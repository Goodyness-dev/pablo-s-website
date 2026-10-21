import React, { useEffect, useRef, useState } from 'react';

export interface DiamondVoidBackgroundProps {
  motionPaused?: boolean;
}

interface DiamondConfig {
  id: string;
  src: string;
  alt: string;
  // Positioning in % of viewport
  desktop: {
    left: string;
    top: string;
    width: number; // in px
    opacity: number;
  };
  mobile?: {
    left: string;
    top: string;
    width: number;
    opacity: number;
  };
  // Interaction & Motion
  depth: number; // 0.2 (distant) to 1.0 (foreground)
  driftDuration: number; // seconds
  driftDelay: number; // negative seconds to offset phase
  driftRangeX: number; // px
  driftRangeY: number; // px
  rotateDuration: number; // seconds
  rotateDelay: number; // negative seconds
  rotateFrom: number; // degrees
  rotateTo: number; // degrees
  className?: string; // extra classes (e.g. hidden on mobile)
}

const DIAMOND_CONFIGS: DiamondConfig[] = [
  // 1. Main Left Diamond — sharp, prominent, lower-left anchor
  {
    id: 'main-left',
    src: '/assets/diamonds/diamond-main-left.png',
    alt: '',
    desktop: {
      left: '20%',
      top: '61%',
      width: 155,
      opacity: 0.96,
    },
    mobile: {
      left: '6%',
      top: '68%',
      width: 90,
      opacity: 0.9,
    },
    depth: 0.9,
    driftDuration: 28,
    driftDelay: -7,
    driftRangeX: 18,
    driftRangeY: 24,
    rotateDuration: 38,
    rotateDelay: -12,
    rotateFrom: -6,
    rotateTo: 4,
    className: 'block',
  },
  // 2. Main Right Diamond — sharp, prominent, right-middle anchor with facet glint
  {
    id: 'main-right',
    src: '/assets/diamonds/diamond-main-right.png',
    alt: '',
    desktop: {
      left: '73%',
      top: '46%',
      width: 175,
      opacity: 0.98,
    },
    mobile: {
      left: '78%',
      top: '36%',
      width: 95,
      opacity: 0.9,
    },
    depth: 1.0,
    driftDuration: 32,
    driftDelay: -15,
    driftRangeX: 22,
    driftRangeY: 28,
    rotateDuration: 44,
    rotateDelay: -5,
    rotateFrom: -4,
    rotateTo: 6,
    className: 'block',
  },
  // 3. Far Upper Diamond — dim, soft, provides vertical depth
  {
    id: 'far-upper',
    src: '/assets/diamonds/diamond-top.png',
    alt: '',
    desktop: {
      left: '34%',
      top: '20%',
      width: 54,
      opacity: 0.72,
    },
    mobile: {
      left: '74%',
      top: '16%',
      width: 36,
      opacity: 0.65,
    },
    depth: 0.45,
    driftDuration: 24,
    driftDelay: -19,
    driftRangeX: 12,
    driftRangeY: 16,
    rotateDuration: 34,
    rotateDelay: -21,
    rotateFrom: -5,
    rotateTo: 5,
    className: 'block',
  },
  // 4. Far Right Diamond — small and subtle
  {
    id: 'far-right',
    src: '/assets/diamonds/diamond-top.png',
    alt: '',
    desktop: {
      left: '92%',
      top: '32%',
      width: 38,
      opacity: 0.58,
    },
    depth: 0.3,
    driftDuration: 22,
    driftDelay: -9,
    driftRangeX: 8,
    driftRangeY: 12,
    rotateDuration: 30,
    rotateDelay: -14,
    rotateFrom: -3,
    rotateTo: 4,
    className: 'hidden md:block',
  },
  // 5. Far Center Diamond — very subtle in the deep background
  {
    id: 'far-center',
    src: '/assets/diamonds/diamond-soft-peripheral.png',
    alt: '',
    desktop: {
      left: '50%',
      top: '70%',
      width: 34,
      opacity: 0.5,
    },
    depth: 0.25,
    driftDuration: 30,
    driftDelay: -23,
    driftRangeX: 7,
    driftRangeY: 10,
    rotateDuration: 40,
    rotateDelay: -8,
    rotateFrom: -4,
    rotateTo: 3,
    className: 'hidden md:block',
  },
  // 6. Near Lower Right Diamond — soft, partly peripheral
  {
    id: 'near-lower-right',
    src: '/assets/diamonds/diamond-soft-peripheral.png',
    alt: '',
    desktop: {
      left: '93%',
      top: '76%',
      width: 86,
      opacity: 0.75,
    },
    depth: 0.7,
    driftDuration: 26,
    driftDelay: -11,
    driftRangeX: 16,
    driftRangeY: 20,
    rotateDuration: 36,
    rotateDelay: -17,
    rotateFrom: -6,
    rotateTo: 5,
    className: 'hidden lg:block',
  },
  // 7. Far Lower Left Diamond — soft and dim
  {
    id: 'far-lower-left',
    src: '/assets/diamonds/diamond-top.png',
    alt: '',
    desktop: {
      left: '11%',
      top: '86%',
      width: 48,
      opacity: 0.55,
    },
    depth: 0.35,
    driftDuration: 25,
    driftDelay: -16,
    driftRangeX: 9,
    driftRangeY: 13,
    rotateDuration: 32,
    rotateDelay: -4,
    rotateFrom: -4,
    rotateTo: 4,
    className: 'hidden md:block',
  },
];

export const DiamondVoidBackground: React.FC<DiamondVoidBackgroundProps> = ({
  motionPaused = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Track prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Pointer parallax controller
  useEffect(() => {
    if (reducedMotion || motionPaused) {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--pv-x', '0');
        containerRef.current.style.setProperty('--pv-y', '0');
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return;

    const startLoop = () => {
      if (rafIdRef.current !== null) return;

      const update = () => {
        const target = targetRef.current;
        const current = currentRef.current;

        // Smooth asymptotic damping
        current.x += (target.x - current.x) * 0.055;
        current.y += (target.y - current.y) * 0.055;

        if (containerRef.current) {
          containerRef.current.style.setProperty('--pv-x', current.x.toFixed(2));
          containerRef.current.style.setProperty('--pv-y', current.y.toFixed(2));
        }

        // Stop loop when close to target
        if (
          Math.abs(target.x - current.x) < 0.015 &&
          Math.abs(target.y - current.y) < 0.015
        ) {
          current.x = target.x;
          current.y = target.y;
          if (containerRef.current) {
            containerRef.current.style.setProperty('--pv-x', current.x.toFixed(2));
            containerRef.current.style.setProperty('--pv-y', current.y.toFixed(2));
          }
          rafIdRef.current = null;
          return;
        }

        rafIdRef.current = requestAnimationFrame(update);
      };

      rafIdRef.current = requestAnimationFrame(update);
    };

    const handlePointerMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const normX = (e.clientX - cx) / cx; // -1 to 1
      const normY = (e.clientY - cy) / cy; // -1 to 1

      // Subtle parallax excursion: max ~16px
      targetRef.current = {
        x: normX * 16,
        y: normY * 16,
      };

      startLoop();
    };

    const handlePointerLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      startLoop();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
      } else {
        startLoop();
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [reducedMotion, motionPaused]);

  const isMotionActive = !reducedMotion && !motionPaused;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#000000]"
      style={{
        // Default CSS variables for pointer parallax
        ['--pv-x' as string]: '0',
        ['--pv-y' as string]: '0',
      }}
    >
      {/* 1. Deep Void Ambient Base: Pure Midnight Void (#000000) with faint radial depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 65% 45%, rgba(18, 23, 38, 0.45) 0%, rgba(0, 0, 0, 0.95) 70%, #000000 100%)',
        }}
      />

      {/* 2. Thin Silver Curves (Restrained, elegant SVG sweeps matching reference) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Curve 1 Highlight Gradient: Silver apex highlight fading into dark void */}
          <linearGradient
            id="dvb-silver-curve-1"
            x1="120"
            y1="50"
            x2="1100"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1A2030" stopOpacity="0" />
            <stop offset="10%" stopColor="#94A3B8" stopOpacity="0.4" />
            <stop offset="18%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#D5DFEB" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#475569" stopOpacity="0.25" />
            <stop offset="75%" stopColor="#1E293B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </linearGradient>

          {/* Curve 2 Highlight Gradient: Sweeps along the lower loop */}
          <linearGradient
            id="dvb-silver-curve-2"
            x1="100"
            y1="650"
            x2="1400"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0" />
            <stop offset="35%" stopColor="#475569" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#D5DFEB" stopOpacity="0.5" />
            <stop offset="68%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#BDE7FF" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#334155" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </linearGradient>

          {/* Curve 3 Whisper Gradient: Deep background curve */}
          <linearGradient
            id="dvb-silver-curve-3"
            x1="200"
            y1="250"
            x2="1300"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#334155" stopOpacity="0" />
            <stop offset="40%" stopColor="#64748B" stopOpacity="0.2" />
            <stop offset="65%" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Upper swooping curve with apex loop over top-left */}
        <path
          d="M -60 380 C 80 160 140 40 240 60 C 360 85 580 260 880 320 C 1120 370 1340 330 1520 280"
          stroke="url(#dvb-silver-curve-1)"
          strokeWidth="1.1"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />

        {/* Lower dynamic swooping curve */}
        <path
          d="M -30 520 C 260 560 520 720 840 640 C 1080 575 1300 420 1480 340"
          stroke="url(#dvb-silver-curve-2)"
          strokeWidth="1.0"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />

        {/* Whisper curve in deep space */}
        <path
          d="M 120 220 C 440 280 820 380 1320 360"
          stroke="url(#dvb-silver-curve-3)"
          strokeWidth="0.75"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />
      </svg>

      {/* 3. Diamonds Composition Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {DIAMOND_CONFIGS.map((diamond) => {
          const depthFactor = diamond.depth;

          return (
            <div
              key={diamond.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 will-change-transform ${diamond.className || ''}`}
              style={{
                left: diamond.desktop.left,
                top: diamond.desktop.top,
              }}
            >
              {/* Parallax Wrapper: translated by mouse offset proportional to depth */}
              <div
                className="will-change-transform"
                style={{
                  transform: `translate3d(calc(var(--pv-x, 0) * ${depthFactor} * 1px), calc(var(--pv-y, 0) * ${depthFactor} * 1px), 0)`,
                  transition: isMotionActive ? 'none' : 'transform 0.4s ease-out',
                }}
              >
                {/* Float Wrapper: Autonomous CSS drift */}
                <div
                  className="will-change-transform"
                  style={{
                    animationName: isMotionActive ? `dvbDrift_${diamond.id}` : 'none',
                    animationDuration: `${diamond.driftDuration}s`,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDirection: 'alternate',
                    animationDelay: `${diamond.driftDelay}s`,
                  }}
                >
                  {/* Diamond Image: In-plane rotation + facet appearance */}
                  <img
                    src={diamond.src}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="select-none pointer-events-none max-w-none transition-opacity duration-700"
                    style={{
                      width: `${diamond.desktop.width}px`,
                      opacity: diamond.desktop.opacity,
                      animationName: isMotionActive ? `dvbRotate_${diamond.id}` : 'none',
                      animationDuration: `${diamond.rotateDuration}s`,
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDirection: 'alternate',
                      animationDelay: `${diamond.rotateDelay}s`,
                      filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9))',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded Scoped Keyframes for Deterministic Floating & Rotation */}
      <style>{`
        ${DIAMOND_CONFIGS.map(
          (d) => `
          @keyframes dvbDrift_${d.id} {
            0% {
              transform: translate3d(-${(d.driftRangeX / 2).toFixed(1)}px, -${(d.driftRangeY / 2).toFixed(1)}px, 0);
            }
            50% {
              transform: translate3d(${(d.driftRangeX / 3).toFixed(1)}px, ${(d.driftRangeY / 2.5).toFixed(1)}px, 0);
            }
            100% {
              transform: translate3d(${(d.driftRangeX / 2).toFixed(1)}px, ${(d.driftRangeY / 2).toFixed(1)}px, 0);
            }
          }
          @keyframes dvbRotate_${d.id} {
            0% {
              transform: rotate(${d.rotateFrom}deg);
            }
            100% {
              transform: rotate(${d.rotateTo}deg);
            }
          }
        `
        ).join('\n')}

        @media (max-width: 768px) {
          ${DIAMOND_CONFIGS.filter((d) => d.mobile)
            .map(
              (d) => `
            [style*="left: ${d.desktop.left}"][style*="top: ${d.desktop.top}"] {
              left: ${d.mobile!.left} !important;
              top: ${d.mobile!.top} !important;
            }
            [style*="left: ${d.desktop.left}"][style*="top: ${d.desktop.top}"] img {
              width: ${d.mobile!.width}px !important;
              opacity: ${d.mobile!.opacity} !important;
            }
          `
            )
            .join('\n')}
        }
      `}</style>
    </div>
  );
};
