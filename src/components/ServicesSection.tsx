import React, { useState } from 'react';
import { SERVICES, PROCESS_STEPS } from '../data/services';
import { useLightbox } from '../context/LightboxContext';

export const ServicesSection: React.FC = () => {
  const { openLightbox } = useLightbox();
  const [expandedId, setExpandedId] = useState<string | null>('campaigns');

  const toggleRow = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* 10. Services Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F]">
              What we do
            </span>
          </div>

          <h2 className="text-section-title text-[#F0EEE7] mb-6">
            Give your project a sharper cut.
          </h2>

          <p className="font-body text-[#B8B6AD] text-lg sm:text-xl max-w-[640px]">
            Choose the work you need. We'll agree on the scope before we start.
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
                    <span className="font-body text-sm text-[#B8B6AD] hidden lg:inline max-w-[340px] text-right truncate">
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
                        <div className="md:col-span-8 flex flex-col justify-between">
                          <div>
                            <p className="font-body text-base sm:text-lg text-[#F0EEE7] leading-relaxed mb-6 font-medium">
                              {service.summary}
                            </p>

                            <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-3">
                              Included Deliverables
                            </span>
                            <ul className="space-y-2.5 text-sm text-[#B8B6AD] mb-8">
                              {service.deliverables?.map((item, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-3">
                                  <span className="text-[#F0EEE7] font-bold">—</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <a
                              href={`https://t.me/Senor_Izyche?text=${encodeURIComponent(`Hi @Senor_Izyche, I would like to discuss: ${service.title}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary text-xs"
                            >
                              <span>Discuss this service</span>
                              <span>↗</span>
                            </a>
                          </div>
                        </div>

                        {/* Preserved Capability Artwork */}
                        {service.imageSrc && (
                          <div className="md:col-span-4">
                            <div
                              className="border border-[#33332F] bg-[#0A0A09] rounded-[2px] overflow-hidden cursor-pointer group"
                              onClick={() =>
                                openLightbox([
                                  {
                                    src: service.imageSrc!,
                                    alt: service.imageAlt || service.title,
                                    title: service.title,
                                    caption: service.summary,
                                  },
                                ])
                              }
                            >
                              <div className="relative aspect-[16/10] overflow-hidden w-full">
                                <img
                                  src={service.imageSrc}
                                  alt={service.imageAlt || service.title}
                                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute top-2 right-2 bg-black/80 border border-[#33332F] px-2 py-0.5 text-[10px] font-mono text-[#F0EEE7] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2px]">
                                  ⛶ Fullscreen
                                </div>
                              </div>
                            </div>
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

        {/* Working Process */}
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Process
          </span>

          <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#F0EEE7] mb-8">
            From the first brief to the final report.
          </h3>

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
