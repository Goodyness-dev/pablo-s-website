import React, { useState, useRef, useCallback } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { LightboxItem } from './ImageLightbox';
import { AnimatedStat } from './AnimatedStat';

interface CaseStudyWojakProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const CaseStudyWojak: React.FC<CaseStudyWojakProps> = ({ onOpenLightbox }) => {
  const project = CASE_STUDIES.find((p) => p.id === 'wojak-meter')!;
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startY: number; startPos: number; isHorizontal?: boolean } | null>(null);

  // Compute percentage from clientX relative to the phone container
  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 1000) / 10;
    setSliderPos(percent);
  }, []);

  // Handle direct touch/pointer on the center handle thumb
  const handleHandlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore if unsupported
    }
    setIsDragging(true);
  };

  const handleHandlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderFromClientX(e.clientX);
  };

  const handleHandlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Smart touch handling on the phone container:
  // If the user drags horizontally, slide the comparison.
  // If the user swipes vertically, let native mobile page scroll proceed without trapping!
  const handleContainerPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary) return;
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPos: sliderPos,
    };
  };

  const handleContainerPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;

    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

    // Detect gesture direction if not established yet
    if (dragStartRef.current.isHorizontal === undefined) {
      if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) {
        dragStartRef.current.isHorizontal = true;
        setIsDragging(true);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      } else if (Math.abs(dy) > 6) {
        // Vertical scroll has priority: cancel horizontal drag
        dragStartRef.current.isHorizontal = false;
        return;
      }
    }

    if (dragStartRef.current.isHorizontal) {
      updateSliderFromClientX(e.clientX);
    }
  };

  const handleContainerPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    // If it was just a quick tap without drag, snap to tapped position
    if (dragStartRef.current && dragStartRef.current.isHorizontal === undefined) {
      const dist = Math.hypot(e.clientX - dragStartRef.current.startX, e.clientY - dragStartRef.current.startY);
      if (dist < 6) {
        updateSliderFromClientX(e.clientX);
      }
    }

    dragStartRef.current = null;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleOpenInspector = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src: '/assets/wojak-after.jpg',
        title: 'Wojak Meter — Traction & Volume With The Fundraiser',
        subtitle: 'Community sentiment reversal and 5x organic volume expansion',
        badge: 'CASE STUDY 02',
      });
    }
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#080B14]/90 backdrop-blur-2xl p-4 sm:p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.7)] my-8">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3.5 border-b border-white/5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-[#BDE7FF] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="metallic-pill px-3.5 py-1.5 text-xs font-mono inline-flex items-center gap-1.5 group self-start sm:self-auto"
        >
          <span>wojakmeter.com</span>
          <span className="text-[#6FD8FF] group-hover:translate-x-0.5 transition-transform">↗</span>
        </a>
      </div>

      {/* Main 2-Column Split: Matches Clover Boys architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Project Intel & Metrics (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6FD8FF] animate-pulse" />
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-5">
              {project.tagline}
            </p>

            {/* 3 Animated Metric Wells */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 mb-5">
              {project.stats.map((stat, i) => (
                <AnimatedStat
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  highlight={stat.highlight}
                  delayMs={i * 120}
                />
              ))}
            </div>

            {/* Deliverables Checklist Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 mb-4">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] mb-2 font-bold">
                Campaign Deliverables &amp; Execution:
              </div>
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                  <span className="text-[#6FD8FF] mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Verified Quote Callout */}
            {project.verifiedQuote && (
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#6FD8FF]/5 to-transparent border-l-2 border-[#6FD8FF] text-xs font-mono text-[#BDE7FF] italic mb-2">
                "{project.verifiedQuote}"
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Before & After Visual Slider (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* Stage Card */}
          <div className="w-full rounded-2xl border border-white/10 bg-[#06080F] p-3 sm:p-4 flex flex-col items-center shadow-inner">
            {/* Header / Info Row */}
            <div className="w-full flex items-center justify-between text-xs font-mono mb-2 px-1">
              <span className="text-[#6FD8FF] font-semibold tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FD8FF]" />
                {sliderPos.toFixed(0)}% SPLIT
              </span>
              <button
                type="button"
                onClick={handleOpenInspector}
                className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] text-[#A8B4C8] hover:text-white transition-colors inline-flex items-center gap-1"
                title="Open in fullscreen inspector"
              >
                <span>🔍</span>
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Centered Phone Screen Frame
                - touch-pan-y: permits free vertical page scrolling on mobile
                - max-w and max-h tuned so it never occupies the full screen
            */}
            <div
              ref={containerRef}
              onPointerDown={handleContainerPointerDown}
              onPointerMove={handleContainerPointerMove}
              onPointerUp={handleContainerPointerUp}
              onPointerCancel={handleContainerPointerUp}
              className="relative w-full max-w-[190px] sm:max-w-[220px] md:max-w-[240px] aspect-[591/1280] max-h-[380px] sm:max-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-white/20 bg-black touch-pan-y shadow-[0_16px_40px_rgba(0,0,0,0.9)] z-10 my-1"
            >
              {/* AFTER Image (Bottom Layer) */}
              <img
                src="/assets/wojak-after.jpg"
                alt="Wojak Meter with The Fundraiser"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />

              {/* BEFORE Image (Clipped Top Layer) */}
              <img
                src="/assets/wojak-before.jpg"
                alt="Wojak Meter without The Fundraiser"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
                style={{
                  clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  transition: isDragging ? 'none' : 'clip-path 0.25s ease-out',
                }}
              />

              {/* In-Screen Badge Pills */}
              <span className="absolute top-2.5 left-2.5 font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#05060A]/90 text-[#94A3B8] border border-white/20 z-20 backdrop-blur-md pointer-events-none">
                BEFORE
              </span>
              <span className="absolute top-2.5 right-2.5 font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#05060A]/90 text-[#22C55E] border border-[#22C55E]/40 z-20 backdrop-blur-md pointer-events-none">
                AFTER
              </span>

              {/* Vertical Split Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#6FD8FF] shadow-[0_0_10px_#6FD8FF] z-30 pointer-events-none"
                style={{
                  left: `${sliderPos}%`,
                  transition: isDragging ? 'none' : 'left 0.25s ease-out',
                }}
              >
                {/* Grab Handle Pill with active touch capture */}
                <div
                  onPointerDown={handleHandlePointerDown}
                  onPointerMove={handleHandlePointerMove}
                  onPointerUp={handleHandlePointerUp}
                  onPointerCancel={handleHandlePointerUp}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center cursor-ew-resize touch-none pointer-events-auto"
                  aria-label="Drag slider"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A0D16] border-2 border-[#6FD8FF] flex items-center justify-center shadow-[0_0_14px_rgba(111,216,255,0.8)]">
                    <span className="text-[10px] text-[#6FD8FF] font-bold tracking-tighter select-none">
                      ◂▸
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Smooth Range Scrubber (Effortless Mobile Thumb Control) */}
            <div className="w-full max-w-[240px] mt-2.5 px-1">
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#64748B] mb-1">
                <span>BEFORE</span>
                <span className="text-[#BDE7FF]">SLIDE TRACTION</span>
                <span className="text-[#22C55E]">AFTER</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="0.5"
                value={sliderPos}
                onChange={(e) => setSliderPos(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#6FD8FF] focus:outline-none"
                aria-label="Traction comparison slider"
              />
            </div>

            {/* Quick-Jump Preset Buttons */}
            <div className="flex items-center justify-center gap-1.5 w-full mt-2">
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`px-2.5 py-1 rounded-md font-mono text-[10px] uppercase transition-all ${
                  sliderPos === 0
                    ? 'bg-[#12192B] text-white border border-white/20'
                    : 'bg-white/[0.03] text-[#94A3B8] hover:text-white border border-transparent'
                }`}
              >
                Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`px-2.5 py-1 rounded-md font-mono text-[10px] uppercase transition-all ${
                  Math.abs(sliderPos - 50) < 1
                    ? 'bg-[#12192B] text-[#6FD8FF] border border-[#6FD8FF]/40 font-semibold'
                    : 'bg-white/[0.03] text-[#94A3B8] hover:text-white border border-transparent'
                }`}
              >
                50/50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`px-2.5 py-1 rounded-md font-mono text-[10px] uppercase transition-all ${
                  sliderPos === 100
                    ? 'bg-[#12192B] text-[#22C55E] border border-[#22C55E]/40 font-semibold'
                    : 'bg-white/[0.03] text-[#94A3B8] hover:text-white border border-transparent'
                }`}
              >
                After
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
