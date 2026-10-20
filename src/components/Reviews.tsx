import React from 'react';
import { REVIEWS } from '../data/projects';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 border-b border-[#BDE7FF]/5 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#6FD8FF]">
            SOCIAL PROOF
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4FBFF] mt-2 mb-3">
            What Founders &amp; Partners Say
          </h2>
          <p className="font-body text-[#A8B4C8] text-base">
            Verified words from builders, community members, and launch partners who moved with us in the trenches.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="glass-card cut-corner p-6 md:p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Large Ice Quote Glyph */}
                <div className="font-display font-bold text-4xl text-[#6FD8FF]/40 leading-none mb-3">
                  “
                </div>
                <blockquote className="font-body text-base text-[#F4FBFF] leading-relaxed mb-6">
                  {review.quote}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold text-sm text-[#F4FBFF]">
                    {review.author}
                  </div>
                  <div className="font-mono text-xs text-[#A8B4C8]">
                    {review.role}
                  </div>
                </div>
                <span className="w-2 h-2 rotate-45 bg-[#6FD8FF]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
