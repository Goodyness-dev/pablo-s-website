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

import React from 'react';

interface WorkCardStackProps {
  children: React.ReactNode[];
}

/** Distance from the viewport top where each card sticks (px).
 *  Should clear the fixed top navbar. */
const STICKY_TOP = 88;

export const WorkCardStack: React.FC<WorkCardStackProps> = ({ children }) => {
  const cards = React.Children.toArray(children);
  const total = cards.length;

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
            style={{
              position: 'sticky',
              top: `${STICKY_TOP}px`,
              zIndex: 10 + i,
              // Small bottom margin so the next card's top-edge peeks out
              // below the current sticky card — gives the "deck of cards" hint
              marginBottom: isLast ? 0 : 12,
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
