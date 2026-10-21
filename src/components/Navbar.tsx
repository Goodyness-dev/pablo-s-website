import React, { useState, useEffect } from 'react';

interface NavbarProps {
  motionPaused?: boolean;
  onToggleMotion?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  motionPaused = false,
  onToggleMotion,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#33332F] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand / Identity */}
        <a
          href="#root"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EEE7]"
          onClick={(e) => handleLinkClick(e, '#root')}
        >
          <div className="w-8 h-8 rounded-[2px] overflow-hidden border border-[#33332F] bg-[#111110] flex-shrink-0">
            <img
              src="/assets/logo-face.jpg"
              alt="The Fundraiser"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[#F0EEE7] uppercase leading-none">
              The Fundraiser
            </span>
            <span className="font-body text-[11px] text-[#A7A69F] tracking-normal leading-tight mt-0.5">
              Fundraisers Web
            </span>
          </div>
        </a>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm transition-colors duration-150 ${
                  isActive ? 'text-[#F0EEE7] font-medium' : 'text-[#B8B6AD] hover:text-[#F0EEE7]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Utility & Primary Action */}
        <div className="hidden md:flex items-center gap-5">
          {onToggleMotion && (
            <button
              onClick={onToggleMotion}
              className="text-xs text-[#A7A69F] hover:text-[#F0EEE7] transition-colors py-1 px-2 border border-transparent hover:border-[#33332F] rounded-[2px]"
              title="Toggle site motion preference"
            >
              {motionPaused ? 'Enable motion' : 'Reduce motion'}
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary text-xs tracking-wide"
          >
            <span>Let's talk</span>
            <span>↗</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-xs font-medium bg-[#F0EEE7] text-[#000000] px-3 py-1.5 rounded-[2px]"
          >
            Let's talk ↗
          </a>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="text-[#F0EEE7] p-2 border border-[#33332F] bg-[#111110] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-[#F0EEE7]"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#000000] z-50 px-6 py-8 flex flex-col justify-between border-t border-[#33332F]">
          <nav className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-[#A7A69F] font-mono">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-2xl uppercase tracking-tight text-[#F0EEE7] hover:text-[#FFFFFF]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#33332F] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary text-center justify-center py-3.5"
            >
              Let's talk ↗
            </a>

            {onToggleMotion && (
              <button
                onClick={onToggleMotion}
                className="text-xs text-left text-[#A7A69F] py-2"
              >
                Motion preference: {motionPaused ? 'Reduced (Click to enable)' : 'Standard (Click to reduce)'}
              </button>
            )}

            <div className="text-[11px] text-[#A7A69F] pt-2">
              The Fundraiser / Fundraisers Web · Proof of Work
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
