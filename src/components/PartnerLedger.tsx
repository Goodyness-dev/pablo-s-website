import React from 'react';
import { PARTNERS_LEDGER } from '../data/projects';

export const PartnerLedger: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Along the way
          </span>
          <h2 className="text-section-title text-[#F0EEE7] mb-4">
            Built with others.
          </h2>
          <p className="font-body text-[#B8B6AD] text-base sm:text-lg max-w-[640px]">
            The collaborations and roles that became part of the story.
          </p>
        </div>

        {/* All Projects Cards Grid — Images as Main Thing, Details Underneath, No Inspect Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PARTNERS_LEDGER.map((partner) => (
            <article
              key={partner.id}
              className="border border-[#33332F] bg-[#111110] rounded-[2px] flex flex-col justify-between overflow-hidden hover:border-[#77776F] transition-all duration-300 group"
            >
              <div>
                {/* 1. Main Visual Asset on Top — Full Width of Card */}
                {partner.imageSrc && (
                  <div className="relative border-b border-[#33332F] bg-[#0A0A09] w-full">
                    <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#000000]">
                      <img
                        src={partner.imageSrc}
                        alt={partner.imageAlt || partner.name}
                        className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
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
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#F0EEE7] mb-3 group-hover:text-white transition-colors">
                    {partner.name}
                  </h3>

                  {/* Narrative Details */}
                  <p className="font-body text-sm sm:text-base text-[#B8B6AD] leading-relaxed mb-6">
                    {partner.details}
                  </p>
                </div>
              </div>

              {/* 3. Actions at Bottom of Card */}
              <div className="px-6 pb-6 pt-0 flex flex-col gap-2">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center justify-center text-xs tracking-wide py-2.5"
                >
                  <span>{partner.linkLabel}</span>
                </a>

                {partner.secondaryLink && (
                  <a
                    href={partner.secondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center font-mono text-xs text-[#A7A69F] hover:text-[#F0EEE7] hover:underline py-1"
                  >
                    {partner.secondaryLinkLabel}
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
