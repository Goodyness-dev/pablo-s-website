import React, { useState, useEffect } from 'react';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  motionPaused?: boolean;
  onToggleMotion?: () => void;
  activeSection: string;
  hidden?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  motionPaused = false,
  onToggleMotion,
  activeSection,
  hidden = false,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (hidden) {
      setMobileMenuOpen(false);
    }
  }, [hidden]);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        hidden
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      } ${
        scrolled
          ? 'bg-[#080A0F]/85 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Identity Pill */}
        <a
          href="#root"
          className="flex items-center gap-2.5 px-2 py-1.5 rounded-full hover:bg-white/5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6FD8FF]"
          onClick={(e) => handleLinkClick(e, '#root')}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-[#6FD8FF] transition-colors p-[1px] bg-[#0E1226] shadow-sm">
            <img
              src="/assets/logo-face.jpg"
              alt="The Fundraiser Face Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight text-[#F8FAFC] group-hover:text-[#BDE7FF] transition-colors flex items-center gap-1">
                THE FUNDRAISER
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-[#6FD8FF] opacity-80 group-hover:opacity-100 transition-opacity">
                  <path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="hidden sm:inline-flex w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#64748B]">
              Fundraisers Web
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1 p-1 metallic-track">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider relative transition-all ${
                  isActive
                    ? 'metallic-btn-active'
                    : 'metallic-btn-inactive'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rotate-45 bg-[#6FD8FF] mr-1.5 shadow-[0_0_8px_#6FD8FF]" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Audio chime + Telegram CTA */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Audio Chime Toggle Pill */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Disable audio chimes' : 'Enable audio chimes'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all active:scale-95 ${
              soundEnabled
                ? 'bg-[#12172A] border-[#6FD8FF]/40 text-[#6FD8FF] shadow-[0_0_12px_rgba(111,216,255,0.2)]'
                : 'bg-[#0E1220]/70 border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20'
            }`}
            title={soundEnabled ? 'Crystalline Chimes: ON' : 'Crystalline Chimes: OFF'}
          >
            {soundEnabled ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span className="text-[11px] hidden sm:inline">Chime</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <span className="text-[11px] hidden sm:inline">Mute</span>
              </>
            )}
          </button>

          {/* Accessible Background Motion Toggle Button */}
          {onToggleMotion && (
            <button
              type="button"
              onClick={onToggleMotion}
              aria-label={motionPaused ? 'Resume background animation' : 'Pause background animation'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-mono transition-all active:scale-95 ${
                motionPaused
                  ? 'bg-[#1a1710] border-amber-400/40 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
                  : 'bg-[#0E1220]/70 border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20'
              }`}
              title={motionPaused ? 'Background motion: Paused' : 'Background motion: Active'}
            >
              {motionPaused ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span className="text-[11px] hidden sm:inline">Play</span>
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                  </svg>
                  <span className="text-[11px] hidden sm:inline">Motion</span>
                </>
              )}
            </button>
          )}

          {/* Primary Metallic Action Button */}
          <a
            href="https://t.me/Senor_Izyche"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-pill-primary px-4 py-2 text-xs hidden sm:inline-flex items-center gap-1.5"
          >
            <span>Work with us</span>
            <span className="text-[#6FD8FF]">↗</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-white/15 bg-[#0E1220] text-[#94A3B8] hover:text-[#F8FAFC] active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 bg-[#080A0F]/95 border-b border-white/10 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2 max-w-[1240px] mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-xs uppercase tracking-wider text-[#F8FAFC] hover:text-[#6FD8FF] py-2.5 px-3 rounded-xl hover:bg-white/5 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
              </a>
            ))}
            <a
              href="https://t.me/Senor_Izyche"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-pill-primary mt-2 w-full py-3 text-xs uppercase tracking-wider text-center"
            >
              Work with us (Telegram) ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
