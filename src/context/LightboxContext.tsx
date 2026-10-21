import React, { createContext, useContext, useState, useCallback } from 'react';
import { ImageLightbox, LightboxItem } from '../components/ImageLightbox';

interface LightboxContextType {
  openLightbox: (items: LightboxItem[], initialIndex?: number) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
  closeLightbox: () => {},
});

export const useLightbox = () => useContext(LightboxContext);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const openLightbox = useCallback((newItems: LightboxItem[], index = 0) => {
    setItems(newItems);
    setInitialIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <ImageLightbox
        isOpen={isOpen}
        onClose={closeLightbox}
        items={items}
        initialIndex={initialIndex}
      />
    </LightboxContext.Provider>
  );
};
