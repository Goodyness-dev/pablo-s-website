import React, { useState, useEffect, useRef } from 'react';
import { STORY_CHAPTERS } from '../data/storyChapters';
import { LightboxItem } from './ImageLightbox';

interface OriginStoryProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const OriginStory: React.FC<OriginStoryProps> = ({ onOpenLightbox }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const fullTypewriterLine = 'One channel. Then the next chapter.';

  // One-shot typewriter trigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(fullTypewriterLine);
      setTypewriterComplete(true);
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            setIsTyping(true);
            let currentIdx = 0;
            const speed = 1400 / fullTypewriterLine.length;
            const timer = setInterval(() => {
              currentIdx++;
              setTypedText(fullTypewriterLine.slice(0, currentIdx));
              if (currentIdx >= fullTypewriterLine.length) {
                clearInterval(timer);
                setIsTyping(false);
                setTypewriterComplete(true);
              }
            }, speed);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -15% 0px' }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => observer.disconnect();
  }, [fullTypewriterLine]);

  // Track active chapter as user scrolls through narrative milestones
  useEffect(() => {
    const chapterEls = STORY_CHAPTERS.map((ch) => document.getElementById(`chapter-${ch.numeral}`));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = STORY_CHAPTERS.findIndex((ch) => `chapter-${ch.numeral}` === id);
            if (index !== -1) {
              setActiveChapterIndex(index);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -20% 0px' }
    );

    chapterEls.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeChapter = STORY_CHAPTERS[activeChapterIndex] || STORY_CHAPTERS[0];

  const handleImageClick = (src?: string, alt?: string, caption?: string) => {
    if (!src || !onOpenLightbox) return;
    onOpenLightbox({
      src,
      alt: alt || 'Story artifact',
      title: activeChapter.title,
      caption: caption || activeChapter.caption || activeChapter.tagline,
      date: activeChapter.dateLabel,
    });
  };

  return (
    <section id="story" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F]">
              01 / Origins
            </span>
          </div>

          <h2 className="text-section-title text-[#F0EEE7] max-w-[900px] mb-6">
            Before the agency,<br />
            there was a channel.
          </h2>

          {/* Typewriter Line */}
          <div ref={typewriterRef} className="min-h-[2rem]">
            {/* Visually hidden text for screen readers */}
            <span className="sr-only">{fullTypewriterLine}</span>
            {/* Visual presentation */}
            <p aria-hidden="true" className="font-mono text-sm sm:text-base text-[#B8B6AD]">
              {typedText}
              {isTyping && !typewriterComplete && <span className="typewriter-caret" />}
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Story Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Scrolling Narrative Milestones */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#33332F]">
            {STORY_CHAPTERS.map((chapter, idx) => (
              <article
                key={chapter.id}
                id={`chapter-${chapter.numeral}`}
                className={`pt-12 pb-16 first:pt-0 scroll-mt-32 transition-opacity duration-300 ${
                  activeChapterIndex === idx ? 'opacity-100' : 'opacity-80 lg:opacity-60 hover:opacity-100'
                }`}
              >
                {/* Milestone Meta */}
                <div className="flex items-center justify-between text-xs text-[#A7A69F] font-mono mb-4">
                  <span className="tracking-wider">CHAPTER {chapter.numeral}</span>
                  <span>{chapter.dateLabel}</span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#F0EEE7] mb-4">
                  {chapter.title}
                </h3>

                {/* Lead Sentence */}
                <p className="font-body text-lg sm:text-xl text-[#F0EEE7] leading-relaxed mb-4 font-medium">
                  {chapter.lead}
                </p>

                {/* Narrative Body */}
                <p className="font-body text-[#B8B6AD] text-base sm:text-lg leading-relaxed mb-6">
                  {chapter.body}
                </p>

                {chapter.quote && (
                  <blockquote className="border-l-2 border-[#77776F] pl-4 my-6 text-[#F0EEE7] italic font-serif text-lg">
                    “{chapter.quote}”
                  </blockquote>
                )}

                {/* Mobile In-Flow Artifact Display — Maximized Full Width */}
                <div className="block lg:hidden mt-8 mb-4 border border-[#33332F] bg-[#111110] p-2 sm:p-4 rounded-[2px]">
                  {chapter.imageSrc && (
                    <button
                      type="button"
                      onClick={() => handleImageClick(chapter.imageSrc, chapter.imageAlt, chapter.caption)}
                      className="w-full text-left group"
                    >
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#0A0A09] overflow-hidden mb-3">
                        <img
                          src={chapter.imageSrc}
                          alt={chapter.imageAlt || chapter.title}
                          className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#A7A69F] px-1 pb-1">
                        <span>{chapter.caption || chapter.tagline}</span>
                        <span className="font-mono underline">Inspect ↗</span>
                      </div>
                    </button>
                  )}

                  {chapter.secondaryImageSrc && (
                    <button
                      type="button"
                      onClick={() => handleImageClick(chapter.secondaryImageSrc, chapter.secondaryImageAlt, chapter.secondaryCaption)}
                      className="w-full text-left group mt-4 pt-4 border-t border-[#33332F]"
                    >
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#0A0A09] overflow-hidden mb-3">
                        <img
                          src={chapter.secondaryImageSrc}
                          alt={chapter.secondaryImageAlt || chapter.title}
                          className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#A7A69F] px-1 pb-1">
                        <span>{chapter.secondaryCaption}</span>
                        <span className="font-mono underline">Inspect ↗</span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Supporting Records List */}
                {chapter.verifiedNotes && chapter.verifiedNotes.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {chapter.verifiedNotes.map((note, noteIdx) => (
                      <span
                        key={noteIdx}
                        className="inline-flex items-center gap-1.5 text-xs text-[#A7A69F] font-mono py-1 px-2.5 border border-[#33332F] bg-[#111110] rounded-[2px]"
                      >
                        <span className="w-1 h-1 bg-[#B8B6AD] rounded-full" />
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Right Column: Desktop Pinned Evidence Stage */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
            <div className="border border-[#33332F] bg-[#111110] p-6 rounded-[2px]">
              
              {/* Evidence Chrome Header */}
              <div className="flex items-center justify-between border-b border-[#33332F] pb-3 mb-5 text-xs font-mono text-[#A7A69F]">
                <span>ARCHIVAL RECEIPT {activeChapter.numeral} / 04</span>
                <span>{activeChapter.dateLabel}</span>
              </div>

              {/* Main Artifact Frame */}
              {activeChapter.imageSrc ? (
                <button
                  type="button"
                  onClick={() => handleImageClick(activeChapter.imageSrc, activeChapter.imageAlt, activeChapter.caption)}
                  className="w-full text-left group cursor-zoom-in"
                >
                  <div className="relative aspect-[4/3] bg-[#080808] border border-[#222220] overflow-hidden mb-4 flex items-center justify-center p-2">
                    <img
                      key={activeChapter.imageSrc}
                      src={activeChapter.imageSrc}
                      alt={activeChapter.imageAlt || activeChapter.title}
                      className="w-full h-full object-contain filter contrast-105 transition-all duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Caption & Inspect Hint */}
                  <div className="flex items-baseline justify-between text-xs text-[#B8B6AD] pt-1">
                    <p className="max-w-[80%] font-normal">
                      {activeChapter.caption || activeChapter.tagline}
                    </p>
                    <span className="font-mono text-[#A7A69F] group-hover:text-[#F0EEE7] underline">
                      Inspect ↗
                    </span>
                  </div>
                </button>
              ) : null}

              {/* Secondary Artifact if present (e.g. Chapter 01 ETF Snipe) */}
              {activeChapter.secondaryImageSrc && (
                <div className="mt-5 pt-4 border-t border-[#33332F]">
                  <button
                    type="button"
                    onClick={() => handleImageClick(activeChapter.secondaryImageSrc, activeChapter.secondaryImageAlt, activeChapter.secondaryCaption)}
                    className="w-full text-left group cursor-zoom-in"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#080808] border border-[#222220] flex-shrink-0 overflow-hidden p-1">
                        <img
                          src={activeChapter.secondaryImageSrc}
                          alt={activeChapter.secondaryImageAlt}
                          className="w-full h-full object-contain filter contrast-105"
                        />
                      </div>
                      <div className="flex-1 text-xs">
                        <span className="font-mono text-[#A7A69F] block text-[10px] uppercase">Companion artifact</span>
                        <p className="text-[#F0EEE7] font-medium leading-tight mt-0.5">{activeChapter.secondaryCaption}</p>
                        <span className="text-[#A7A69F] underline text-[11px] mt-1 inline-block">Inspect ↗</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-[#33332F] flex items-center justify-between text-[11px] font-mono text-[#A7A69F]">
                <span>CHAPTER {activeChapter.numeral} ACTIVE</span>
                <div className="flex gap-1.5">
                  {STORY_CHAPTERS.map((ch, idx) => (
                    <span
                      key={ch.id}
                      className={`w-6 h-1 rounded-[1px] transition-colors duration-200 ${
                        activeChapterIndex === idx ? 'bg-[#F0EEE7]' : 'bg-[#33332F]'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
