import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay
  yOffset?: number; // distance in px, default 24
  scale?: number; // default 0.985
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  scale = 0.985,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        {
          opacity: 0,
          y: yOffset,
          scale: scale,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          delay: delay / 1000,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, yOffset, scale]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
