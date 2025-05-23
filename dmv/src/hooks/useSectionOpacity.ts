import { useEffect, useState, RefObject } from 'react';

/* Hook useSectionOpacity
* A custom hook that takes a "ref" to a DOM element (like a section).
* Uses "useState" to store "opacity", which is initially 0.
* Uses "useEffect" to add a scroll listener when the component mounts:
    -> Calculates the vertical center of the element and the screen.
    -> Measures the distance between them.
    -> Converts that distance into a ratio to set the element's opacity (closer = more visible).
    -> Calls the scroll logic once on mount to set the initial opacity.
    -> Cleans up the event listener on unmount.

* Returns the current opacity value as a number.
*/
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