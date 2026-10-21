import React, { useState } from 'react';
import { SERVICES, PROCESS_STEPS } from '../data/services';
import { LightboxItem } from './ImageLightbox';

interface ServicesSectionProps {
  onOpenLightbox?: (item: LightboxItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLightbox }) => {
  const [expandedId, setExpandedId] = useState<string | null>('campaigns');

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleInspectImage = (src?: string, alt?: string, title?: string) => {
    if (!src || !onOpenLightbox) return;
    onOpenLightbox({
      src,
      title: title || 'Service Capability',
      alt: alt || 'Service Artwork',
      caption: 'Campaign execution asset',
    });
  };

  return (
    <section id="services" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F]">
              03 / How we work
            </span>
          </div>

          <h2 className="text-section-title text-[#F0EEE7] mb-6">
            Attention is the start.<br />
            Community is the work.
          </h2>

          <p className="font-body text-[#B8B6AD] text-lg sm:text-xl max-w-[640px]">
            Choose the work your project needs. We define the scope before the campaign starts.
          </p>
        </div>

        {/* 5 Numbered Service Rows */}
        <div className="border-t border-[#33332F] divide-y divide-[#33332F] mb-24">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div key={service.id} className="transition-colors">
                
                {/* Row Header Button */}
                <button
                  type="button"
                  onClick={() => toggleRow(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 group focus:outline-none"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-[#A7A69F] flex-shrink-0">
                      {service.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#F0EEE7] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pl-12 md:pl-0">
                    <span className="font-body text-sm text-[#B8B6AD] hidden lg:inline max-w-[320px] text-right truncate">
                      {service.summary}
                    </span>
                    <span className="w-8 h-8 rounded-[2px] border border-[#33332F] bg-[#111110] flex items-center justify-center text-sm font-mono text-[#F0EEE7] group-hover:border-[#77776F] transition-colors">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="pb-10 pl-0 md:pl-16">
                    <div className="border border-[#33332F] bg-[#111110] p-6 sm:p-8 rounded-[2px]">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        
                        {/* Scope Summary & Deliverables */}
                        <div className="md:col-span-8">
                          <p className="font-body text-base sm:text-lg text-[#F0EEE7] leading-relaxed mb-6 font-medium">
                            {service.summary}
                          </p>

                          <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-3">
                            Scope Deliverables
                          </span>
                          <ul className="space-y-2.5 text-sm text-[#B8B6AD]">
                            {service.deliverables?.map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-3">
                                <span className="text-[#F0EEE7] font-bold">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Preserved Capability Artwork */}
                        {service.imageSrc && (
                          <div className="md:col-span-4">
                            <button
                              type="button"
                              onClick={() => handleInspectImage(service.imageSrc, service.imageAlt, service.title)}
                              className="w-full text-left group cursor-zoom-in block border border-[#33332F] bg-[#0A0A09] p-3 rounded-[2px]"
                            >
                              <div className="relative aspect-[16/10] overflow-hidden mb-2">
                                <img
                                  src={service.imageSrc}
                                  alt={service.imageAlt || service.title}
                                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                                />
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-[#A7A69F]">
                                <span>Execution Reference</span>
                                <span className="underline group-hover:text-[#F0EEE7]">Inspect ↗</span>
                              </div>
                            </button>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Process Strip (M12) */}
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-6">
            Working Process
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#33332F]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col">
                <span className="font-mono text-xs text-[#A7A69F] mb-2">{step.step}</span>
                <h4 className="font-display font-bold text-xl uppercase tracking-tight text-[#F0EEE7] mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-sm text-[#B8B6AD] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
