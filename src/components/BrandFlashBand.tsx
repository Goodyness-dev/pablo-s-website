import React from 'react';

interface BrandFlashBandProps {
  text?: string;
  className?: string;
}

export const BrandFlashBand: React.FC<BrandFlashBandProps> = ({
  text = 'THE FUNDRAISER · WE DELIVER · PROOF OF WORK · VALUE BREEDS VALUE · ALL ORGANIC · BUILT NOT JUST BOOSTED ·',
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-[#5589C2] py-4 md:py-6 overflow-hidden select-none border-y-2 border-black ${className}`}
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display font-extrabold text-xl md:text-3xl text-black uppercase tracking-wider">
        <span>{text}</span>
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
      </div>
    </div>
  );
};
