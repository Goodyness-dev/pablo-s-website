import React from 'react';

interface BottomDockProps {
  activeSection: string;
}

export const BottomDock: React.FC<BottomDockProps> = ({ activeSection }) => {
  const navItems = [
    {
      id: 'story',
      label: 'Story',
      href: '#story',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 9 12 22 22 9 12 2" />
        </svg>
      ),
    },
    {
      id: 'work',
      label: 'Work',
      href: '#work',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
    {
      id: 'services',
      label: 'Services',
      href: '#services',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: 'reviews',
      label: 'Reviews',
      href: '#reviews',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Floating Navigation Dock"
      className="floating-bottom-dock"
    >
      {/* Brand Mark Pill on Left */}
      <a
        href="#root"
        onClick={(e) => handleLinkClick(e, '#root')}
        aria-label="Back to top"
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full hover:bg-white/10 active:scale-95 transition-all text-xs font-display font-extrabold tracking-tight text-[#F8FAFC]"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden border border-[#BDE7FF]/40 bg-[#0E1226]">
          <img
            src="/assets/logo-face.jpg"
            alt="The Fundraiser"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="hidden sm:inline">Fundraiser</span>
      </a>

      {/* Vertical Divider */}
      <div className="w-[1px] h-5 bg-white/15 mx-0.5" />

      {/* Navigation Icons Group */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              aria-label={item.label}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full font-mono text-xs transition-all ${
                isActive
                  ? 'bg-gradient-to-b from-[#1E263D] to-[#121626] text-[#F8FAFC] border border-white/20 shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 active:scale-95'
              }`}
            >
              {item.icon}
              <span className={`text-[11px] ${isActive ? 'font-semibold' : 'hidden md:inline'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6FD8FF] shadow-[0_0_6px_#6FD8FF]" />
              )}
            </a>
          );
        })}
      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-5 bg-white/15 mx-0.5" />

      {/* Direct Contact Button (WhatsApp / Telegram) with Pure Dark Metallic Finish */}
      <a
        href="https://t.me/Senor_Izyche"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Fundraiser on Telegram"
        className="metallic-pill-primary px-3 py-2 text-xs flex items-center gap-1.5 min-h-[38px] group"
      >
        <svg className="w-4 h-4 text-[#6FD8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
        <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-[#F8FAFC]">
          Telegram
        </span>
      </a>
    </nav>
  );
};
