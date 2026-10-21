import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay
  yOffset?: number; // distance in px, default 28
  threshold?: number;
  scale?: number; // default 0.985
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 28,
  threshold = 0.08,
  scale = 0.985,
}) => {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If user prefers reduced motion or SSR, reveal immediately
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRevealed(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    // Check if element is already within viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal-item ${revealed ? 'is-revealed' : ''} ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? 'translateY(0) scale(1)'
          : `translateY(${yOffset}px) scale(${scale})`,
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: revealed ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
