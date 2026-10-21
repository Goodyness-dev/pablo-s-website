import React from 'react';
import { Chapter } from '../types';
import { LightboxItem } from './ImageLightbox';

interface ChapterSectionProps {
  chapter: Chapter;
  reverse?: boolean;
  onOpenLightbox?: (item: LightboxItem) => void;
  /** When true, renders as an unstyled content block (no outer section bg/border).
   *  Use inside WorkCardStack where the card itself provides the surface. */
  cardMode?: boolean;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({
  chapter,
  reverse = false,
  onOpenLightbox,
  cardMode = false,
}) => {
  const handleImageClick = () => {
    if (chapter.imageSrc && onOpenLightbox) {
      onOpenLightbox({
        src: chapter.imageSrc,
        alt: chapter.imageAlt || chapter.title,
        title: `${chapter.numeral} · ${chapter.title}`,
        subtitle: `${chapter.dateLabel} — ${chapter.badgeLabel || 'Verified Chapter Receipt'}`,
        badge: 'VERIFIED',
      });
    }
  };

  const inner = (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Text Column */}
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Outlined Chapter Numeral & Date */}
          <div className="flex items-center gap-3.5 mb-3">
            <span className="font-display font-extrabold text-3xl sm:text-4xl text-transparent [-webkit-text-stroke:1px_rgba(189,231,255,0.4)]">
              {chapter.numeral}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0E1322] border border-white/10 font-mono text-[11px] uppercase tracking-wider text-[#6FD8FF]">
              {chapter.dateLabel}
            </span>
          </div>

          {/* Chapter Title */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] leading-tight mb-4">
            {chapter.title}
          </h2>

          {/* Lead Sentence */}
          <p className="font-body text-[#F8FAFC] text-base sm:text-lg font-medium leading-relaxed mb-4">
            {chapter.lead}
          </p>

          {/* Body */}
          <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
            {chapter.body}
          </p>

          {/* Pull Quote (if present) */}
          {chapter.quote && (
            <blockquote className="my-5 p-4 rounded-2xl bg-[#0C101C]/80 border-l-2 border-[#6FD8FF] font-body italic text-[#BDE7FF] text-sm sm:text-base shadow-sm">
              "{chapter.quote}"
            </blockquote>
          )}

          {/* Verified Fact Chips */}
          {chapter.verifiedNotes && chapter.verifiedNotes.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {chapter.verifiedNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D111D] border border-white/10 text-xs font-mono text-[#F8FAFC] shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Artifact Visual Column */}
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          {chapter.imageSrc && (
            <div className="relative group">
              {/* Metallic Card Frame */}
              <div
                onClick={handleImageClick}
                className="metallic-card p-3 sm:p-4 rounded-2xl sm:rounded-3xl cursor-pointer group-hover:border-[#6FD8FF]/40 transition-all shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#07090F] flex items-center justify-center border border-white/10">

                  {/* Ambient Glow Underlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25 filter blur-xl scale-110"
                    style={{
                      backgroundImage: `url(${chapter.imageSrc})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  />

                  {/* Sharp Foreground Image */}
                  <img
                    src={chapter.imageSrc}
                    alt={chapter.imageAlt || chapter.title}
                    className="w-full h-full object-cover relative z-10"
                    loading="lazy"
                  />

                  {/* Glint Sweep Effect on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-glint" />
                  </div>
                </div>

                {/* Caption & Badge */}
                <div className="mt-3 flex items-center justify-between px-1.5">
                  <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                    {chapter.badgeLabel || 'PROVEN RECEIPT'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Subtitle / Tagline below card */}
              {chapter.tagline && (
                <p className="mt-3 font-mono text-xs text-center text-[#64748B]">
                  {chapter.tagline}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (cardMode) {
    // Render as bare padded block — the WorkCardStack card surface wraps it
    return (
      <div
        id={`chapter-${chapter.numeral}`}
        className="pt-12 pb-16 sm:pt-16 sm:pb-24"
      >
        {inner}
      </div>
    );
  }

  return (
    <section
      id={`chapter-${chapter.numeral}`}
      className="relative py-16 md:py-24 border-b border-white/5 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {inner}
    </section>
  );
};
