import React, { useEffect, useRef, useState } from 'react';
import { gsap, parseNumberString, formatNumberWithParts } from '../lib/gsap';

interface AnimatedStatProps {
  value: string;
  label: string;
  highlight?: boolean;
  delayMs?: number;
  className?: string;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  label,
  highlight = false,
  delayMs = 0,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!cardRef.current || !numberRef.current) return;

    const ctx = gsap.context(() => {
      // Setup ScrollTrigger timeline for this metric card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          once: true,
        },
        delay: delayMs / 1000,
      });

      // 1. Card entry reveal
      tl.from(cardRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });

      // 2. Value animation
      // Case A: Multi-phase range string like "100K ➔ 16M"
      if (value.includes('➔')) {
        const parts = value.split('➔').map((s) => s.trim());
        const startVal = parts[0] || '100K';
        const endVal = parts[1] || '16M';

        tl.call(() => {
          setDisplayValue(startVal);
        })
          .to(
            {},
            {
              duration: 0.4,
              onComplete: () => {
                setDisplayValue(`${startVal} ➔ ${endVal}`);
                setIsCompleted(true);
              },
            }
          );
        return;
      }

      // Case B: Numerical values (e.g. "+16,000%", "30.2K", "3.6K", "4,088", "100%", "72", "486", "10")
      const parsed = parseNumberString(value);
      if (parsed) {
        const proxy = { val: 0 };
        tl.to(
          proxy,
          {
            val: parsed.targetNum,
            duration: 1.3,
            ease: 'power3.out',
            onUpdate: () => {
              setDisplayValue(formatNumberWithParts(proxy.val, parsed));
            },
            onComplete: () => {
              setDisplayValue(value);
              setIsCompleted(true);
            },
          },
          '-=0.3'
        );
      } else {
        // Case C: Non-standard / culture strings (e.g. "100s", "$RENT", "THE MOON", "31 OCT")
        let charIndex = 0;
        tl.to(
          {},
          {
            duration: 0.8,
            onUpdate: function () {
              const progress = this.progress();
              const targetLen = Math.floor(progress * value.length);
              if (targetLen !== charIndex) {
                charIndex = targetLen;
                setDisplayValue(value.slice(0, charIndex) || value[0] || '');
              }
            },
            onComplete: () => {
              setDisplayValue(value);
              setIsCompleted(true);
            },
          },
          '-=0.2'
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, [value, delayMs]);

  return (
    <div
      ref={cardRef}
      className={`p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-[#6FD8FF]/30 transition-all group ${className}`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span
          className={`w-1.5 h-1.5 rotate-45 transition-all duration-300 ${
            isCompleted
              ? 'bg-[#22C55E] shadow-[0_0_8px_#22C55E]'
              : 'bg-[#6FD8FF] opacity-75 group-hover:opacity-100'
          }`}
        />
        <span className="font-mono text-[9px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 px-2 py-0.5 rounded-full font-bold">
          VERIFIED
        </span>
      </div>

      <div
        className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight flex items-baseline transition-all duration-300 ${
          highlight ? 'gold-text' : 'text-[#F8FAFC]'
        } ${isCompleted ? 'drop-shadow-[0_0_12px_rgba(111,216,255,0.25)]' : ''}`}
      >
        <span ref={numberRef}>{displayValue}</span>
        {!isCompleted && (
          <span className="inline-block w-1.5 h-5 ml-1 bg-[#6FD8FF] animate-pulse" />
        )}
      </div>

      <div className="font-mono text-xs text-[#94A3B8] mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
};
