import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

interface CaseStudyCloverProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const CaseStudyClover: React.FC<CaseStudyCloverProps> = ({ onOpenLightbox }) => {
  const project = CASE_STUDIES.find((p) => p.id === 'clover-boys')!;
  const [activeTab, setActiveTab] = useState<'analytics' | 'space' | 'community'>('analytics');

  const tabMediaMap: Record<'analytics' | 'space' | 'community', { src: string; title: string; subtitle: string }> = {
    analytics: {
      src: '/assets/clover-analytics.jpg',
      title: 'Clover Boys — Chart Analytics (+16,000%)',
      subtitle: 'Verified launch run from 100K to 16M peak market cap',
    },
    space: {
      src: '/assets/clover-space.jpg',
      title: 'Clover Boys — Live X Space (72 Speakers/Listeners)',
      subtitle: 'Public Spaces hosting, investor Q&A, and community raid coordination',
    },
    community: {
      src: '/assets/clover-with-us.jpg',
      title: 'Clover Boys — Community Trench Traction',
      subtitle: 'Sustained raid engagement, meme amplification, and volume generation',
    },
  };

  const handleMediaClick = () => {
    if (onOpenLightbox) {
      const current = tabMediaMap[activeTab];
      onOpenLightbox({
        src: current.src,
        title: current.title,
        subtitle: current.subtitle,
        badge: '+16,000% PEAK',
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

      {/* 4-Stat Diamond Number Matrix (OpenCircle Style Wells) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {project.stats.map((stat, i) => (
          <div
            key={i}
            className="metallic-well p-3.5 sm:p-4 rounded-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
              <span className="font-mono text-[9px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded-full font-bold">
                VERIFIED
              </span>
            </div>
            <div
              className={`font-display font-extrabold text-2xl sm:text-3xl ${
                stat.highlight ? 'gold-text' : 'text-[#F8FAFC]'
              }`}
            >
              {stat.value}
            </div>
            <div className="font-mono text-xs text-[#94A3B8] mt-1 leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Media Tab Switcher (OpenCircle Capsule Group) */}
      <div className="mb-4 flex items-center gap-1.5 p-1 rounded-full bg-[#0A0D16] border border-white/10 w-fit max-w-full overflow-x-auto scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveTab('analytics')}
          className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
            activeTab === 'analytics'
              ? 'bg-gradient-to-b from-[#1C2337] to-[#121624] text-[#F8FAFC] border border-white/20 shadow-sm'
              : 'text-[#94A3B8] hover:text-[#F8FAFC]'
          }`}
        >
          Analytics (+16K%)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('space')}
          className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
            activeTab === 'space'
              ? 'bg-gradient-to-b from-[#1C2337] to-[#121624] text-[#F8FAFC] border border-white/20 shadow-sm'
              : 'text-[#94A3B8] hover:text-[#F8FAFC]'
          }`}
        >
          X Space (72 Live)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('community')}
          className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
            activeTab === 'community'
              ? 'bg-gradient-to-b from-[#1C2337] to-[#121624] text-[#F8FAFC] border border-white/20 shadow-sm'
              : 'text-[#94A3B8] hover:text-[#F8FAFC]'
          }`}
        >
          Community Traction
        </button>
      </div>

      {/* Tab Media Display with Ambient Backdrop & Tap to Zoom (Preserves Full Vertical Aspect Ratio) */}
      <div
        onClick={handleMediaClick}
        className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[460px] max-h-[520px] bg-[#07090F] border border-white/12 mb-6 cursor-pointer group shadow-inner flex items-center justify-center p-3 sm:p-5"
      >
        {/* Ambient Glow Clone */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 filter blur-3xl scale-110 transition-all duration-300"
          style={{
            backgroundImage: `url(${tabMediaMap[activeTab].src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        {/* Sharp Foreground Image */}
        <img
          src={tabMediaMap[activeTab].src}
          alt={`Clover Boys - ${activeTab}`}
          className="max-w-full max-h-[440px] sm:max-h-[460px] object-contain relative z-10 drop-shadow-2xl"
        />

        {/* Floating Zoom / Inspect Pill */}
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-[#05060A]/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#F8FAFC] flex items-center gap-1.5 shadow-md">
          <span>🔍</span>
          <span>Tap to zoom receipt</span>
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
          Verified contract &amp; live site deployment
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="metallic-pill px-4 py-2 text-xs font-mono self-start sm:self-auto gap-2 group"
        >
          <span>cloverboys.vercel.app</span>
          <span className="text-[#6FD8FF] group-hover:translate-x-0.5 transition-transform">↗</span>
        </a>
      </div>
    </div>
  );
};
