/**
 * WorkCardStack — Contained sticky-stack scroll reveal
 *
 * How it works:
 *   • Cards are laid out in normal flow one after another.
 *   • Each card is `position: sticky` at the same top offset.
 *   • As you scroll, each card "slides up" from below the fold and
 *     layers on top of the previous one (via z-index).
 *   • No extra paddingBottom is added — the natural combined height of
 *     all cards provides the scroll room, so there's no dead/frozen zone.
 *   • The stack lives inside a max-width container so it never covers
 *     the full page width.
 *
 * IMPORTANT: Only put short, viewport-fitting cards in here (e.g. a
 * single ChapterSection). Long content should live below the stack in
 * normal document flow.
 */

import React, { useEffect, useRef } from 'react';

interface WorkCardStackProps {
  children: React.ReactNode[];
}

/** Distance from the viewport top where each card sticks (px).
 *  Should clear the fixed top navbar. */
const STICKY_TOP = 88;

export const WorkCardStack: React.FC<WorkCardStackProps> = ({ children }) => {
  const cards = React.Children.toArray(children);
  const total = cards.length;
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Dynamically fade out previous card as next incoming card reveals over it
  useEffect(() => {
    let ticking = false;

    const updateOpacities = () => {
      const vh = window.innerHeight;
      const isDesktop = window.innerWidth >= 768;

      for (let i = 0; i < total; i++) {
        const currentEl = cardRefs.current[i];
        if (!currentEl) continue;

        // The final card stays fully visible
        if (i === total - 1) {
          currentEl.style.opacity = '1';
          currentEl.style.pointerEvents = 'auto';
          continue;
        }

        const nextEl = cardRefs.current[i + 1];
        if (!nextEl) continue;

        const nextRect = nextEl.getBoundingClientRect();

        // On desktop, the next card climbs from the bottom up to STICKY_TOP (88px).
        // startFade: next card begins entering the lower viewport
        // endFade: next card has almost fully reached the sticky position
        const startFade = isDesktop ? Math.min(vh * 0.9, STICKY_TOP + 560) : vh * 0.85;
        const endFade = isDesktop ? STICKY_TOP + 80 : 120;

        let progress = (nextRect.top - endFade) / (startFade - endFade);
        progress = Math.max(0, Math.min(1, progress));

        // Fade gradually from 1.0 down to near-zero (0.04)
        const opacity = 0.04 + 0.96 * progress;

        currentEl.style.opacity = opacity.toFixed(3);
        currentEl.style.pointerEvents = opacity < 0.15 ? 'none' : 'auto';
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOpacities);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateOpacities();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [total]);

  return (
    /**
     * isolation: isolate keeps sticky z-indices inside this stacking
     * context and prevents cards from bleeding over unrelated sections.
     */
    <div style={{ isolation: 'isolate' }}>
      {cards.map((card, i) => {
        const isLast = i === total - 1;

        return (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`relative md:sticky ${isLast ? 'mb-0' : 'mb-8 sm:mb-12 md:mb-16'} transition-opacity duration-100 ease-out`}
            style={{
              top: `${STICKY_TOP}px`,
              zIndex: 10 + i,
              willChange: 'opacity',
            }}
          >
            {/* Metallic card surface */}
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10"
              style={{
                background: `linear-gradient(
                  160deg,
                  rgba(${22 + i * 2}, ${28 + i * 2}, ${44 + i * 3}, 0.97) 0%,
                  rgba(${12 + i * 1}, ${16 + i * 1}, ${26 + i * 2}, 0.99) 100%
                )`,
                boxShadow:
                  '0 8px 40px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.5)',
              }}
            >
              {/* Top drag handle — signals this is a scrollable stack */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                <span className="w-1 h-1 rounded-full bg-[#6FD8FF] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6FD8FF]/80">
                  {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>

              {/* Card content — no extra padding added here */}
              {card}
            </div>
          </div>
        );
      })}
    </div>
  );
};
