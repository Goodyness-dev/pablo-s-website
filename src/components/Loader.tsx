import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0); // 0: rough, 1: laser cut, 2: facet burst, 3: flash & complete

  useEffect(() => {
    // Check if session already loaded
    if (sessionStorage.getItem('fundraiser_loaded')) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 400);  // Laser cut strike
    const t2 = setTimeout(() => setStep(2), 950);  // Facet lock
    const t3 = setTimeout(() => setStep(3), 1450); // White flash
    const t4 = setTimeout(() => {
      sessionStorage.setItem('fundraiser_loaded', 'true');
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('fundraiser_loaded', 'true');
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05060A] transition-opacity duration-500 ${
        step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
        {/* Step 0: Rough stone outline */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transition-all duration-500 ${
            step >= 2 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <polygon
            points="22,30 38,18 68,22 84,38 78,74 54,88 26,78 16,50"
            fill="none"
            stroke="#2FA8E6"
            strokeWidth="2"
            strokeDasharray="4 2"
            strokeOpacity="0.8"
          />
        </svg>

        {/* Step 1: Laser cut strike line */}
        {step >= 1 && step < 3 && (
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
          >
            <div
              className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#6FD8FF] to-transparent shadow-[0_0_12px_#6FD8FF] transform -rotate-45 animate-pulse"
            />
          </div>
        )}

        {/* Step 2: Facet crystallization */}
        {step >= 2 && (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-in zoom-in-95 duration-500 drop-shadow-[0_0_24px_rgba(111,216,255,0.8)]"
          >
            <polygon
              points="10,38 28,16 72,16 90,38 50,92"
              fill="#0E1226"
              stroke="#BDE7FF"
              strokeWidth="2"
            />
            <polygon points="28,16 72,16 62,38 38,38" fill="#F4FBFF" fillOpacity="0.95" />
            <polygon points="10,38 28,16 38,38" fill="#BDE7FF" fillOpacity="0.8" />
            <polygon points="72,16 90,38 62,38" fill="#6FD8FF" fillOpacity="0.7" />
            <polygon points="38,38 50,92 62,38" fill="#2FA8E6" fillOpacity="0.9" />
          </svg>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#BDE7FF]/80">
          {step === 0 && 'Extracting rough stone...'}
          {step === 1 && 'Cleaving facets...'}
          {step === 2 && 'Polishing brilliant gem...'}
          {step >= 3 && 'Pressure makes diamonds.'}
        </p>
      </div>

      <button
        onClick={handleSkip}
        className="mt-6 text-xs font-mono text-[#6B778C] hover:text-[#BDE7FF] transition-colors py-2 px-4 rounded border border-white/5"
      >
        Skip [ESC]
      </button>
    </div>
  );
};
