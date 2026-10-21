import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { LightboxItem } from './ImageLightbox';
import { AnimatedStat } from './AnimatedStat';

interface CaseStudyCloverProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const CaseStudyClover: React.FC<CaseStudyCloverProps> = ({ onOpenLightbox }) => {
  const project = CASE_STUDIES.find((p) => p.id === 'clover-boys')!;
  const [activeMedia, setActiveMedia] = useState<'character' | 'analytics' | 'space'>('character');

  const mediaOptions: Record<'character' | 'analytics' | 'space', { src: string; title: string; subtitle: string; label: string }> = {
    character: {
      src: '/assets/clover-character.png',
      title: 'Clover Boys — Official Character Art',
      subtitle: 'Official brand identity & character concept for the Clover Boys ecosystem',
      label: 'Character Art',
    },
    analytics: {
      src: '/assets/clover-analytics.jpg',
      title: 'Clover Boys — Chart Analytics (+16,000%)',
      subtitle: 'Verified launch run from 100K to 16M peak market cap',
      label: 'Analytics Proof',
    },
    space: {
      src: '/assets/clover-space.jpg',
      title: 'Clover Boys — Live X Space (72 Speakers/Listeners)',
      subtitle: 'Public Spaces hosting, investor Q&A, and community raid coordination',
      label: 'X Space (72 Live)',
    },
  };

  const handleMediaClick = () => {
    if (onOpenLightbox) {
      const current = mediaOptions[activeMedia];
      onOpenLightbox({
        src: current.src,
        title: current.title,
        subtitle: current.subtitle,
        badge: activeMedia === 'character' ? 'OFFICIAL ART' : '+16,000% PEAK',
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
          <span>cloverboys.vercel.app</span>
          <span className="text-[#22C55E] group-hover:translate-x-0.5 transition-transform">↗</span>
        </a>
      </div>

      {/* Main 2-Column Split: Detailed Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Metrics & Project Intel (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* 4 Animated Metric Wells with Typewriter Effect */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mb-6">
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
                  <span className="text-[#22C55E] mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Media Showcase with Attached Character Asset (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Minimalist Media Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#06080F] border border-white/10 mb-3 overflow-x-auto scrollbar-none">
            {(['character', 'analytics', 'space'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveMedia(key)}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all flex-1 text-center whitespace-nowrap ${
                  activeMedia === key
                    ? 'bg-[#12192B] text-[#22C55E] border border-[#22C55E]/40 font-bold shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {mediaOptions[key].label}
              </button>
            ))}
          </div>

          {/* Minimalist Visual Container */}
          <div
            onClick={handleMediaClick}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#05070D] border border-white/10 cursor-pointer group shadow-2xl"
          >
            {/* Ambient Neon Clover Backlight */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25 filter blur-2xl scale-105 transition-all duration-500"
              style={{
                backgroundImage: `url(${mediaOptions[activeMedia].src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />

            {/* Foreground Sharp Image */}
            <img
              src={mediaOptions[activeMedia].src}
              alt={mediaOptions[activeMedia].title}
              className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
              loading="lazy"
            />

            {/* Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#05070D] via-[#05070D]/80 to-transparent z-20">
              <p className="font-mono text-[11px] text-[#F8FAFC] font-medium truncate">
                {mediaOptions[activeMedia].title}
              </p>
              <p className="font-mono text-[10px] text-[#64748B] truncate">
                {mediaOptions[activeMedia].subtitle}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
