import React from 'react';
import { PARTNERS_LEDGER } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

interface PartnerLedgerProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const PartnerLedger: React.FC<PartnerLedgerProps> = ({ onOpenLightbox }) => {
  const handleInspect = (src: string, name: string, details: string) => {
    if (!onOpenLightbox) return;
    onOpenLightbox({
      src,
      title: name,
      caption: details,
      alt: name,
    });
  };

  return (
    <section className="relative py-24 md:py-32 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Alliances & Collaborations
          </span>
          <h2 className="text-section-title text-[#F0EEE7] mb-4">
            People and projects we have worked alongside.
          </h2>
          <p className="font-body text-[#B8B6AD] text-base sm:text-lg max-w-[640px]">
            Strategic partnerships, ambassadorships, and community allocations across Web3 ecosystems. All projects shown with verified campaign materials.
          </p>
        </div>

        {/* All Projects Cards Grid — Images as Main Thing, Details Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PARTNERS_LEDGER.map((partner) => (
            <article
              key={partner.id}
              className="border border-[#33332F] bg-[#111110] rounded-[2px] flex flex-col justify-between overflow-hidden hover:border-[#77776F] transition-all duration-300 group"
            >
              <div>
                {/* 1. Main Visual Asset on Top */}
                {partner.imageSrc && (
                  <div className="relative border-b border-[#33332F] bg-[#0A0A09] p-3 sm:p-4">
                    <button
                      type="button"
                      onClick={() => handleInspect(partner.imageSrc!, partner.name, partner.details)}
                      className="w-full text-left group/btn cursor-zoom-in block"
                    >
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#000000] rounded-[2px] flex items-center justify-center">
                        <img
                          src={partner.imageSrc}
                          alt={partner.imageAlt || partner.name}
                          className="w-full h-full object-contain filter contrast-105 group-hover/btn:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Tap to Zoom Cue */}
                      <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#A7A69F]">
                        <span>Campaign Poster</span>
                        <span className="underline group-hover/btn:text-[#F0EEE7]">Inspect ↗</span>
                      </div>
                    </button>
                  </div>
                )}

                {/* 2. Project Details Directly Under the Image */}
                <div className="p-6 sm:p-7">
                  
                  {/* Category & Date Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#A7A69F] mb-3">
                    <span className="truncate">{partner.category}</span>
                    <span className="flex-shrink-0 ml-2">{partner.date}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#F0EEE7] mb-2 group-hover:text-white transition-colors">
                    {partner.name}
                  </h3>

                  {/* Relationship Badge / Role */}
                  <div className="inline-block border border-[#33332F] bg-[#0A0A09] px-2.5 py-1 text-xs font-mono text-[#F0EEE7] rounded-[2px] mb-4">
                    {partner.relationship}
                  </div>

                  {/* Narrative Details */}
                  <p className="font-body text-sm sm:text-base text-[#B8B6AD] leading-relaxed mb-6">
                    {partner.details}
                  </p>
                </div>
              </div>

              {/* 3. Action Destination Link at Bottom of Card */}
              <div className="px-6 pb-6 pt-0 border-t border-transparent">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center justify-center text-xs tracking-wide py-2.5"
                >
                  <span>Open {partner.linkLabel}</span>
                  <span>↗</span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
