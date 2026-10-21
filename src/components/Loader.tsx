import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (sessionStorage.getItem('fundraiser_loaded_v2')) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 350);  // White cut line strike
    const t2 = setTimeout(() => setStep(2), 850);  // Facet split & face sticker pop
    const t3 = setTimeout(() => setStep(3), 1350); // White flash
    const t4 = setTimeout(() => {
      sessionStorage.setItem('fundraiser_loaded_v2', 'true');
      onComplete();
    }, 1750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('fundraiser_loaded_v2', 'true');
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
        {/* Step 0: Rough Stone Outline */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-all duration-500 ${
            step >= 2 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <polygon
            points="22,30 38,18 68,22 84,38 78,74 54,88 26,78 16,50"
            fill="none"
            stroke="#5589C2"
            strokeWidth="1.75"
            strokeDasharray="4 2"
          />
        </svg>

        {/* Step 1: Bright White Laser Cut Line */}
        {step >= 1 && step < 3 && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="w-full h-[3px] bg-white shadow-[0_0_16px_#FFFFFF] transform -rotate-45 animate-pulse" />
          </div>
        )}

        {/* Step 2: Face Sticker Pops In with White Outline */}
        {step >= 2 && (
          <div className="relative animate-in zoom-in-75 duration-300 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-[0_0_28px_rgba(85,137,194,0.8)] bg-black">
              <img
                src="/assets/logo-face.jpg"
                alt="The Fundraiser Face Mark"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Star Glint */}
            <span className="absolute -top-2 -right-2 text-[#C1E9C2] font-bold text-lg animate-ping">
              ★
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#C1E9C2]">
          {step === 0 && 'Extracting rough stone...'}
          {step === 1 && 'Cleaving facets...'}
          {step === 2 && 'THE FUNDRAISER · READY'}
          {step >= 3 && 'Pressure makes diamonds.'}
        </p>
      </div>

      <button
        onClick={handleSkip}
        className="mt-6 text-xs font-mono text-[#5589C2] hover:text-white transition-colors py-1.5 px-4 rounded border border-white/10"
      >
        Skip [ESC]
      </button>
    </div>
  );
};
