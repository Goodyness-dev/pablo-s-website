import React, { useState, useRef, useCallback } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { LightboxItem } from './ImageLightbox';
import { AnimatedStat } from './AnimatedStat';

interface CaseStudyWojakProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

type TabType = 'compare' | 'after' | 'before';

export const CaseStudyWojak: React.FC<CaseStudyWojakProps> = ({ onOpenLightbox }) => {
  const project = CASE_STUDIES.find((p) => p.id === 'wojak-meter')!;
  const [activeTab, setActiveTab] = useState<TabType>('compare');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startY: number; isHorizontal?: boolean } | null>(null);

  const tabLabels: Record<TabType, string> = {
    compare: 'Split Compare',
    after: 'With Us (After)',
    before: 'Without Us (Before)',
  };

  // Compute slider percentage relative to the phone container
  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 1000) / 10;
    setSliderPos(percent);
  }, []);

  // Handle direct touch/pointer on the center handle pill
  const handleHandlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
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

  // Smart touch handling for the phone container:
  // Allows native vertical page scrolling on mobile without trapping.
  // Engages horizontal dragging only when movement is intentionally horizontal.
  const handlePhonePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary) return;
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
    };
  };

  const handlePhonePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;

    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

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
        // Vertical swipe: let native page scroll happen
        dragStartRef.current.isHorizontal = false;
        return;
      }
    }

    if (dragStartRef.current.isHorizontal) {
      updateSliderFromClientX(e.clientX);
    }
  };

  const handlePhonePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
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

  const handleLightboxOpen = () => {
    if (!onOpenLightbox) return;
    if (activeTab === 'before') {
      onOpenLightbox({
        src: '/assets/wojak-before.jpg',
        title: 'Wojak Meter — Baseline Engagement (Without Us)',
        subtitle: 'Low visibility & CT sentiment prior to narrative restructuring',
        badge: 'BEFORE',
      });
    } else {
      onOpenLightbox({
        src: '/assets/wojak-after.jpg',
        title: 'Wojak Meter — Traction & Volume With The Fundraiser',
        subtitle: 'Community sentiment reversal and 5x organic volume expansion',
        badge: 'CASE STUDY 02',
      });
    }
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#080B14]/90 backdrop-blur-2xl p-5 sm:p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.7)] my-8">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
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

      {/* Main 2-Column Split: Exactly like Clover Boys */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Metrics & Project Intel (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6FD8FF] animate-pulse" />
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* 3 Animated Metric Wells with Typewriter Effect */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-6">
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

            {/* Structured Deliverables Checklist */}
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
          </div>
        </div>

        {/* Right Column: Visual Media Showcase with Minimalist Media Switcher (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Minimalist Media Switcher Tabs (identical styling to Clover) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#06080F] border border-white/10 mb-3 overflow-x-auto scrollbar-none">
            {(['compare', 'after', 'before'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all flex-1 text-center whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-[#12192B] text-[#6FD8FF] border border-[#6FD8FF]/40 font-bold shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {tabLabels[key]}
              </button>
            ))}
          </div>

          {/* Minimalist Visual Container (matches Clover's exact aspect ratio & sleek frame) */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#05070D] border border-white/10 shadow-2xl flex items-center justify-center p-3 sm:p-4 group">
            {/* Ambient Cyan Backlight Glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25 filter blur-2xl scale-105 transition-all duration-500"
              style={{
                backgroundImage: 'url(/assets/wojak-after.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />

            {/* TAB 1: INTERACTIVE SPLIT COMPARISON */}
            {activeTab === 'compare' && (
              <div
                ref={phoneRef}
                onPointerDown={handlePhonePointerDown}
                onPointerMove={handlePhonePointerMove}
                onPointerUp={handlePhonePointerUp}
                onPointerCancel={handlePhonePointerUp}
                className="relative h-full max-h-[92%] aspect-[591/1280] rounded-xl sm:rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/20 bg-black touch-pan-y shadow-[0_12px_36px_rgba(0,0,0,0.85)] z-10"
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
                <span className="absolute top-2 left-2 font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#05060A]/90 text-[#94A3B8] border border-white/20 z-20 backdrop-blur-md pointer-events-none">
                  BEFORE
                </span>
                <span className="absolute top-2 right-2 font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#05060A]/90 text-[#22C55E] border border-[#22C55E]/40 z-20 backdrop-blur-md pointer-events-none">
                  AFTER
                </span>

                {/* Split Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-[#6FD8FF] shadow-[0_0_10px_#6FD8FF] z-30 pointer-events-none"
                  style={{
                    left: `${sliderPos}%`,
                    transition: isDragging ? 'none' : 'left 0.25s ease-out',
                  }}
                >
                  {/* Draggable Thumb */}
                  <div
                    onPointerDown={handleHandlePointerDown}
                    onPointerMove={handleHandlePointerMove}
                    onPointerUp={handleHandlePointerUp}
                    onPointerCancel={handleHandlePointerUp}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 flex items-center justify-center cursor-ew-resize touch-none pointer-events-auto"
                    aria-label="Drag slider"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0A0D16] border-2 border-[#6FD8FF] flex items-center justify-center shadow-[0_0_12px_rgba(111,216,255,0.8)]">
                      <span className="text-[9px] text-[#6FD8FF] font-bold tracking-tighter select-none">
                        ◂▸
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2 & 3: STATIC FULL PHONE VIEW WITH LIGHTBOX CLICK */}
            {activeTab !== 'compare' && (
              <div
                onClick={handleLightboxOpen}
                className="relative h-full max-h-[92%] aspect-[591/1280] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/20 bg-black shadow-[0_12px_36px_rgba(0,0,0,0.85)] z-10 transition-transform duration-500 group-hover:scale-105"
              >
                <img
                  src={activeTab === 'after' ? '/assets/wojak-after.jpg' : '/assets/wojak-before.jpg'}
                  alt={activeTab === 'after' ? 'Wojak Meter with The Fundraiser' : 'Wojak Meter baseline'}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                />

                <span
                  className={`absolute top-2 right-2 font-mono text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-md z-20 ${
                    activeTab === 'after'
                      ? 'bg-[#05060A]/90 text-[#22C55E] border-[#22C55E]/40'
                      : 'bg-[#05060A]/90 text-[#94A3B8] border-white/20'
                  }`}
                >
                  {activeTab === 'after' ? 'WITH THE FUNDRAISER' : 'WITHOUT US'}
                </span>
              </div>
            )}

            {/* Minimalist Caption Overlay at bottom (matching Clover Boys) */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#05070D] via-[#05070D]/90 to-transparent z-20 flex items-center justify-between gap-2 pointer-events-none">
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-[#F8FAFC] font-medium truncate">
                  {activeTab === 'compare'
                    ? `Wojak Meter — ${sliderPos.toFixed(0)}% Split Compare`
                    : activeTab === 'after'
                    ? 'Wojak Meter — Verified Traction (3.6K Views)'
                    : 'Wojak Meter — Baseline Reach (84 Views)'}
                </p>
                <p className="font-mono text-[10px] text-[#64748B] truncate">
                  {activeTab === 'compare'
                    ? 'Slide handle to compare sentiment & engagement'
                    : 'Tap to inspect high-resolution snapshot in lightbox'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleLightboxOpen}
                className="pointer-events-auto px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 text-[10px] font-mono text-[#A8B4C8] hover:text-white transition-colors shrink-0"
              >
                🔍 Fullscreen
              </button>
            </div>
          </div>

          {/* Minimalist Scrubber Bar under the comparison container (Only in Compare mode) */}
          {activeTab === 'compare' && (
            <div className="flex items-center justify-between gap-2.5 mt-2.5 px-1">
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className="font-mono text-[10px] text-[#94A3B8] hover:text-white transition-colors uppercase tracking-wider"
              >
                Before (0%)
              </button>
              <div className="flex-1 max-w-[200px]">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.5"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#6FD8FF] focus:outline-none"
                  aria-label="Traction comparison slider"
                />
              </div>
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className="font-mono text-[10px] text-[#22C55E] hover:text-[#4ADE80] transition-colors uppercase tracking-wider"
              >
                After (100%)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
