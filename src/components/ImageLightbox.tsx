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
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

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
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'z' || e.key === 'Z') {
        setIsZoomed((prev) => !prev);
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

    // Swipe down to dismiss (if not zoomed)
    if (!isZoomed && dy > 90 && Math.abs(dx) < 60 && dt < 400) {
      onClose();
    }
    // Horizontal swipe navigation (if not zoomed)
    else if (!isZoomed && Math.abs(dx) > 60 && Math.abs(dy) < 60 && dt < 400) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image inspection viewer"
      className="fixed inset-0 z-50 w-screen h-[100dvh] flex flex-col justify-between p-2 sm:p-5 md:p-6 bg-[#000000]/98 backdrop-blur-md select-none"
      onClick={onClose}
    >
      {/* Top Header Chrome */}
      <div
        className="w-full max-w-[1312px] mx-auto flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#33332F] z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden mr-2">
          <span className="font-mono text-[11px] sm:text-xs text-[#A7A69F] flex-shrink-0">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="font-display font-bold text-xs sm:text-sm uppercase text-[#F0EEE7] truncate">
            {currentItem.title || 'Archival Record'}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Zoom Toggle Button */}
          <button
            type="button"
            onClick={() => setIsZoomed((prev) => !prev)}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase px-2.5 py-1 border border-[#33332F] text-[#F0EEE7] hover:border-[#F0EEE7] bg-[#111110] rounded-[2px] transition-colors"
          >
            <span>{isZoomed ? '⊖' : '⊕'}</span>
            <span>{isZoomed ? 'Reset' : 'Zoom'}</span>
          </button>

          {/* Browser Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs uppercase px-2.5 py-1 border border-[#33332F] text-[#F0EEE7] hover:border-[#F0EEE7] bg-[#111110] rounded-[2px] transition-colors"
          >
            <span>⛶</span>
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="font-mono text-[11px] sm:text-xs uppercase px-3 py-1 border border-[#33332F] text-[#F0EEE7] hover:border-[#F0EEE7] bg-[#111110] rounded-[2px] transition-colors font-medium"
          >
            ✕ Close
          </button>
        </div>
      </div>

      {/* Center Image Stage */}
      <div
        className="relative flex-1 w-full max-w-[1312px] mx-auto flex items-center justify-center overflow-auto my-1 sm:my-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`relative flex items-center justify-center w-full h-full p-1 sm:p-2 transition-transform duration-200 ${
            isZoomed ? 'scale-150 sm:scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
        >
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title || 'Enlarged artifact'}
            className="w-auto h-auto max-w-full max-h-[82dvh] sm:max-h-[78vh] object-contain border border-[#33332F] bg-[#0A0A09] rounded-[2px] shadow-2xl filter contrast-105"
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
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 border border-[#33332F] bg-[#111110]/90 text-[#F0EEE7] hover:border-[#F0EEE7] rounded-[2px] flex items-center justify-center transition-colors z-20 backdrop-blur-sm text-sm sm:text-base"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next receipt"
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 border border-[#33332F] bg-[#111110]/90 text-[#F0EEE7] hover:border-[#F0EEE7] rounded-[2px] flex items-center justify-center transition-colors z-20 backdrop-blur-sm text-sm sm:text-base"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Bottom Metadata Drawer */}
      <div
        className="w-full max-w-[1312px] mx-auto pt-2.5 sm:pt-3 border-t border-[#33332F] z-20 text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[#A7A69F] font-mono">
          <p className="font-body text-xs sm:text-sm text-[#F0EEE7] leading-relaxed truncate">
            {currentItem.caption || currentItem.subtitle || currentItem.alt}
          </p>
          <div className="flex items-center gap-3 text-[11px] flex-shrink-0">
            {currentItem.date && <span>Date: {currentItem.date}</span>}
            <span className="hidden md:inline">Click image or double-tap to zoom</span>
            <span className="hidden sm:inline opacity-75">· Esc to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
