import React, { useState } from 'react';
import { PARTNERS_LEDGER } from '../data/projects';
import { LightboxItem } from './ImageLightbox';

interface PartnerLedgerProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const PartnerLedger: React.FC<PartnerLedgerProps> = ({ onOpenLightbox }) => {
  const [expandedId, setExpandedId] = useState<string | null>('ether-archive');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
    <section className="relative py-24 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Alliances & Collaborations
          </span>
          <h2 className="text-section-title text-[#F0EEE7] mb-4">
            People and projects we have worked alongside.
          </h2>
          <p className="font-body text-[#B8B6AD] text-base sm:text-lg max-w-[640px]">
            Strategic partnerships, ambassadorships, and community allocations across Web3 ecosystems.
          </p>
        </div>

        {/* Editorial Partner Ledger */}
        <div className="border border-[#33332F] bg-[#111110] divide-y divide-[#33332F] rounded-[2px]">
          {PARTNERS_LEDGER.map((partner) => {
            const isExpanded = expandedId === partner.id;
            return (
              <div key={partner.id} className="transition-colors">
                
                {/* Ledger Row Header */}
                <div
                  onClick={() => toggleExpand(partner.id)}
                  className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-[#161614] transition-colors"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(partner.id);
                    }
                  }}
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-display font-bold text-2xl uppercase tracking-tight text-[#F0EEE7]">
                      {partner.name}
                    </span>
                    <span className="font-mono text-xs text-[#A7A69F]">
                      {partner.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 text-xs font-mono text-[#A7A69F]">
                    <span>{partner.relationship}</span>
                    <span className="hidden sm:inline">{partner.date}</span>
                    <span className="text-[#F0EEE7] text-sm font-bold">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details & Artwork */}
                {isExpanded && (
                  <div className="px-6 pb-8 pt-2 border-t border-[#222220] bg-[#0C0C0B]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Partner Description & Links */}
                      <div className="md:col-span-8 flex flex-col justify-between">
                        <div>
                          <p className="font-body text-base sm:text-lg text-[#F0EEE7] leading-relaxed mb-6">
                            {partner.details}
                          </p>

                          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#A7A69F] mb-6">
                            <div>
                              <span className="block text-[10px] text-[#77776F] uppercase">Status</span>
                              <span className="text-[#F0EEE7]">{partner.status}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-[#77776F] uppercase">Date</span>
                              <span className="text-[#F0EEE7]">{partner.date}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <a
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs"
                          >
                            <span>Open {partner.linkLabel}</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </div>

                      {/* Right: Preserved Poster Artwork */}
                      {partner.imageSrc && (
                        <div className="md:col-span-4">
                          <button
                            type="button"
                            onClick={() => handleInspect(partner.imageSrc!, partner.name, partner.details)}
                            className="w-full text-left group cursor-zoom-in block border border-[#33332F] bg-[#080808] p-3 rounded-[2px]"
                          >
                            <div className="relative aspect-[3/4] bg-[#000000] overflow-hidden mb-2">
                              <img
                                src={partner.imageSrc}
                                alt={partner.imageAlt || partner.name}
                                className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                              />
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-[#A7A69F]">
                              <span>Official Poster Asset</span>
                              <span className="underline group-hover:text-[#F0EEE7]">Inspect ↗</span>
                            </div>
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
