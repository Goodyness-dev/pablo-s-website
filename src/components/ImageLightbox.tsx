import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface LightboxItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  caption?: string;
  date?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  initialIndex?: number;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  items,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Keyboard navigation & Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touchEnd = e.changedTouches[0];
    const dx = touchEnd.clientX - touchStartRef.current.x;
    const dy = touchEnd.clientY - touchStartRef.current.y;
    const dt = Date.now() - touchStartRef.current.time;

    // Swipe down to dismiss
    if (dy > 90 && Math.abs(dx) < 60 && dt < 400) {
      onClose();
    }
    // Horizontal swipe navigation
    else if (Math.abs(dx) > 60 && Math.abs(dy) < 60 && dt < 400) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartRef.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image inspection viewer"
      className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 bg-[#000000]/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Top Header Chrome */}
      <div
        className="w-full max-w-[1200px] mx-auto flex items-center justify-between pb-4 border-b border-[#33332F] z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#A7A69F]">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="font-display font-bold text-sm uppercase text-[#F0EEE7]">
            {currentItem.title || 'Archival Receipt'}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="font-mono text-xs uppercase px-3 py-1.5 border border-[#33332F] text-[#F0EEE7] hover:border-[#F0EEE7] bg-[#111110] rounded-[2px] transition-colors"
        >
          Close (Esc) ✕
        </button>
      </div>

      {/* Center Image Stage */}
      <div
        className="relative flex-1 w-full max-w-[1200px] mx-auto flex items-center justify-center overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative flex items-center justify-center w-full h-full p-2">
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title || 'Enlarged artifact'}
            className="w-auto h-auto max-w-full max-h-[75vh] object-contain border border-[#33332F] bg-[#0A0A09] rounded-[2px]"
            loading="eager"
            draggable={false}
          />
        </div>

        {/* Previous / Next Controls */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous receipt"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#33332F] bg-[#111110] text-[#F0EEE7] hover:border-[#F0EEE7] rounded-[2px] flex items-center justify-center transition-colors z-20"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next receipt"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#33332F] bg-[#111110] text-[#F0EEE7] hover:border-[#F0EEE7] rounded-[2px] flex items-center justify-center transition-colors z-20"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Bottom Metadata Drawer */}
      <div
        className="w-full max-w-[1200px] mx-auto pt-3 border-t border-[#33332F] z-20 text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#A7A69F] font-mono">
          <p className="font-body text-sm text-[#F0EEE7]">
            {currentItem.caption || currentItem.subtitle || currentItem.alt}
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            {currentItem.date && <span>Date: {currentItem.date}</span>}
            <span className="hidden sm:inline">Esc or click outside to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
