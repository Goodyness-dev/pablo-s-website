import React from 'react';
import { SERVICES } from '../data/services';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 border-b border-white/5 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
            WHAT WE DO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] mt-2 mb-4 tracking-tight">
            Agency Services &amp; Firepower
          </h2>
          <p className="font-body text-[#94A3B8] text-base sm:text-lg">
            Built for token launches, DeFi protocols, and Web3 utilities that need real eyes, active hands, and community momentum.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`metallic-card p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:border-[#6FD8FF]/40 transition-all ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#121626] border border-white/12 flex items-center justify-center text-[#6FD8FF] group-hover:scale-110 group-hover:border-[#6FD8FF]/50 transition-all shadow-inner">
                    {service.icon === 'raid' && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    )}
                    {service.icon === 'community' && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    )}
                    {service.icon === 'ambassador' && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    )}
                    {service.icon === 'spaces' && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                      </svg>
                    )}
                    {service.icon === 'trending' && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        <polyline points="17 6 23 6 23 12"></polyline>
                      </svg>
                    )}
                  </div>
                  <span className="font-mono text-xs text-[#64748B]">0{idx + 1}</span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F8FAFC] mb-2 group-hover:text-[#BDE7FF] transition-colors">
                  {service.title}
                </h3>

                <p className="font-mono text-xs text-[#6FD8FF] uppercase tracking-wider mb-3">
                  "{service.punchline}"
                </p>

                <p className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-white/5">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#F8FAFC]">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#6FD8FF]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice Capsule */}
        <div className="mt-12 text-center p-4 rounded-full metallic-well max-w-[640px] mx-auto border border-white/10 shadow-sm">
          <p className="font-mono text-xs text-[#94A3B8]">
            Rates depend on project scope and deliverables.{' '}
            <a
              href="https://t.me/Senor_Izyche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE49A] hover:underline font-semibold ml-1 inline-flex items-center gap-1"
            >
              <span>Message for custom quotes</span>
              <span>↗</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
