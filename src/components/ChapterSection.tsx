import React from 'react';
import { Chapter } from '../types';

interface ChapterSectionProps {
  chapter: Chapter;
  reverse?: boolean;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({
  chapter,
  reverse = false,
}) => {
  return (
    <section
      id={`chapter-${chapter.numeral}`}
      className="relative py-16 md:py-24 border-b border-[#BDE7FF]/5 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Column */}
          <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Outlined Chapter Numeral & Date */}
            <div className="flex items-center gap-4 mb-3">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-transparent [-webkit-text-stroke:1px_rgba(189,231,255,0.4)]">
                {chapter.numeral}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
                {chapter.dateLabel}
              </span>
            </div>

            {/* Chapter Title */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F4FBFF] leading-tight mb-4">
              {chapter.title}
            </h2>

            {/* Lead Sentence */}
            <p className="font-body text-[#F4FBFF] text-lg sm:text-xl font-medium leading-relaxed mb-4">
              {chapter.lead}
            </p>

            {/* Body */}
            <p className="font-body text-[#A8B4C8] text-base leading-relaxed mb-6">
              {chapter.body}
            </p>

            {/* Pull Quote (if present) */}
            {chapter.quote && (
              <blockquote className="my-5 p-4 rounded-xl bg-[#0E1226]/60 border-l-2 border-[#6FD8FF] font-body italic text-[#BDE7FF] text-base">
                "{chapter.quote}"
              </blockquote>
            )}

            {/* Verified Fact Chips */}
            {chapter.verifiedNotes && chapter.verifiedNotes.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {chapter.verifiedNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1226] border border-[#BDE7FF]/15 text-[11px] font-mono text-[#F4FBFF]"
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
                {/* 45° Chamfer Cut Corner Glass Card */}
                <div className="glass-card cut-corner p-3 sm:p-4 rounded-2xl relative overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#07080C] flex items-center justify-center">
                    <img
                      src={chapter.imageSrc}
                      alt={chapter.imageAlt || chapter.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Glint Sweep Effect on Hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-glint" />
                    </div>
                  </div>

                  {/* Caption & Badge */}
                  <div className="mt-3 flex items-center justify-between px-1">
                    <span className="font-mono text-xs text-[#6B778C] uppercase tracking-wider">
                      {chapter.badgeLabel || 'PROVEN RECEIPT'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#346538] bg-[#EDF3EC] px-2 py-0.5 rounded-full font-bold">
                      ✓ VERIFIED
                    </span>
                  </div>
                </div>

                {/* Subtitle / Tagline below card */}
                {chapter.tagline && (
                  <p className="mt-3 font-mono text-xs text-center text-[#6B778C]">
                    {chapter.tagline}
                  </p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
