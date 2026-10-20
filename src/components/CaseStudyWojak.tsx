import React, { useState, useRef } from 'react';
import { CASE_STUDIES } from '../data/projects';

export const CaseStudyWojak: React.FC = () => {
  const project = CASE_STUDIES.find((p) => p.id === 'wojak-meter')!;
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleTouchTap = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <div className="glass-card cut-corner p-6 md:p-8 rounded-2xl border border-[#BDE7FF]/20 shadow-[0_12px_48px_rgba(5,6,10,0.7)] my-8">
      {/* Header Tag Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-[#0E1226] border border-[#BDE7FF]/20 font-mono text-[10px] text-[#BDE7FF] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs text-[#6FD8FF] font-semibold bg-[#6FD8FF]/10 px-3 py-1 rounded-full border border-[#6FD8FF]/30">
          CASE STUDY 02
        </span>
      </div>

      {/* Title & Tagline */}
      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F4FBFF] mb-2">
        {project.title}
      </h3>
      <p className="font-body text-[#A8B4C8] text-base leading-relaxed mb-6 max-w-[720px]">
        {project.tagline}
      </p>

      {/* Interactive Before & After Slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-mono mb-2">
          <span className="text-[#6B778C]">← SLIDE TO COMPARE TRACTION</span>
          <span className="text-[#6FD8FF]">{sliderPos.toFixed(0)}% SPLIT</span>
        </div>

        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onClick={handleTouchTap}
          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#BDE7FF]/20 bg-[#07080C]"
        >
          {/* AFTER Image (Bottom layer) */}
          <img
            src="/assets/wojak-after.jpg"
            alt="Wojak Meter with The Fundraiser"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <span className="absolute bottom-3 right-3 font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#05060A]/90 text-[#346538] border border-[#346538]/40 z-10">
            WITH US (AFTER)
          </span>

          {/* BEFORE Image (Clipped top layer) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/assets/wojak-before.jpg"
              alt="Wojak Meter without The Fundraiser"
              className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
            />
            <span className="absolute bottom-3 left-3 font-mono text-[10px] font-bold px-2 py-1 rounded bg-[#05060A]/90 text-[#A8B4C8] border border-white/20 z-10">
              WITHOUT US (BEFORE)
            </span>
          </div>

          {/* Divider Line & Diamond Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#6FD8FF] shadow-[0_0_8px_#6FD8FF] pointer-events-none z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-[#05060A] border-2 border-[#6FD8FF] flex items-center justify-center shadow-lg">
              <span className="w-1.5 h-1.5 bg-[#F4FBFF] rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="space-y-2 mb-6">
        {project.deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-sm text-[#A8B4C8]">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF] mt-1.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Project External Link */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="font-mono text-xs text-[#6B778C]">
          Mood tracker &amp; utility site
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#6FD8FF] hover:text-[#BDE7FF] transition-colors"
        >
          <span>wojakmeter.com</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};
