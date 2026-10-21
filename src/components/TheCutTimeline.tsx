import React from 'react';

interface TimelineEvent {
  num: string;
  date: string;
  title: string;
  lead: string;
  receiptText: string;
  image: string;
}

const EVENTS: TimelineEvent[] = [
  {
    num: '01',
    date: '29 MAR 2025',
    title: 'The Trenches',
    lead: 'Started as Web 3 gains. 17 subscribers, one wallet, zero fear. First snipe hit a quick 3x.',
    receiptText: '17 Subscribers · First 3x Snipe',
    image: '/assets/avatar-origin.jpg',
  },
  {
    num: '02',
    date: 'APRIL 2025',
    title: 'Pleased Devs',
    lead: 'Pivoted to community raids and dev satisfaction. TLC raid manager record set.',
    receiptText: 'TLC 13-min raid leaderboard entry',
    image: '/assets/tlc-raid.jpg',
  },
  {
    num: '03',
    date: '14 OCT 2025',
    title: 'The Fundraiser',
    lead: 'Official rebrand to THE FUNDRAISER SHOW. The circular face logo and brand standard locked.',
    receiptText: 'Face Mark & Brand Identity Born',
    image: '/assets/logo-face.jpg',
  },
  {
    num: '04',
    date: 'JAN 2026',
    title: 'The Comeback',
    lead: 'Wallet got drained. Drive did not. Rebounded with 2x launch, WISH 7.7x to 503K ATH, family hit 60.',
    receiptText: 'WISH 7.7x Multiple to 503.0K ATH',
    image: '/assets/pnl-wish-7x.jpg',
  },
];

export const TheCutTimeline: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 relative bg-[#000000]">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] font-black text-transparent [-webkit-text-stroke:1px_rgba(85,137,194,0.05)] pointer-events-none select-none">
        THE CUT
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[620px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B121D] border border-[#5589C2]/40 text-[#5589C2] font-mono text-xs uppercase tracking-wider mb-3">
            <span>ORIGIN TIMELINE · 2025 — 2026</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white headline-shadow mb-3">
            The Cut.
          </h2>
          <p className="font-body text-[#C5DAF0] text-sm sm:text-base">
            How a rough stone in the trenches was cleaved, faceted, and polished under pressure.
          </p>
        </div>

        {/* 4-Column Compact Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENTS.map((event) => (
            <div
              key={event.num}
              className="glass-card cut-corner-small p-4 rounded-xl border border-[#5589C2]/25 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-black text-2xl text-transparent [-webkit-text-stroke:1px_rgba(193,233,194,0.5)]">
                    {event.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#5589C2]">
                    {event.date}
                  </span>
                </div>

                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-black mb-3 border border-white/10">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-[#C1E9C2] transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-xs text-[#C5DAF0] leading-relaxed mb-4">
                  {event.lead}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C1E9C2] font-bold truncate">
                  ✓ {event.receiptText}
                </span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#5589C2]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
