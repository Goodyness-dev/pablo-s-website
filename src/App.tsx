import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DiamondVoidBackground } from './components/DiamondVoidBackground';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { SelectedWork } from './components/SelectedWork';
import { PartnerLedger } from './components/PartnerLedger';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EarlyRecordsArchive } from './components/EarlyRecordsArchive';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [motionPaused, setMotionPaused] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  const handleToggleMotion = () => {
    setMotionPaused((prev) => !prev);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Sync theme with documentElement and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Section Tracking for Navbar
  useEffect(() => {
    const sections = ['story', 'work', 'services', 'archive', 'testimonials', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#F0EEE7] selection:bg-[#F0EEE7] selection:text-[#000000] transition-colors duration-200">
      
      {/* Restrained Silver Diamond Void Background */}
      <DiamondVoidBackground motionPaused={motionPaused} theme={theme} />

      {/* Sticky Editorial Navigation */}
      <Navbar
        motionPaused={motionPaused}
        onToggleMotion={handleToggleMotion}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Editorial Stream */}
      <main className="relative z-10">
        {/* Thesis Statement Hero */}
        <Hero />

        {/* 01 / Origins Story: 4-Milestone Chronology + Typewriter + Pinned Evidence */}
        <OriginStory />

        {/* 02 / Selected Work: Clover Boys (Counters & Evidence) + Wojak Meter (Before/After) */}
        <SelectedWork />

        {/* Partnerships & Collaborations Ledger */}
        <PartnerLedger />

        {/* 03 / How We Work: 5 Numbered Rows & Deliverables + Process Strip */}
        <ServicesSection />

        {/* In Their Words: Editorial Testimonial Quotations */}
        <TestimonialsSection />

        {/* Historical Vault: Multipliers & Genesis Artifacts */}
        <EarlyRecordsArchive />

        {/* 04 / Your Next Chapter: Direct Telegram + Project Brief */}
        <ContactSection />
      </main>

      {/* Editorial Footer with Motion Toggle & Mascot */}
      <Footer
        motionPaused={motionPaused}
        onToggleMotion={handleToggleMotion}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

    </div>
  );
};
