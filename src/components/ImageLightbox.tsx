import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface LightboxItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
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
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Touch gesture refs
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const initialPinchDistRef = useRef<number | null>(null);
  const initialZoomOnPinchRef = useRef<number>(1);
  const lastTapRef = useRef<number>(0);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      setPan({ x: 0, y: 0 });
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
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(3.5, z + 0.5));
      } else if (e.key === '-' || e.key === '_') {
        setZoomLevel((z) => {
          const next = Math.max(1, z - 0.5);
          if (next === 1) setPan({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0') {
        setZoomLevel(1);
        setPan({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  // Mouse pan / drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Double-tap or double-click to toggle zoom
  const handleDoubleTap = () => {
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setPan({ x: 0, y: 0 });
    } else {
      setZoomLevel(1.8);
      setPan({ x: 0, y: 0 });
    }
  };

  // Mobile Touch Gestures (Pinch to zoom, pan, swipe navigate, swipe down dismiss)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const now = Date.now();
      // Double tap detection (< 300ms)
      if (now - lastTapRef.current < 300) {
        handleDoubleTap();
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: now };
      if (zoomLevel > 1) {
        setIsDragging(true);
        setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
      }
    } else if (e.touches.length === 2) {
      // Pinch start
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialZoomOnPinchRef.current = zoomLevel;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomLevel > 1 && isDragging) {
      const touch = e.touches[0];
      setPan({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    } else if (e.touches.length === 2 && initialPinchDistRef.current) {
      // Pinch zoom
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = dist / initialPinchDistRef.current;
      const nextZoom = Math.min(3.5, Math.max(1, initialZoomOnPinchRef.current * scale));
      setZoomLevel(nextZoom);
      if (nextZoom === 1) {
        setPan({ x: 0, y: 0 });
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    initialPinchDistRef.current = null;

    if (e.touches.length === 0 && touchStartRef.current && zoomLevel === 1) {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Swipe down to dismiss (>90px down within 400ms)
      if (deltaY > 90 && Math.abs(deltaX) < 80 && deltaTime < 400) {
        onClose();
        return;
      }

      // Horizontal swipe navigation
      if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 60 && deltaTime < 400) {
        if (deltaX < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Zoom Inspection Viewer"
      className="fixed inset-0 z-50 flex flex-col justify-between p-3 sm:p-6 bg-black/92 backdrop-blur-2xl select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Floating Chrome Bar */}
      <div
        className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-3 z-20 pt-safe"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Item Counter / Brand Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-[#121626]/80 border border-white/10 backdrop-blur-md font-mono text-xs text-[#A8B4C8]">
            <span className="text-[#6FD8FF] font-semibold">{currentIndex + 1}</span>
            <span className="text-[#64748B] mx-1">/</span>
            <span>{items.length}</span>
          </div>
          {currentItem.badge && (
            <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-[#FFE49A]/10 border border-[#FFE49A]/30 font-mono text-[11px] text-[#FFE49A] font-bold">
              {currentItem.badge}
            </span>
          )}
        </div>

        {/* Zoom Controls Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#121626]/90 border border-white/12 backdrop-blur-md shadow-lg">
          <button
            type="button"
            onClick={() => {
              setZoomLevel((z) => Math.max(1, z - 0.5));
              if (zoomLevel <= 1.5) setPan({ x: 0, y: 0 });
            }}
            disabled={zoomLevel <= 1}
            aria-label="Zoom out"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all font-mono text-base"
          >
            −
          </button>
          <button
            type="button"
            onClick={() => {
              setZoomLevel(1);
              setPan({ x: 0, y: 0 });
            }}
            aria-label="Reset zoom"
            className="px-2.5 py-1 rounded-full text-xs font-mono text-[#6FD8FF] hover:bg-white/10 transition-colors"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(3.5, z + 0.5))}
            disabled={zoomLevel >= 3.5}
            aria-label="Zoom in"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all font-mono text-base"
          >
            +
          </button>
        </div>

        {/* Close Button Pill */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="px-4 py-2 rounded-full bg-[#161B2B]/90 border border-white/15 text-white/90 hover:text-white hover:bg-white/15 active:scale-95 font-mono text-xs flex items-center gap-1.5 transition-all shadow-md"
        >
          <span>✕</span>
          <span className="hidden sm:inline">Close</span>
        </button>
      </div>

      {/* Main Viewport Stage */}
      <div
        className="relative flex-1 w-full max-w-[1200px] mx-auto flex items-center justify-center overflow-hidden my-3 sm:my-4"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={() => handleDoubleTap()}
        style={{
          cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
        }}
      >
        {/* Dual-Layer Ambient Glow Underlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 filter blur-3xl scale-110 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${currentItem.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        {/* Sharp Scaled Foreground Image Container */}
        <div
          className="relative transition-transform duration-100 ease-out flex items-center justify-center max-w-full max-h-[75vh]"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
        >
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title || 'Enlarged proof artifact'}
            className="max-w-[90vw] max-h-[68vh] sm:max-h-[72vh] object-contain rounded-xl sm:rounded-2xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] pointer-events-none"
            loading="eager"
            draggable={false}
          />
        </div>

        {/* Previous / Next Arrow Controls (Desktop & Tablet) */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#121626]/85 border border-white/15 text-white/80 hover:text-white hover:bg-[#1E253B] active:scale-95 flex items-center justify-center backdrop-blur-md shadow-xl transition-all z-20"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#121626]/85 border border-white/15 text-white/80 hover:text-white hover:bg-[#1E253B] active:scale-95 flex items-center justify-center backdrop-blur-md shadow-xl transition-all z-20"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Bottom Metadata Drawer Bar */}
      <div
        className="w-full max-w-[840px] mx-auto z-20 pb-safe"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="metallic-card px-4 sm:px-6 py-3 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xl">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6FD8FF]" />
              <h4 className="font-display font-bold text-sm sm:text-base text-[#F8FAFC]">
                {currentItem.title || 'Verified Artifact'}
              </h4>
            </div>
            {currentItem.subtitle && (
              <p className="font-mono text-xs text-[#94A3B8]">
                {currentItem.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t sm:border-t-0 border-white/10 font-mono text-xs text-[#64748B]">
            <span className="hidden sm:inline">Double-tap or pinch to zoom</span>
            <span className="sm:hidden">Pinch to zoom · Swipe down to exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
