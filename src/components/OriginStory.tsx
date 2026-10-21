import React, { useState, useEffect, useRef } from 'react';
import { STORY_CHAPTERS } from '../data/storyChapters';

export const OriginStory: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const fullTypewriterLine = 'Every diamond starts rough.';

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

  return (
    <section id="story" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* 3. Meet the Fundraiser */}
        <div className="mb-20 md:mb-28 border-b border-[#33332F] pb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Origins
          </span>
          <h2 className="text-section-title text-[#F0EEE7] max-w-[900px] mb-6">
            Meet the Fundraiser.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8">
              <p className="font-body text-xl sm:text-2xl text-[#F0EEE7] leading-relaxed mb-4 font-normal">
                I started with a wallet and a small channel. Early calls became community work. That work became Fundraisers Web.
              </p>
              <p className="font-body text-base sm:text-lg text-[#B8B6AD] leading-relaxed mb-6">
                Today, we run campaigns, host X Spaces, and represent projects. The story—and the records—are below.
              </p>

              {/* Typewriter Line */}
              <div ref={typewriterRef} className="min-h-[2rem]">
                <span className="sr-only">{fullTypewriterLine}</span>
                <p aria-hidden="true" className="font-mono text-sm sm:text-base text-[#F0EEE7] italic font-medium">
                  {typedText}
                  {isTyping && !typewriterComplete && <span className="typewriter-caret" />}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <div className="w-full max-w-[240px] aspect-square rounded-[2px] overflow-hidden border border-[#33332F] bg-[#0A0A09]">
                <img
                  src="/assets/avatar-origin.jpg"
                  alt="Original Web 3 gains genesis avatar"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Story Introduction */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F]">
              The rough cut
            </span>
          </div>

          <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F0EEE7] mb-3">
            Before the agency, there was a channel.
          </h3>

          <p className="font-body text-base sm:text-lg text-[#B8B6AD] max-w-[640px]">
            A small audience. Early calls. The first pieces of what came next.
          </p>
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
                <h4 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#F0EEE7] mb-3">
                  {chapter.title}
                </h4>

                {/* Lead Sentence */}
                <p className="font-body text-lg sm:text-xl text-[#F0EEE7] leading-relaxed mb-3 font-medium">
                  {chapter.lead}
                </p>

                {/* Narrative Body */}
                <p className="font-body text-[#B8B6AD] text-base sm:text-lg leading-relaxed mb-6">
                  {chapter.body}
                </p>

                {/* Milestone Action Link */}
                <div className="mb-6">
                  <a
                    href={idx === 3 ? '#work' : '#archive'}
                    className="link-editorial text-sm font-mono"
                  >
                    {chapter.tagline}
                  </a>
                </div>

                {/* Mobile In-Flow Full-Width Artifact Display */}
                <div className="block lg:hidden mt-6 mb-2 border border-[#33332F] bg-[#111110] p-3 sm:p-4 rounded-[2px]">
                  {chapter.imageSrc && (
                    <div className="w-full">
                      <div className="relative w-full aspect-[16/10] bg-[#0A0A09] overflow-hidden mb-2 rounded-[2px] border border-[#222220]">
                        <img
                          src={chapter.imageSrc}
                          alt={chapter.imageAlt || chapter.title}
                          className="w-full h-full object-cover filter contrast-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-xs text-[#A7A69F] font-mono pt-1">
                        {chapter.caption}
                      </div>
                    </div>
                  )}

                  {chapter.secondaryImageSrc && (
                    <div className="w-full mt-4 pt-4 border-t border-[#33332F]">
                      <div className="relative w-full aspect-[16/10] bg-[#0A0A09] overflow-hidden mb-2 rounded-[2px] border border-[#222220]">
                        <img
                          src={chapter.secondaryImageSrc}
                          alt={chapter.secondaryImageAlt || chapter.title}
                          className="w-full h-full object-cover filter contrast-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-xs text-[#A7A69F] font-mono pt-1">
                        {chapter.secondaryCaption}
                      </div>
                    </div>
                  )}
                </div>

              </article>
            ))}
          </div>

          {/* Right Column: Desktop Pinned Evidence Stage */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
            <div className="border border-[#33332F] bg-[#111110] p-5 sm:p-6 rounded-[2px]">
              
              {/* Evidence Chrome Header */}
              <div className="flex items-center justify-between border-b border-[#33332F] pb-3 mb-4 text-xs font-mono text-[#A7A69F]">
                <span>ARCHIVAL RECORD {activeChapter.numeral} / 04</span>
                <span>{activeChapter.dateLabel}</span>
              </div>

              {/* Main Artifact Frame */}
              {activeChapter.imageSrc ? (
                <div className="w-full block">
                  <div className="relative aspect-[16/10] bg-[#080808] border border-[#222220] overflow-hidden mb-3 w-full rounded-[2px]">
                    <img
                      key={activeChapter.imageSrc}
                      src={activeChapter.imageSrc}
                      alt={activeChapter.imageAlt || activeChapter.title}
                      className="w-full h-full object-cover filter contrast-105"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs text-[#B8B6AD] font-mono">
                    {activeChapter.caption}
                  </p>
                </div>
              ) : null}

              {/* Secondary Artifact if present */}
              {activeChapter.secondaryImageSrc && (
                <div className="mt-5 pt-4 border-t border-[#33332F]">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#080808] border border-[#222220] flex-shrink-0 overflow-hidden rounded-[2px]">
                      <img
                        src={activeChapter.secondaryImageSrc}
                        alt={activeChapter.secondaryImageAlt}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    </div>
                    <div className="flex-1 text-xs font-mono">
                      <span className="text-[#A7A69F] block text-[10px] uppercase">Companion record</span>
                      <p className="text-[#F0EEE7] font-medium leading-tight mt-0.5">{activeChapter.secondaryCaption}</p>
                    </div>
                  </div>
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
