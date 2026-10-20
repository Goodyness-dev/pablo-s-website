import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/projects';

export const CaseStudyClover: React.FC = () => {
  const project = CASE_STUDIES.find((p) => p.id === 'clover-boys')!;
  const [activeTab, setActiveTab] = useState<'analytics' | 'space' | 'community'>('analytics');

  return (
    <div className="glass-card cut-corner p-6 md:p-8 rounded-2xl border border-[#6FD8FF]/25 shadow-[0_12px_48px_rgba(5,6,10,0.7)] my-8">
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
        <span className="font-mono text-xs text-[#FFE49A] font-semibold bg-[#FFE49A]/10 px-3 py-1 rounded-full border border-[#FFE49A]/30">
          CASE STUDY 01
        </span>
      </div>

      {/* Title & Tagline */}
      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F4FBFF] mb-2">
        {project.title}
      </h3>
      <p className="font-body text-[#A8B4C8] text-base leading-relaxed mb-6 max-w-[720px]">
        {project.tagline}
      </p>

      {/* 4-Stat Diamond Number Matrix */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {project.stats.map((stat, i) => (
          <div
            key={i}
            className="p-3.5 sm:p-4 rounded-xl bg-[#07080C]/80 border border-[#BDE7FF]/15 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-2 h-2 rotate-45 bg-[#6FD8FF]" />
              <span className="font-mono text-[9px] text-[#346538] bg-[#EDF3EC] px-1.5 py-0.2 rounded font-bold">
                VERIFIED
              </span>
            </div>
            <div
              className={`font-display font-extrabold text-2xl sm:text-3xl ${
                stat.highlight ? 'gold-text' : 'text-[#F4FBFF]'
              }`}
            >
              {stat.value}
            </div>
            <div className="font-mono text-xs text-[#A8B4C8] mt-1 leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Media Tab Switcher */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'analytics'
              ? 'bg-[#6FD8FF]/20 text-[#6FD8FF] border border-[#6FD8FF]/40'
              : 'text-[#A8B4C8] hover:text-[#F4FBFF]'
          }`}
        >
          Analytics (+16K%)
        </button>
        <button
          onClick={() => setActiveTab('space')}
          className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'space'
              ? 'bg-[#6FD8FF]/20 text-[#6FD8FF] border border-[#6FD8FF]/40'
              : 'text-[#A8B4C8] hover:text-[#F4FBFF]'
          }`}
        >
          X Space (72 Live)
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
            activeTab === 'community'
              ? 'bg-[#6FD8FF]/20 text-[#6FD8FF] border border-[#6FD8FF]/40'
              : 'text-[#A8B4C8] hover:text-[#F4FBFF]'
          }`}
        >
          Community Traction
        </button>
      </div>

      {/* Tab Media Display */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#07080C] border border-[#BDE7FF]/20 mb-6">
        <img
          src={
            activeTab === 'analytics'
              ? '/assets/clover-analytics.jpg'
              : activeTab === 'space'
              ? '/assets/clover-space.jpg'
              : '/assets/clover-with-us.jpg'
          }
          alt={`Clover Boys - ${activeTab}`}
          className="w-full h-full object-cover"
        />
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
          Verified contract &amp; live site deployment
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#6FD8FF] hover:text-[#BDE7FF] transition-colors"
        >
          <span>cloverboys.vercel.app</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
};
