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
import { ImageLightbox, LightboxItem } from './components/ImageLightbox';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [motionPaused, setMotionPaused] = useState(false);

  // Unified Lightbox State for high-resolution inspection
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    items: LightboxItem[];
    initialIndex: number;
  }>({
    isOpen: false,
    items: [],
    initialIndex: 0,
  });

  const handleOpenLightbox = (item: LightboxItem) => {
    setLightboxState({
      isOpen: true,
      items: [item],
      initialIndex: 0,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleToggleMotion = () => {
    setMotionPaused((prev) => !prev);
  };

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
    <div className="relative min-h-screen bg-[#000000] text-[#F0EEE7] selection:bg-[#F0EEE7] selection:text-[#000000]">
      
      {/* Restrained Silver Diamond Void Background */}
      <DiamondVoidBackground motionPaused={motionPaused} />

      {/* Sticky Editorial Navigation */}
      <Navbar
        motionPaused={motionPaused}
        onToggleMotion={handleToggleMotion}
        activeSection={activeSection}
      />

      {/* Main Editorial Stream */}
      <main className="relative z-10">
        {/* Thesis Statement Hero */}
        <Hero />

        {/* 01 / Origins Story: 4-Milestone Chronology + Typewriter + Pinned Evidence */}
        <OriginStory onOpenLightbox={handleOpenLightbox} />

        {/* 02 / Selected Work: Clover Boys (Counters & Evidence) + Wojak Meter (Before/After) */}
        <SelectedWork onOpenLightbox={handleOpenLightbox} />

        {/* Partnerships & Collaborations Ledger */}
        <PartnerLedger onOpenLightbox={handleOpenLightbox} />

        {/* 03 / How We Work: 5 Numbered Rows & Deliverables + Process Strip */}
        <ServicesSection onOpenLightbox={handleOpenLightbox} />

        {/* In Their Words: Editorial Testimonial Quotations */}
        <TestimonialsSection />

        {/* Historical Vault: Multipliers & Genesis Artifacts */}
        <EarlyRecordsArchive onOpenLightbox={handleOpenLightbox} />

        {/* 04 / Your Next Chapter: Direct Telegram + Project Brief */}
        <ContactSection />
      </main>

      {/* Editorial Footer with Motion Toggle & Mascot */}
      <Footer
        motionPaused={motionPaused}
        onToggleMotion={handleToggleMotion}
      />

      {/* Touch-Native Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        items={lightboxState.items}
        initialIndex={lightboxState.initialIndex}
      />

    </div>
  );
};
