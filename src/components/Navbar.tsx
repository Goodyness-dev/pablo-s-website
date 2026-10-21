import React, { useState, useEffect } from 'react';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Recent Work', href: '#recent-work' },
    { name: 'Tech & Utilities', href: '#tech' },
    { name: 'The Cut', href: '#story' },
    { name: 'Services', href: '#services' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-[#5589C2]/20 py-3 md:py-4 shadow-[0_4px_24px_rgba(0,0,0,0.9)]'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo with White Sticker Outline */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={(e) => handleLinkClick(e, '#root')}
        >
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-white shadow-[0_0_12px_rgba(85,137,194,0.4)] p-[1px] bg-black">
            <img
              src="/assets/logo-face.jpg"
              alt="The Fundraiser Face Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm md:text-base tracking-wide text-white group-hover:text-[#5589C2] transition-colors">
              THE FUNDRAISER
            </span>
            <span className="font-body font-bold text-[10px] uppercase tracking-wider text-[#5589C2]">
              Official Agency Kit
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-body font-medium text-xs tracking-wider transition-colors relative py-1 flex items-center gap-1.5 ${
                  isActive ? 'text-white font-bold' : 'text-[#C5DAF0] hover:text-[#5589C2]'
                }`}
              >
                {isActive && (
                  <span className="text-[#C1E9C2] font-bold text-xs">★</span>
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Chime Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Disable audio' : 'Enable audio'}
            className="p-2 rounded-full border border-[#5589C2]/30 bg-[#0B121D] text-[#5589C2] hover:text-white transition-colors focus:outline-none"
            title={soundEnabled ? 'Sound On' : 'Sound Off'}
          >
            {soundEnabled ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            )}
          </button>

          {/* Primary Action Button with Hard Offset Shadow */}
          <a
            href="https://t.me/Senor_Izyche"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-body font-bold text-xs md:text-sm bg-[#5589C2] text-black shadow-[3px_3px_0px_#C1E9C2] hover:translate-x-0.5 hover:translate-y-0.5 transition-all transform active:scale-95"
          >
            Work with us
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#5589C2]/30 text-[#5589C2]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#04070C]/98 border-b border-[#5589C2]/20 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body font-semibold text-sm uppercase tracking-wider text-white hover:text-[#C1E9C2] py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-[#5589C2]">★</span>
              </a>
            ))}
            <a
              href="https://t.me/Senor_Izyche"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 rounded-full font-body font-bold text-center text-sm bg-[#5589C2] text-black shadow-[3px_3px_0px_#C1E9C2]"
            >
              Work with us (Telegram)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
