import React from 'react';
import { SERVICES } from '../data/services';
import { LightboxItem } from './ImageLightbox';

interface ServicesGridProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenLightbox }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-white/5 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
            WHAT WE DO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] mt-2 mb-3 tracking-tight">
            Agency Services &amp; Firepower
          </h2>
          <p className="font-body text-[#94A3B8] text-sm sm:text-base">
            Built for token launches, DeFi protocols, and Web3 utilities that need real eyes, active hands, and community momentum.
          </p>
        </div>

        {/* Minimalist Thin Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#06080F]/95 border border-white/[0.08] hover:border-[#6FD8FF]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* 1 Matching Generated Image Per Card */}
                {service.imageSrc && (
                  <div
                    onClick={() => {
                      if (onOpenLightbox && service.imageSrc) {
                        onOpenLightbox({
                          src: service.imageSrc,
                          alt: service.title,
                          title: service.title,
                          subtitle: service.punchline,
                          badge: `SERVICE 0${idx + 1}`,
                        });
                      }
                    }}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#030408] border border-white/[0.06] cursor-pointer"
                  >
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#04060A]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#6FD8FF]">
                      0{idx + 1}
                    </div>
                  </div>
                )}

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F8FAFC] mb-1 group-hover:text-[#BDE7FF] transition-colors">
                  {service.title}
                </h3>

                <p className="font-mono text-[11px] text-[#6FD8FF] uppercase tracking-wider mb-2.5">
                  "{service.punchline}"
                </p>

                <p className="font-body text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Minimalist Highlights */}
              <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                {service.highlights?.map((h: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-[#CBD5E1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6FD8FF]/80 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice Capsule */}
        <div className="mt-12 text-center p-3 sm:p-3.5 rounded-full bg-[#06080F]/80 max-w-[620px] mx-auto border border-white/10 shadow-sm">
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
