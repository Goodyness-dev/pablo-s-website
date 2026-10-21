import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { RecentWork } from './components/RecentWork';
import { TechAndUtility } from './components/TechAndUtility';
import { BrandFlashBand } from './components/BrandFlashBand';
import { WhoIsFundraiser } from './components/WhoIsFundraiser';
import { TheCutTimeline } from './components/TheCutTimeline';
import { ServicesGrid } from './components/ServicesGrid';
import { Reviews } from './components/Reviews';
import { ArchiveMasonry } from './components/ArchiveMasonry';
import { ContactChain } from './components/ContactChain';
import { FooterTicker } from './components/FooterTicker';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('recent-work');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play crystalline chime on interaction when sound is enabled
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
      setTimeout(() => playChime(1174.66), 50);
    }
  };

  // Section Observer for Active Navigation
  useEffect(() => {
    const sectionIds = ['recent-work', 'tech', 'story', 'services', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            playChime(600 + Math.random() * 400);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [soundEnabled]);

  const handleSeeRecentWork = () => {
    const el = document.getElementById('recent-work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-[#C1E9C2] selection:text-black">
      {/* 1. Loader (Recolored with white cut line & face sticker pop) */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Global Grain Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Sticky Navigation */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        activeSection={activeSection}
      />

      <main className="relative z-10">
        {/* 2. Hero */}
        <Hero onSeeRecentWork={handleSeeRecentWork} />

        {/* 3. Recent Work (Large & Featured: Ether Archive, Clover Boys, Wojak Meter, Funpump) */}
        <RecentWork />

        {/* 4. Tech and Utility (Built, Not Just Boosted) */}
        <TechAndUtility />

        {/* 5. Brand Flash Band (Solid #5589C2 Marquee Band) */}
        <BrandFlashBand />

        {/* 6. Who is The Fundraiser */}
        <WhoIsFundraiser />

        {/* 7. The Cut (Compact 1-Screen Origin Timeline: 2025-2026) */}
        <TheCutTimeline />

        {/* 8. Services */}
        <ServicesGrid />

        {/* 9. Reviews */}
        <Reviews />

        {/* 10. The Archive (Barcode motif & compact PNLs) */}
        <ArchiveMasonry />

        {/* Second Brand Flash Band */}
        <BrandFlashBand text="PRESSURE MAKES DIAMONDS · ALL ORGANIC · THE FUNDRAISER · YOU DIG? ·" />

        {/* 11. Contact Chain & Footer */}
        <ContactChain />
      </main>

      {/* Footer Ticker with Marquee & 7-Click Secret Easter Egg */}
      <FooterTicker />
    </div>
  );
};
