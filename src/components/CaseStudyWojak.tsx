import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

interface CaseStudyWojakProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const CaseStudyWojak: React.FC<CaseStudyWojakProps> = ({ onOpenLightbox }) => {
  const project = CASE_STUDIES.find((p) => p.id === 'wojak-meter')!;
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    updateSliderFromClientX(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      updateSliderFromClientX(e.clientX);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [updateSliderFromClientX]);

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
    <div className="metallic-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
      {/* Header Tag Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[#0D111D] border border-white/10 font-mono text-[10px] text-[#BDE7FF] uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Tagline */}
      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F8FAFC] mb-2 tracking-tight">
        {project.title}
      </h3>
      <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6 max-w-[720px]">
        {project.tagline}
      </p>

      {/* Interactive Before & After Slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-mono mb-2.5">
          <span className="text-[#64748B] flex items-center gap-1.5">
            <span>← SLIDE TO COMPARE TRACTION →</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[#6FD8FF] font-semibold">{sliderPos.toFixed(0)}% SPLIT</span>
            <button
              type="button"
              onClick={handleOpenInspector}
              className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] text-[#A8B4C8] hover:text-white transition-colors"
            >
              🔍 Fullscreen
            </button>
          </div>
        </div>

        {/* Stage Container with Ambient Glow */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#07090F] p-4 sm:p-8 flex flex-col items-center justify-center shadow-inner">
          {/* Ambient Glow Backdrop */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 filter blur-3xl scale-110"
            style={{
              backgroundImage: 'url(/assets/wojak-after.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />

          {/* Centered Phone Screen Comparison Container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] aspect-[591/1280] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-white/20 bg-black touch-none shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10"
          >
            {/* AFTER Image (Bottom Layer - Exact Phone Frame) */}
            <img
              src="/assets/wojak-after.jpg"
              alt="Wojak Meter with The Fundraiser"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />

            {/* BEFORE Image (Clipped Top Layer - Exact Phone Frame) */}
            <img
              src="/assets/wojak-before.jpg"
              alt="Wojak Meter without The Fundraiser"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            />

            {/* Floating In-Screen Badge Pills */}
            <span className="absolute top-3 left-3 font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#05060A]/90 text-[#94A3B8] border border-white/20 z-20 backdrop-blur-md">
              BEFORE
            </span>
            <span className="absolute top-3 right-3 font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#05060A]/90 text-[#22C55E] border border-[#22C55E]/40 z-20 backdrop-blur-md">
              AFTER
            </span>

            {/* Divider Line & Touch Diamond Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#6FD8FF] shadow-[0_0_12px_#6FD8FF] pointer-events-none z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A0D16] border-2 border-[#6FD8FF] flex items-center justify-center shadow-[0_0_16px_rgba(111,216,255,0.7)]">
                <span className="w-2 h-2 bg-[#F8FAFC] rotate-45" />
              </div>
            </div>
          </div>

          {/* Sub-Stage Indicator Labels */}
          <div className="flex items-center justify-between w-full max-w-[340px] mt-4 px-1 z-10 font-mono text-[11px]">
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
              WITHOUT US (BEFORE)
            </span>
            <span className="flex items-center gap-1.5 text-[#22C55E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              WITH US (AFTER)
            </span>
          </div>
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="space-y-2 mb-6">
        {project.deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF] mt-1.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Project External Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/5">
        <span className="font-mono text-xs text-[#64748B]">
          Mood tracker &amp; utility site
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="metallic-pill px-4 py-2 text-xs font-mono self-start sm:self-auto gap-2 group"
        >
          <span>wojakmeter.com</span>
          <span className="text-[#6FD8FF] group-hover:translate-x-0.5 transition-transform">↗</span>
        </a>
      </div>
    </div>
  );
};
