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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080C]/85 backdrop-blur-md border-b border-[#BDE7FF]/10 py-3 md:py-4 shadow-[0_4px_24px_rgba(5,6,10,0.8)]'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6FD8FF] rounded-lg"
          onClick={(e) => handleLinkClick(e, '#root')}
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-[#BDE7FF]/30 group-hover:border-[#6FD8FF] transition-colors p-[1px] bg-[#0E1226]">
            <img
              src="/assets/logo-face.jpg"
              alt="The Fundraiser Face Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm md:text-base tracking-tight text-[#F4FBFF] group-hover:text-[#BDE7FF] transition-colors">
              THE FUNDRAISER
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B778C]">
              Fundraisers Web
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 ${
                  isActive ? 'text-[#F4FBFF]' : 'text-[#A8B4C8] hover:text-[#BDE7FF]'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rotate-45 bg-[#6FD8FF] mr-1.5 shadow-[0_0_6px_#6FD8FF]" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Sound Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Chime Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Disable audio chimes' : 'Enable audio chimes'}
            className="p-2 rounded-full border border-[#BDE7FF]/20 bg-[#0E1226]/60 text-[#BDE7FF] hover:text-[#F4FBFF] hover:border-[#6FD8FF] transition-colors focus:outline-none"
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

          {/* Primary Action Button */}
          <a
            href="https://t.me/Senor_Izyche"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full font-body font-medium text-xs md:text-sm bg-[#FFE49A] text-[#05060A] hover:bg-[#F2C14E] transition-all transform active:scale-95 shadow-[0_2px_12px_rgba(242,193,78,0.3)]"
          >
            Work with us
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#BDE7FF]/20 text-[#BDE7FF]"
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
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#07080C]/95 border-b border-[#BDE7FF]/15 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-sm uppercase tracking-widest text-[#F4FBFF] hover:text-[#6FD8FF] py-2 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
              </a>
            ))}
            <a
              href="https://t.me/Senor_Izyche"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 rounded-full font-body font-semibold text-center text-sm bg-[#FFE49A] text-[#05060A]"
            >
              Work with us (Telegram)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
