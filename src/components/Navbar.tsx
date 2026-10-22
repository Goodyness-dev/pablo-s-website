import React, { useState, useEffect } from 'react';

interface NavbarProps {
  motionPaused?: boolean;
  onToggleMotion?: () => void;
  activeSection: string;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  motionPaused = false,
  onToggleMotion,
  activeSection,
  theme = 'dark',
  onToggleTheme,
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

  // Lock scroll and close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#000000] border-b border-[#33332F] py-3.5 shadow-md'
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
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Light / Dark Mode Toggle Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="text-xs text-[#A7A69F] hover:text-[#F0EEE7] transition-colors py-1 px-2.5 border border-[#33332F] hover:border-[#77776F] bg-[#111110] rounded-[2px] flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EEE7]"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#141413]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#FFE49A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    <span>Light</span>
                  </>
                )}
              </button>
            )}

            {onToggleMotion && (
              <button
                type="button"
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

          {/* Mobile Actions & Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            {/* Mobile Light Mode Toggle Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                className="text-[#F0EEE7] p-2 border border-[#33332F] bg-[#111110] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-[#F0EEE7]"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <svg className="w-4 h-4 text-[#141413]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#FFE49A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary text-xs py-1.5 px-2.5 sm:px-3 tracking-wide"
            >
              Let's talk ↗
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
      </header>

      {/* Mobile Fullscreen Backdrop & Menu Drawer: 100% Solid Background Prevents Any Overlap */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#000000] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto overscroll-contain transition-colors duration-200 md:hidden"
          style={{ minHeight: '100dvh' }}
        >
          {/* Solid Opaque Background Layer to prevent any site content bleed-through */}
          <div className="absolute inset-0 bg-[#000000] -z-10 pointer-events-none" />

          <nav className="flex flex-col gap-6 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#A7A69F] font-mono">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-2xl uppercase tracking-tight text-[#F0EEE7] hover:text-[#FFFFFF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-[#33332F] flex flex-col gap-4 relative z-10">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary text-center justify-center py-3.5"
            >
              Let's talk ↗
            </a>

            {/* Mobile In-Drawer Theme Switcher */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="flex items-center justify-between w-full py-2.5 px-3 border border-[#33332F] bg-[#111110] rounded-[2px] text-xs text-[#F0EEE7] transition-colors hover:border-[#77776F]"
              >
                <span className="font-mono uppercase tracking-wider text-[11px] text-[#A7A69F]">
                  Theme appearance
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  {theme === 'light' ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#141413]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                      Light mode (Tap to switch)
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#FFE49A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </svg>
                      Dark mode (Tap to switch)
                    </>
                  )}
                </span>
              </button>
            )}

            {onToggleMotion && (
              <button
                type="button"
                onClick={onToggleMotion}
                className="text-xs text-left text-[#A7A69F] hover:text-[#F0EEE7] py-1 transition-colors"
              >
                Motion preference: {motionPaused ? 'Reduced (Tap to enable)' : 'Standard (Tap to reduce)'}
              </button>
            )}

            <div className="text-[11px] text-[#A7A69F] pt-2 font-mono">
              The Fundraiser / Fundraisers Web · Proof of Work
            </div>
          </div>
        </div>
      )}
    </>
  );
};
