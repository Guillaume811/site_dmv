import React, { useEffect, useRef, useState } from 'react';
import { GalleryType } from '../../types/gallery.types';
import styles from './Lightbox.module.scss';
import ArrowLeft from "../../assets/pictures/arrow-left.png";
import ArrowRight from "../../assets/pictures/arrow-right.png";

// Type
type LightboxProps = {
    pictures: GalleryType[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

/* Component Lightbox
* Receives "pictures", "index", "onClose", "onNext", and "onPrev" as props from "LightboxProps".

* Render logic :
* Uses the "index" to get the current picture from the "pictures" list and store it in "picture".
* Uses "useEffect" to listen for keyboard events while the lightbox is open:
  -> If the user presses "Escape", calls "onClose".
  -> If "ArrowRight", calls "onNext".
  -> If "ArrowLeft", calls "onPrev".
* Adds the event listener when the component mounts and removes it when it unmounts to keep things clean.

* View TSX :
* Returns a main overlay <div> that closes the lightbox when clicked.
* Inside the overlay:
  -> Stops click events from bubbling with "e.stopPropagation()".
  -> Shows a close button (×) that triggers "onClose".
  -> Displays the current picture using "picture.pictureUrl" and "picture.pictureAlt".
  -> Shows two navigation buttons:
    -> One to go to the previous picture (‹) using "onPrev".
    -> One to go to the next picture (›) using "onNext".

* Responsive : 
*/
const Lightbox: React.FC<LightboxProps> = ({pictures, index, onClose, onNext, onPrev }) => {

    const picture = pictures[index];
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchDeltaX, setTouchDeltaX] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);

    const nextPicture = pictures[index + 1];
    const prevPicture = pictures[index - 1];

    useEffect(()=> {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartX(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (touchStartX === null) return;
            const currentX = e.touches[0].clientX;
            setTouchDeltaX(currentX - touchStartX);
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (Math.abs(touchDeltaX) > 50) {
                touchDeltaX > 0 ? onPrev() : onNext();
            }

            // Reset after transition
            setTouchDeltaX(0);
            setTouchStartX(null);
        };

        const content = document.getElementById('lightbox-content');
            content?.addEventListener('touchstart', handleTouchStart);
            content?.addEventListener('touchmove', handleTouchMove);
            content?.addEventListener('touchend', handleTouchEnd);
            window.addEventListener('keydown', handleKey);
        
        return () => {
            content?.removeEventListener('touchstart', handleTouchStart);
            content?.removeEventListener('touchmove', handleTouchMove);
            content?.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('keydown', handleKey);
        };
    }, [touchStartX, touchDeltaX, onNext, onPrev, onClose]);

    const getVisibleDots = (total: number, current: number) => {
        if (total <= 5) {
            return Array.from({ length: total }, (_, i) => i);
        }

        if (current <= 2) {
            return [0, 1, 2, 3, 4];
        } else if (current >= total - 3) {
            return [total - 5, total - 4, total - 3, total - 2, total - 1];
        } else {
            return [current - 2, current - 1, current, current + 1, current + 2];
        }
    };

    const visibleDots = getVisibleDots(pictures.length, index);

    return (
        <div 
            className={styles.overlay} 
            onClick={onClose}
        >
            <div 
                id="lightbox-content"
                className={styles.overlay__content} 
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className={styles.overlay__content__close} 
                    onClick={onClose}
                >
                    ×
                </button>

                <img 
                    ref={imageRef}
                    className={styles.overlay__content__picture} 
                    src={picture.pictureUrl} 
                    alt={picture.pictureAlt}
                    style={{
                        transform: `translateX(${touchDeltaX}px)`,
                        transition: touchDeltaX === 0 ? 'transform 0.3s ease' : 'none',
                    }}
                />

                <div 
                    className={styles.overlay__content__controls}
                >
                    <button 
                        className={styles.overlay__content__controls__arrow} 
                        onClick={onPrev}
                    >
                        <img 
                            src={ArrowLeft}
                            alt="Flèche gauche"
                            className={styles.overlay__content__controls__arrow__img}
                        />
                    </button>

                    <button 
                        className={styles.overlay__content__controls__arrow}
                        onClick={onNext}
                    >
                        <img 
                            src={ArrowRight}
                            alt="Flèche droite"
                            className={styles.overlay__content__controls__arrow__img}
                        />
                    </button>
                </div>

                <div className={styles.overlay__content__dots}>
                    {visibleDots.map((i) => (
                        <span
                            key={i}
                            className={`${styles.overlay__content__dots__dot} ${i === index ? styles.active : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;