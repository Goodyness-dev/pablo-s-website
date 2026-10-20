import React, { useState, useEffect, useRef } from 'react';
import { DiamondStage } from './types';
import { STORY_CHAPTERS } from './data/storyChapters';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { WhoIsFundraiser } from './components/WhoIsFundraiser';
import { ChapterSection } from './components/ChapterSection';
import { CaseStudyClover } from './components/CaseStudyClover';
import { CaseStudyWojak } from './components/CaseStudyWojak';
import { PartnerEtherArchive } from './components/PartnerEtherArchive';
import { PnlCarousel } from './components/PnlCarousel';
import { ServicesGrid } from './components/ServicesGrid';
import { Reviews } from './components/Reviews';
import { ArchiveMasonry } from './components/ArchiveMasonry';
import { ContactChain } from './components/ContactChain';
import { FooterTicker } from './components/FooterTicker';
import { ProgressRail } from './components/ProgressRail';
import { VectorDiamond } from './components/VectorDiamond';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState<DiamondStage>(0);
  const [activeSection, setActiveSection] = useState('story');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play subtle synthetic crystalline chime when sound is enabled
  const playChime = (freq = 880) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio fallback silent
    }
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      setTimeout(() => playChime(1174.66), 50); // High D crystalline tone
    }
  };

  // Scroll stage & active section tracking via IntersectionObserver
  useEffect(() => {
    const stageElements = [
      { id: 'chapter-01', stage: 0 as DiamondStage, section: 'story' },
      { id: 'chapter-02', stage: 1 as DiamondStage, section: 'story' },
      { id: 'chapter-03', stage: 2 as DiamondStage, section: 'story' },
      { id: 'chapter-04', stage: 3 as DiamondStage, section: 'story' },
      { id: 'chapter-05', stage: 4 as DiamondStage, section: 'work' },
      { id: 'chapter-06', stage: 5 as DiamondStage, section: 'work' },
      { id: 'services', stage: 5 as DiamondStage, section: 'services' },
      { id: 'reviews', stage: 5 as DiamondStage, section: 'reviews' },
      { id: 'contact', stage: 6 as DiamondStage, section: 'contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = stageElements.find((item) => item.id === entry.target.id);
            if (found) {
              setCurrentStage((prev) => {
                if (prev !== found.stage) {
                  playChime(700 + found.stage * 100);
                }
                return found.stage;
              });
              setActiveSection(found.section);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    stageElements.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [soundEnabled]);

  const handleWatchCut = () => {
    const el = document.getElementById('chapter-01');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectStage = (stage: DiamondStage) => {
    setCurrentStage(stage);
    let targetId = 'chapter-01';
    if (stage === 0) targetId = 'chapter-01';
    else if (stage === 1) targetId = 'chapter-02';
    else if (stage === 2) targetId = 'chapter-03';
    else if (stage === 3) targetId = 'chapter-04';
    else if (stage === 4) targetId = 'chapter-05';
    else if (stage === 5) targetId = 'chapter-06';
    else if (stage === 6) targetId = 'contact';

    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05060A] text-[#F4FBFF] selection:bg-[#6FD8FF]/20 selection:text-[#BDE7FF]">
      {/* 1.8s Stone Cutting Intro Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Global Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Sticky Top Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        activeSection={activeSection}
      />

      {/* Progress Diamond Rail (Vertical on Desktop, Horizontal on Mobile) */}
      <ProgressRail
        currentStage={currentStage}
        onSelectStage={handleSelectStage}
      />

      {/* Main Content Stream */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero onWatchCut={handleWatchCut} />

        {/* 2. Who is The Fundraiser */}
        <WhoIsFundraiser />

        {/* 3. The Story Chapters ("The Cut") */}
        <div id="story">
          {/* Chapter 01: Rough - The Trenches */}
          <ChapterSection chapter={STORY_CHAPTERS[0]} reverse={false} />

          {/* Chapter 02: Cleave - Pleased Devs */}
          <ChapterSection chapter={STORY_CHAPTERS[1]} reverse={true} />

          {/* Chapter 03: Facet - The Fundraiser */}
          <ChapterSection chapter={STORY_CHAPTERS[2]} reverse={false} />

          {/* Chapter 04: Polish - The Comeback */}
          <div id="chapter-04" className="relative">
            <ChapterSection chapter={STORY_CHAPTERS[3]} reverse={true} />
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-8 mb-12">
              <PnlCarousel />
            </div>
          </div>
        </div>

        {/* 4. Chapter 05: Brilliant - Fundraisers Web (Agency Work) */}
        <div id="work" className="relative">
          <div id="chapter-05">
            <ChapterSection chapter={STORY_CHAPTERS[4]} reverse={false} />
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-6 mb-16">
              {/* Case Study A: Clover Boys */}
              <CaseStudyClover />

              {/* Case Study B: Wojak Meter with Before & After Slider */}
              <CaseStudyWojak />
            </div>
          </div>

          {/* 5. Chapter 06: Set - Partners */}
          <div id="chapter-06">
            <ChapterSection chapter={STORY_CHAPTERS[5]} reverse={true} />
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-6 mb-16">
              <PartnerEtherArchive />
            </div>
          </div>
        </div>

        {/* 6. Agency Services */}
        <ServicesGrid />

        {/* 7. Client & Founder Reviews */}
        <Reviews />

        {/* 8. The Historical Archive */}
        <ArchiveMasonry />

        {/* 9. Contact Chain Section */}
        <ContactChain />
      </main>

      {/* Sticky Companion Diamond (Desktop Floating Stage Visualizer) */}
      <aside
        aria-label="Current cut stage visualizer"
        className="hidden xl:flex fixed bottom-8 left-8 z-30 pointer-events-none items-center gap-3 p-3 rounded-2xl bg-[#0E1226]/75 backdrop-blur-md border border-[#BDE7FF]/15 shadow-2xl transition-all duration-500"
      >
        <VectorDiamond stage={currentStage} size={54} interactive={false} />
        <div className="pr-2">
          <div className="font-mono text-[9px] uppercase tracking-wider text-[#6FD8FF]">
            STAGE 0{currentStage + 1}
          </div>
          <div className="font-display font-bold text-xs text-[#F4FBFF]">
            {STORY_CHAPTERS[currentStage]?.stageName || 'Brilliant Cut'}
          </div>
        </div>
      </aside>

      {/* 10. Footer with GM Ticker & 7-Click Easter Egg */}
      <FooterTicker />
    </div>
  );
};
