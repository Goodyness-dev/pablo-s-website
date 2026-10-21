import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  value: string;
  label: string;
  highlight?: boolean;
  delayMs?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  label,
  highlight = false,
  delayMs = 0,
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => {
            // Typewriter / Counting animation
            const duration = 1200; // ms
            const startTime = performance.now();

            // Extract numeric part vs non-numeric
            const match = value.match(/([+\-$]?)([\d.]+)([KkMm%+]?)/);
            if (!match) {
              // Fallback typewriter string
              let charIndex = 0;
              const interval = setInterval(() => {
                charIndex++;
                setDisplayValue(value.slice(0, charIndex));
                if (charIndex >= value.length) {
                  clearInterval(interval);
                  setIsTyping(false);
                }
              }, 60);
              return;
            }

            const prefix = match[1] || '';
            const targetNum = parseFloat(match[2]);
            const suffix = match[3] || '';
            const decimals = match[2].includes('.') ? match[2].split('.')[1].length : 0;

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out expo
              const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentNum = (targetNum * ease).toFixed(decimals);

              setDisplayValue(`${prefix}${currentNum}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
                setIsTyping(false);
              }
            };

            requestAnimationFrame(animate);
          }, delayMs);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value, delayMs]);

  return (
    <div
      ref={containerRef}
      className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-[#6FD8FF]/30 transition-all group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF] opacity-75 group-hover:opacity-100 transition-opacity" />
        <span className="font-mono text-[9px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 px-2 py-0.5 rounded-full font-bold">
          VERIFIED
        </span>
      </div>

      <div
        className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight flex items-baseline ${
          highlight ? 'gold-text' : 'text-[#F8FAFC]'
        }`}
      >
        <span>{displayValue}</span>
        {isTyping && (
          <span className="inline-block w-1.5 h-5 ml-1 bg-[#6FD8FF] animate-pulse" />
        )}
      </div>

      <div className="font-mono text-xs text-[#94A3B8] mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
};
