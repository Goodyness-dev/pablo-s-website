import React, { useEffect, useRef } from 'react';

export interface DiamondVoidBackgroundProps {
  motionPaused?: boolean;
}

interface DiamondConfig {
  id: string;
  src: string;
  alt: string;
  desktop: {
    left: string;
    top: string;
    width: number;
    opacity: number;
  };
  mobile?: {
    left: string;
    top: string;
    width: number;
    opacity: number;
  };
  depth: number;
  floatClass: string;
  className?: string;
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
    depth: 1.2,
    floatClass: 'animate-float-left',
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
    depth: 1.35,
    floatClass: 'animate-float-right',
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
    depth: 0.7,
    floatClass: 'animate-float-top',
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
    depth: 0.5,
    floatClass: 'animate-float-side',
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
    depth: 0.4,
    floatClass: 'animate-float-top',
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
    depth: 1.0,
    floatClass: 'animate-float-side',
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
    depth: 0.55,
    floatClass: 'animate-float-left',
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

  // Pointer parallax controller
  useEffect(() => {
    if (motionPaused) {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--pv-x', '0px');
        containerRef.current.style.setProperty('--pv-y', '0px');
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    const startLoop = () => {
      if (rafIdRef.current !== null) return;

      const update = () => {
        const target = targetRef.current;
        const current = currentRef.current;

        // Snappy, agile damping for rigorous responsiveness
        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;

        if (containerRef.current) {
          containerRef.current.style.setProperty('--pv-x', `${current.x.toFixed(1)}px`);
          containerRef.current.style.setProperty('--pv-y', `${current.y.toFixed(1)}px`);
        }

        // Stop loop when close to target
        if (
          Math.abs(target.x - current.x) < 0.02 &&
          Math.abs(target.y - current.y) < 0.02
        ) {
          current.x = target.x;
          current.y = target.y;
          if (containerRef.current) {
            containerRef.current.style.setProperty('--pv-x', `${current.x.toFixed(1)}px`);
            containerRef.current.style.setProperty('--pv-y', `${current.y.toFixed(1)}px`);
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
      const normX = (e.clientX - cx) / cx;
      const normY = (e.clientY - cy) / cy;

      // Rigorous 3D parallax excursion: max ~48px
      targetRef.current = {
        x: normX * 48,
        y: normY * 48,
      };

      startLoop();
    };

    const handlePointerLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      startLoop();
    };

    // Mobile touch interaction: vigorous response on swipe
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const normX = (touch.clientX - cx) / cx;
        const normY = (touch.clientY - cy) / cy;

        targetRef.current = {
          x: Math.max(-1, Math.min(1, normX)) * 45,
          y: Math.max(-1, Math.min(1, normY)) * 45,
        };

        startLoop();
      }
    };

    const handleTouchEnd = () => {
      targetRef.current = { x: 0, y: 0 };
      startLoop();
    };

    // Scroll parallax dynamic impulse: energetic surge on scroll
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let scrollTimeout: number | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Rigorous reaction to scroll velocity (surges up to ±55px)
      const clampedDelta = Math.max(-55, Math.min(55, deltaY * 0.65));
      targetRef.current = {
        x: targetRef.current.x,
        y: clampedDelta,
      };
      startLoop();

      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        targetRef.current = { x: targetRef.current.x, y: 0 };
        startLoop();
      }, 160);
    };

    // Device orientation tilt (gyroscope on mobile: rigorous ±36px range)
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const normX = Math.max(-1, Math.min(1, e.gamma / 22));
        const normY = Math.max(-1, Math.min(1, (e.beta - 45) / 22));
        targetRef.current = {
          x: normX * 36,
          y: normY * 36,
        };
        startLoop();
      }
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
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [motionPaused]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#000000]"
      style={{
        ['--pv-x' as string]: '0px',
        ['--pv-y' as string]: '0px',
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

          <linearGradient
            id="dvb-silver-curve-2"
            x1="100"
            y1="650"
            x2="1400"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F0F0E" stopOpacity="0" />
            <stop offset="35%" stopColor="#33332F" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#77776F" stopOpacity="0.5" />
            <stop offset="68%" stopColor="#F0EEE7" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#D5D3CC" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#33332F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0F0F0E" stopOpacity="0" />
          </linearGradient>

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

        <path
          d="M -60 380 C 80 160 140 40 240 60 C 360 85 580 260 880 320 C 1120 370 1340 330 1520 280"
          stroke="url(#dvb-silver-curve-1)"
          strokeWidth="1.1"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />

        <path
          d="M -30 520 C 260 560 520 720 840 640 C 1080 575 1300 420 1480 340"
          stroke="url(#dvb-silver-curve-2)"
          strokeWidth="1.0"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />

        <path
          d="M 120 220 C 440 280 820 380 1320 360"
          stroke="url(#dvb-silver-curve-3)"
          strokeWidth="0.75"
          strokeLinecap="round"
          style={{ vectorEffect: 'non-scaling-stroke' }}
        />
      </svg>

      {/* 3. Diamonds Layer with explicit floating classes */}
      <div className="diamond-floating-layer absolute inset-0 w-full h-full pointer-events-none">
        {DIAMOND_CONFIGS.map((diamond) => {
          const depthFactor = diamond.depth;

          return (
            <div
              key={diamond.id}
              className={`diamond-node-${diamond.id} absolute -translate-x-1/2 -translate-y-1/2 will-change-transform ${diamond.className || ''}`}
              style={{
                left: diamond.desktop.left,
                top: diamond.desktop.top,
              }}
            >
              {/* Parallax Wrapper */}
              <div
                className="will-change-transform"
                style={{
                  transform: `translate3d(calc(var(--pv-x, 0px) * ${depthFactor}), calc(var(--pv-y, 0px) * ${depthFactor}), 0)`,
                  transition: motionPaused ? 'transform 0.4s ease-out' : 'none',
                }}
              >
                {/* Float & Rotation Wrapper */}
                <div
                  className={`will-change-transform ${diamond.floatClass} ${motionPaused ? 'animation-paused' : ''}`}
                >
                  <img
                    src={diamond.src}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="select-none pointer-events-none max-w-none"
                    style={{
                      width: `${diamond.desktop.width}px`,
                      opacity: diamond.desktop.opacity,
                      filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9))',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          ${DIAMOND_CONFIGS.filter((d) => d.mobile)
            .map(
              (d) => `
            .diamond-node-${d.id} {
              left: ${d.mobile!.left} !important;
              top: ${d.mobile!.top} !important;
            }
            .diamond-node-${d.id} img {
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
