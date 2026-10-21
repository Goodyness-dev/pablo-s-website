import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CASE_STUDIES, CLOVER_EVIDENCE_GALLERY } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SelectedWorkProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenLightbox }) => {
  const cloverCase = CASE_STUDIES[0];
  const wojakCase = CASE_STUDIES[1];

  // Clover Evidence Tab State
  const [activeCloverTab, setActiveCloverTab] = useState(0);

  // Wojak Before / After Slider State
  const [sliderPos, setSliderPos] = useState(50);
  const [wojakViewMode, setWojakViewMode] = useState<'split' | 'before' | 'after'>('split');

  // GSAP Counter References
  const metricsSectionRef = useRef<HTMLDivElement>(null);
  const cloverImpressionsRef = useRef<HTMLSpanElement>(null);
  const cloverListenersRef = useRef<HTMLSpanElement>(null);
  const cloverEngagementRef = useRef<HTMLSpanElement>(null);
  const wojakViewsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      let played = false;

      ScrollTrigger.create({
        trigger: metricsSectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          if (played) return;
          played = true;

          // Animate Clover Impressions (0 -> 30.2)
          if (cloverImpressionsRef.current) {
            const state = { val: 0 };
            gsap.to(state, {
              val: 30.2,
              duration: 1.2,
              ease: 'power2.out',
              onUpdate: () => {
                if (cloverImpressionsRef.current) {
                  cloverImpressionsRef.current.textContent = `${state.val.toFixed(1)}K`;
                }
              },
              onComplete: () => {
                if (cloverImpressionsRef.current) cloverImpressionsRef.current.textContent = '30.2K';
              },
            });
          }

          // Animate Clover Listeners (0 -> 72)
          if (cloverListenersRef.current) {
            const state = { val: 0 };
            gsap.to(state, {
              val: 72,
              duration: 1.2,
              delay: 0.08,
              ease: 'power2.out',
              onUpdate: () => {
                if (cloverListenersRef.current) {
                  cloverListenersRef.current.textContent = Math.round(state.val).toString();
                }
              },
              onComplete: () => {
                if (cloverListenersRef.current) cloverListenersRef.current.textContent = '72';
              },
            });
          }

          // Animate Clover Engagement Rate (0 -> 12.9)
          if (cloverEngagementRef.current) {
            const state = { val: 0 };
            gsap.to(state, {
              val: 12.9,
              duration: 1.2,
              delay: 0.16,
              ease: 'power2.out',
              onUpdate: () => {
                if (cloverEngagementRef.current) {
                  cloverEngagementRef.current.textContent = `${state.val.toFixed(1)}%`;
                }
              },
              onComplete: () => {
                if (cloverEngagementRef.current) cloverEngagementRef.current.textContent = '12.9%';
              },
            });
          }

          // Animate Wojak Views (0 -> 3.6)
          if (wojakViewsRef.current) {
            const state = { val: 0 };
            gsap.to(state, {
              val: 3.6,
              duration: 1.2,
              delay: 0.24,
              ease: 'power2.out',
              onUpdate: () => {
                if (wojakViewsRef.current) {
                  wojakViewsRef.current.textContent = `${state.val.toFixed(1)}K`;
                }
              },
              onComplete: () => {
                if (wojakViewsRef.current) wojakViewsRef.current.textContent = '3.6K';
              },
            });
          }
        },
      });
    }, metricsSectionRef);

    return () => ctx.revert();
  }, []);

  const handleOpenReceipt = (src: string, title: string, caption?: string) => {
    if (!onOpenLightbox) return;
    onOpenLightbox({
      src,
      title,
      caption: caption || '',
      alt: title,
    });
  };

  const activeEvidence = CLOVER_EVIDENCE_GALLERY[activeCloverTab];

  return (
    <section id="work" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F]">
              02 / Selected work
            </span>
          </div>

          <h2 className="text-section-title text-[#F0EEE7] mb-6">
            The work. The receipts.
          </h2>

          <p className="font-body text-[#B8B6AD] text-lg sm:text-xl max-w-[640px]">
            The scope, the activity, and the records behind each project.
          </p>
        </div>

        {/* =========================================================================
            CASE STUDY 01: CLOVER BOYS
           ========================================================================= */}
        <article className="pb-24 border-b border-[#33332F]">
          
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#A7A69F] uppercase tracking-wider block mb-2">
                Case Study 01 · {cloverCase.date}
              </span>
              <h3 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#F0EEE7] mb-3">
                {cloverCase.title}
              </h3>
              <p className="font-mono text-sm text-[#F0EEE7] mb-4">
                {cloverCase.scope}
              </p>
              <p className="font-body text-xl sm:text-2xl text-[#F0EEE7] leading-relaxed mb-4 font-medium">
                {cloverCase.tagline}
              </p>
              <p className="font-body text-base sm:text-lg text-[#B8B6AD] leading-relaxed max-w-[700px]">
                Community activity, public representation, and a hosted X Space formed the campaign. Inspect the records below for the scope and reported results.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-[#33332F] pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full flex items-center justify-between text-xs text-[#A7A69F] font-mono mb-4">
                <span>PROJECT DESTINATION</span>
                <a
                  href={cloverCase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#F0EEE7] hover:underline"
                >
                  {cloverCase.linkLabel} ↗
                </a>
              </div>

              {/* Clover Boys Mascot Visual on the Right */}
              <div className="w-full my-3 flex justify-center lg:justify-end">
                <button
                  type="button"
                  onClick={() => handleOpenReceipt('/assets/clover-hoodie-character.png', 'Clover Boys 3D Mascot', 'Official 3D campaign mascot wearing signature Clover Boys hoodie')}
                  className="group block text-left cursor-zoom-in w-full max-w-[280px]"
                >
                  <div className="relative aspect-square w-full rounded-[2px] overflow-hidden border border-[#33332F] bg-[#0A0A09]">
                    <img
                      src="/assets/clover-hoodie-character.png"
                      alt="Clover Boys 3D Mascot"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-[#000000]/85 border border-[#33332F] px-2 py-1 text-[10px] font-mono text-[#A7A69F] flex items-center justify-between">
                      <span>Clover Mascot</span>
                      <span className="underline group-hover:text-[#F0EEE7]">Zoom ↗</span>
                    </div>
                  </div>
                </button>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#B8B6AD] italic border-l-2 border-[#77776F] pl-3 py-1 my-2">
                “{cloverCase.verifiedQuote}”
              </blockquote>
            </div>
          </div>

          {/* Metrics Ledger with Animated Counters */}
          <div ref={metricsSectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#33332F] mb-12">
            
            {/* Metric 1: Impressions */}
            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Observed Impressions
              </span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-[#F0EEE7] tabular-numbers leading-none mb-1">
                <span ref={cloverImpressionsRef}>30.2K</span>
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Reported analytics (+16,000%)
              </span>
            </div>

            {/* Metric 2: Live Listeners */}
            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Live Space Listeners
              </span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-[#F0EEE7] tabular-numbers leading-none mb-1">
                <span ref={cloverListenersRef}>72</span>
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Verified 48m audio room
              </span>
            </div>

            {/* Metric 3: Engagement Rate */}
            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Engagement Rate
              </span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-[#F0EEE7] tabular-numbers leading-none mb-1">
                <span ref={cloverEngagementRef}>12.9%</span>
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Reported campaign report
              </span>
            </div>

            {/* Metric 4: Community Members */}
            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Community Onboarded
              </span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-[#F0EEE7] tabular-numbers leading-none mb-1">
                100+
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Early Telegram members
              </span>
            </div>

          </div>

          {/* Interactive Evidence Inspection Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Tab Selectors & Deliverables */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-3">
                  Inspect Evidence Receipts ({CLOVER_EVIDENCE_GALLERY.length} Records)
                </span>
                
                <div className="flex flex-col gap-1 border border-[#33332F] bg-[#111110] p-2 rounded-[2px] mb-8">
                  {CLOVER_EVIDENCE_GALLERY.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveCloverTab(idx)}
                      className={`text-left px-3.5 py-2.5 rounded-[2px] transition-colors flex items-center justify-between text-xs sm:text-sm ${
                        activeCloverTab === idx
                          ? 'bg-[#F0EEE7] text-[#000000] font-medium'
                          : 'text-[#B8B6AD] hover:text-[#F0EEE7] hover:bg-[#191917]'
                      }`}
                    >
                      <span>{item.title}</span>
                      <span className="font-mono text-[11px] opacity-75">{item.category}</span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-[#33332F] pt-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-3">
                    Delivered Scope
                  </span>
                  <ul className="space-y-2 text-sm text-[#B8B6AD]">
                    {cloverCase.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-[#F0EEE7] font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Active Evidence Frame — Full Width on Mobile */}
            <div className="lg:col-span-7">
              <div className="border border-[#33332F] bg-[#111110] p-3 sm:p-5 md:p-6 rounded-[2px]">
                <div className="flex items-center justify-between border-b border-[#33332F] pb-3 mb-4 text-xs font-mono text-[#A7A69F]">
                  <span>{activeEvidence.title}</span>
                  <span>RECORD {activeCloverTab + 1} / {CLOVER_EVIDENCE_GALLERY.length}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenReceipt(activeEvidence.src, activeEvidence.title, activeEvidence.caption)}
                  className="w-full text-left group cursor-zoom-in block"
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#080808] border border-[#222220] overflow-hidden mb-4 flex items-center justify-center w-full">
                    <img
                      key={activeEvidence.src}
                      src={activeEvidence.src}
                      alt={activeEvidence.alt}
                      className="w-full h-full object-contain filter contrast-105 transition-all duration-300 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="flex items-start justify-between text-xs text-[#B8B6AD] gap-4">
                    <p className="leading-relaxed">{activeEvidence.caption}</p>
                    <span className="font-mono text-[#A7A69F] group-hover:text-[#F0EEE7] underline flex-shrink-0">
                      Tap to Zoom ↗
                    </span>
                  </div>
                </button>
              </div>
            </div>

          </div>

        </article>

        {/* =========================================================================
            CASE STUDY 02: WOJAK METER
           ========================================================================= */}
        <article className="pt-20">
          
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#A7A69F] uppercase tracking-wider block mb-2">
                Case Study 02 · {wojakCase.date}
              </span>
              <h3 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#F0EEE7] mb-3">
                {wojakCase.title}
              </h3>
              <p className="font-mono text-sm text-[#F0EEE7] mb-4">
                {wojakCase.scope}
              </p>
              <p className="font-body text-xl sm:text-2xl text-[#F0EEE7] leading-relaxed mb-4 font-medium">
                {wojakCase.tagline}
              </p>
              <p className="font-body text-base sm:text-lg text-[#B8B6AD] leading-relaxed max-w-[700px]">
                Content connected market sentiment with the product's use. The case study displays pre-campaign baseline activity versus post-campaign utility adoption.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-[#33332F] pt-6 lg:pt-0 lg:pl-8">
              <div className="w-full flex items-center justify-between text-xs text-[#A7A69F] font-mono mb-4">
                <span>UTILITY WEBSITE</span>
                <a
                  href={wojakCase.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#F0EEE7] hover:underline"
                >
                  {wojakCase.linkLabel} ↗
                </a>
              </div>

              {/* Wojak Mascot Visual on the Right */}
              <div className="w-full my-3 flex justify-center lg:justify-end">
                <button
                  type="button"
                  onClick={() => handleOpenReceipt('/assets/wojak-mascot.png', 'Wojak Meter 3D Mascot', 'Official 3D sentiment mascot for Wojak Meter utility')}
                  className="group block text-left cursor-zoom-in w-full max-w-[280px]"
                >
                  <div className="relative aspect-square w-full rounded-[2px] overflow-hidden border border-[#33332F] bg-[#0A0A09]">
                    <img
                      src="/assets/wojak-mascot.png"
                      alt="Wojak Meter 3D Mascot"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-[#000000]/85 border border-[#33332F] px-2 py-1 text-[10px] font-mono text-[#A7A69F] flex items-center justify-between">
                      <span>Wojak Mascot</span>
                      <span className="underline group-hover:text-[#F0EEE7]">Zoom ↗</span>
                    </div>
                  </div>
                </button>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#B8B6AD] italic border-l-2 border-[#77776F] pl-3 py-1 my-2">
                “{wojakCase.verifiedQuote}”
              </blockquote>
            </div>
          </div>

          {/* Wojak Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[#33332F] mb-12">
            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Sentiment Thread Views
              </span>
              <div className="font-display font-bold text-4xl text-[#F0EEE7] tabular-numbers leading-none mb-1">
                <span ref={wojakViewsRef}>3.6K</span>
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Verified X post reach (24 April 2026)
              </span>
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                Daily Active Traders
              </span>
              <div className="font-display font-bold text-4xl text-[#F0EEE7] leading-none mb-1">
                100s
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Reported utility user surge
              </span>
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#A7A69F] uppercase block mb-1">
                CT Traction Strategy
              </span>
              <div className="font-display font-bold text-4xl text-[#F0EEE7] leading-none mb-1">
                100%
              </div>
              <span className="font-mono text-[10px] text-[#A7A69F] block">
                Organic meme & sentiment distribution
              </span>
            </div>
          </div>

          {/* Accessible Before / After Proof Comparison — Full Width for Mobile Readability */}
          <div className="border border-[#33332F] bg-[#111110] p-3 sm:p-6 md:p-8 rounded-[2px]">
            
            {/* Comparison Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#33332F] mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-1">
                  Evidence Comparison · Before & After Campaign
                </span>
                <p className="text-sm text-[#F0EEE7]">
                  Inspect the utility activity before our campaign versus peak engagement after launch.
                </p>
              </div>

              {/* View Buttons (Accessible Static Alternatives) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setWojakViewMode('before'); setSliderPos(0); }}
                  className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                    wojakViewMode === 'before'
                      ? 'bg-[#F0EEE7] text-[#000000] border-[#F0EEE7]'
                      : 'border-[#33332F] text-[#B8B6AD] hover:text-[#F0EEE7]'
                  }`}
                >
                  View Before
                </button>
                <button
                  type="button"
                  onClick={() => { setWojakViewMode('after'); setSliderPos(100); }}
                  className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                    wojakViewMode === 'after'
                      ? 'bg-[#F0EEE7] text-[#000000] border-[#F0EEE7]'
                      : 'border-[#33332F] text-[#B8B6AD] hover:text-[#F0EEE7]'
                  }`}
                >
                  View After
                </button>
                <button
                  type="button"
                  onClick={() => { setWojakViewMode('split'); setSliderPos(50); }}
                  className={`px-3 py-1.5 text-xs font-mono rounded-[2px] transition-colors border ${
                    wojakViewMode === 'split'
                      ? 'bg-[#F0EEE7] text-[#000000] border-[#F0EEE7]'
                      : 'border-[#33332F] text-[#B8B6AD] hover:text-[#F0EEE7]'
                  }`}
                >
                  Split View
                </button>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="relative aspect-[16/10] bg-[#080808] border border-[#222220] overflow-hidden select-none mb-4">
              
              {/* After Image (Background) */}
              <img
                src="/assets/wojak-after.jpg"
                alt="Wojak Meter after campaign"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/assets/wojak-before.jpg"
                  alt="Wojak Meter before campaign"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
              </div>

              {/* Vertical Divider Line */}
              {wojakViewMode === 'split' && (
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-[#F0EEE7] pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-[#000000] border border-[#F0EEE7] rounded-[2px] flex items-center justify-center text-[10px] text-[#F0EEE7]">
                    ↔
                  </div>
                </div>
              )}

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-[#000000]/80 border border-[#33332F] px-2.5 py-1 text-[11px] font-mono text-[#F0EEE7] pointer-events-none">
                BEFORE CAMPAIGN
              </div>
              <div className="absolute top-4 right-4 bg-[#000000]/80 border border-[#33332F] px-2.5 py-1 text-[11px] font-mono text-[#F0EEE7] pointer-events-none">
                AFTER CAMPAIGN
              </div>
            </div>

            {/* Slider Control for Touch & Keyboard */}
            {wojakViewMode === 'split' && (
              <div className="flex items-center gap-4 py-2">
                <label htmlFor="wojak-slider" className="sr-only">
                  Drag to compare before and after states
                </label>
                <span className="font-mono text-xs text-[#A7A69F]">Before</span>
                <input
                  id="wojak-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-1 bg-[#33332F] appearance-none rounded-none cursor-ew-resize accent-[#F0EEE7]"
                />
                <span className="font-mono text-xs text-[#A7A69F]">After</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-[#A7A69F] pt-2 font-mono">
              <span>{wojakCase.qualifications}</span>
              <button
                type="button"
                onClick={() => handleOpenReceipt(sliderPos > 50 ? '/assets/wojak-after.jpg' : '/assets/wojak-before.jpg', 'Wojak Meter Comparison', wojakCase.qualifications)}
                className="underline hover:text-[#F0EEE7]"
              >
                Inspect full image ↗
              </button>
            </div>

          </div>

        </article>

      </div>
    </section>
  );
};
