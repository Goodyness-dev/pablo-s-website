import React, { useState } from 'react';
import { REVIEWS } from '../data/projects';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
            Their words
          </span>
          <h2 className="text-section-title text-[#F0EEE7]">
            From the people we worked with.
          </h2>
        </div>

        {/* Editorial Feature Quote */}
        <div className="border border-[#33332F] bg-[#111110] p-8 sm:p-12 md:p-16 rounded-[2px]">
          <div className="max-w-[900px]">
            
            {/* Quotation text */}
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F0EEE7] leading-relaxed mb-8">
              “{current.quote}”
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#33332F]">
              <div>
                <span className="font-display font-bold text-lg uppercase tracking-tight text-[#F0EEE7] block">
                  {current.author}
                </span>
                <span className="font-mono text-xs text-[#A7A69F] block">
                  {current.role} · {current.context}
                </span>
                <a
                  href={current.verifiedSource || "https://t.me/thefundraiserweb"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#A7A69F] hover:text-[#F0EEE7] underline mt-2 transition-colors"
                >
                  Read the original message ↗
                </a>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#A7A69F] mr-3">
                  0{currentIndex + 1} / 0{REVIEWS.length}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 border border-[#33332F] bg-[#0A0A09] text-[#F0EEE7] hover:border-transparent hover:bg-gradient-to-r hover:from-[#C1E9C2] hover:to-[#5589C2] hover:text-[#060B12] hover:shadow-[0_0_16px_rgba(193,233,194,0.5),0_0_24px_rgba(85,137,194,0.4)] flex items-center justify-center rounded-[2px] transition-all focus:outline-none focus:ring-2 focus:ring-[#C1E9C2] active:scale-95"
                  aria-label="Previous quote"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 border border-[#33332F] bg-[#0A0A09] text-[#F0EEE7] hover:border-transparent hover:bg-gradient-to-r hover:from-[#C1E9C2] hover:to-[#5589C2] hover:text-[#060B12] hover:shadow-[0_0_16px_rgba(193,233,194,0.5),0_0_24px_rgba(85,137,194,0.4)] flex items-center justify-center rounded-[2px] transition-all focus:outline-none focus:ring-2 focus:ring-[#C1E9C2] active:scale-95"
                  aria-label="Next quote"
                >
                  →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
