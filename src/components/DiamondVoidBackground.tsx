import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export interface DiamondVoidBackgroundProps {
  motionPaused?: boolean;
}

interface DiamondLayer {
  id: string;
  src: string;
  leftDesktop: string;
  topDesktop: string;
  widthDesktop: number;
  opacityDesktop: number;
  leftMobile?: string;
  topMobile?: string;
  widthMobile?: number;
  opacityMobile?: number;
  isMobileVisible: boolean;
  depth: number;
  driftX: number;
  driftY: number;
  rotation: number;
  duration: number;
  delay: number;
}

const DIAMOND_LAYERS: DiamondLayer[] = [
  // 1. Main Left Diamond
  {
    id: 'diamond-layer-1',
    src: '/assets/diamonds/diamond-1-main-left.png',
    leftDesktop: '21%',
    topDesktop: '61%',
    widthDesktop: 155,
    opacityDesktop: 0.98,
    leftMobile: '7%',
    topMobile: '68%',
    widthMobile: 90,
    opacityMobile: 0.92,
    isMobileVisible: true,
    depth: 0.9,
    driftX: 18,
    driftY: -24,
    rotation: 6,
    duration: 7.2,
    delay: 0,
  },
  // 2. Main Right Diamond
  {
    id: 'diamond-layer-2',
    src: '/assets/diamonds/diamond-2-main-right.png',
    leftDesktop: '72%',
    topDesktop: '46%',
    widthDesktop: 175,
    opacityDesktop: 0.98,
    leftMobile: '80%',
    topMobile: '36%',
    widthMobile: 95,
    opacityMobile: 0.92,
    isMobileVisible: true,
    depth: 1.0,
    driftX: -22,
    driftY: 26,
    rotation: -5,
    duration: 8.4,
    delay: 1.2,
  },
  // 3. Far Upper Diamond
  {
    id: 'diamond-layer-3',
    src: '/assets/diamonds/diamond-3-far-upper.png',
    leftDesktop: '34%',
    topDesktop: '20%',
    widthDesktop: 56,
    opacityDesktop: 0.75,
    leftMobile: '74%',
    topMobile: '16%',
    widthMobile: 38,
    opacityMobile: 0.7,
    isMobileVisible: true,
    depth: 0.45,
    driftX: 12,
    driftY: -16,
    rotation: 4,
    duration: 6.0,
    delay: 2.1,
  },
  // 4. Far Right Diamond
  {
    id: 'diamond-layer-4',
    src: '/assets/diamonds/diamond-4-far-right.png',
    leftDesktop: '92%',
    topDesktop: '32%',
    widthDesktop: 42,
    opacityDesktop: 0.65,
    isMobileVisible: false,
    depth: 0.3,
    driftX: -10,
    driftY: 14,
    rotation: -4,
    duration: 6.8,
    delay: 0.8,
  },
  // 5. Center Tiny Diamond
  {
    id: 'diamond-layer-5',
    src: '/assets/diamonds/diamond-5-center-tiny.png',
    leftDesktop: '50%',
    topDesktop: '70%',
    widthDesktop: 36,
    opacityDesktop: 0.55,
    isMobileVisible: false,
    depth: 0.25,
    driftX: 8,
    driftY: -10,
    rotation: 3,
    duration: 7.5,
    delay: 3.0,
  },
  // 6. Lower Right Diamond
  {
    id: 'diamond-layer-6',
    src: '/assets/diamonds/diamond-6-lower-right.png',
    leftDesktop: '94%',
    topDesktop: '76%',
    widthDesktop: 88,
    opacityDesktop: 0.8,
    isMobileVisible: false,
    depth: 0.7,
    driftX: -16,
    driftY: -20,
    rotation: 5,
    duration: 8.0,
    delay: 1.5,
  },
  // 7. Lower Left Diamond
  {
    id: 'diamond-layer-7',
    src: '/assets/diamonds/diamond-7-lower-left.png',
    leftDesktop: '11%',
    topDesktop: '86%',
    widthDesktop: 52,
    opacityDesktop: 0.6,
    isMobileVisible: false,
    depth: 0.35,
    driftX: 10,
    driftY: 14,
    rotation: -4,
    duration: 6.4,
    delay: 2.5,
  },
];

