import { useEffect, useState, RefObject } from 'react';

export function useSectionOpacity(ref: RefObject<HTMLElement | null>): number {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;

      const distance = Math.abs(sectionCenter - screenCenter);
      const maxDistance = windowHeight / 2;
      const ratio = Math.max(0, 1 - distance / maxDistance);

      setOpacity(ratio);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return opacity;
}