export const DiamondVoidBackground: React.FC<DiamondVoidBackgroundProps> = ({
  motionPaused = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Listen to prefers-reduced-motion changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // GSAP floating animations for separate diamond layers
  useEffect(() => {
    if (reducedMotion) return;

    tweensRef.current.forEach((t) => t.kill());
    tweensRef.current = [];

    DIAMOND_LAYERS.forEach((d) => {
      const el = document.getElementById(`${d.id}-float`);
      if (!el) return;

      const tween = gsap.to(el, {
        x: d.driftX,
        y: d.driftY,
        rotation: d.rotation,
        duration: d.duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: d.delay,
        paused: motionPaused,
      });

      tweensRef.current.push(tween);
    });

    // Page Visibility API lifecycle
    const handleVisibility = () => {
      if (document.hidden) {
        tweensRef.current.forEach((t) => t.pause());
      } else if (!motionPaused) {
        tweensRef.current.forEach((t) => t.resume());
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      tweensRef.current.forEach((t) => t.kill());
      tweensRef.current = [];
    };
  }, [reducedMotion]);

  // Sync motionPaused state with GSAP tweens
  useEffect(() => {
    if (motionPaused) {
      tweensRef.current.forEach((t) => t.pause());
    } else {
      tweensRef.current.forEach((t) => t.resume());
    }
  }, [motionPaused]);

  // Smooth pointer parallax with GSAP
  useEffect(() => {
    if (reducedMotion || motionPaused) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const normX = (e.clientX - cx) / cx;
      const normY = (e.clientY - cy) / cy;

      DIAMOND_LAYERS.forEach((d) => {
        const wrapper = document.getElementById(`${d.id}-parallax`);
        if (wrapper) {
          gsap.to(wrapper, {
            x: normX * d.depth * 22,
            y: normY * d.depth * 22,
            duration: 1.2,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      DIAMOND_LAYERS.forEach((d) => {
        const wrapper = document.getElementById(`${d.id}-parallax`);
        if (wrapper) {
          gsap.to(wrapper, {
            x: 0,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('blur', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('blur', handleMouseLeave);
    };
  }, [reducedMotion, motionPaused]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#000000]"
    >
      {/* 1. Clean void background retaining authentic black space and silver curves (all diamonds removed underneath) */}
      <img
        src="/assets/diamonds/void-curves-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-90"
      />

      {/* 2. Separate Animated Diamond Layers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {DIAMOND_LAYERS.map((diamond) => {
          return (
            <div
              key={diamond.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 will-change-transform ${
                diamond.isMobileVisible ? 'block' : 'hidden md:block'
              }`}
              style={{
                left: diamond.leftDesktop,
                top: diamond.topDesktop,
              }}
            >
              {/* Parallax Wrapper */}
              <div
                id={`${diamond.id}-parallax`}
                className="will-change-transform"
              >
                {/* Float & Rotation Wrapper controlled by GSAP */}
                <div
                  id={`${diamond.id}-float`}
                  className="will-change-transform"
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
                      width: `${diamond.widthDesktop}px`,
                      opacity: diamond.opacityDesktop,
                      filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.9))',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile composition styling */}
      <style>{`
        @media (max-width: 768px) {
          ${DIAMOND_LAYERS.filter((d) => d.isMobileVisible && d.leftMobile)
            .map(
              (d) => `
            [style*="left: ${d.leftDesktop}"][style*="top: ${d.topDesktop}"] {
              left: ${d.leftMobile} !important;
              top: ${d.topMobile} !important;
            }
            [style*="left: ${d.leftDesktop}"][style*="top: ${d.topDesktop}"] img {
              width: ${d.widthMobile}px !important;
              opacity: ${d.opacityMobile} !important;
            }
          `
            )
            .join('\n')}
        }
      `}</style>
    </div>
  );
};
