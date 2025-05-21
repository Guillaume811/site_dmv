import React, { useEffect } from 'react';
import { GalleryType } from '../../types/gallery.types';
import styles from './Lightbox.module.scss';

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

    useEffect(()=> {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKey);
        
        return () => window.removeEventListener('keydown', handleKey);
        }, [onClose, onNext, onPrev]);

    return (
        <div 
            className={styles.overlay} 
            onClick={onClose}
        >
            <div 
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
                    className={styles.overlay__content__picture} 
                    src={picture.pictureUrl} 
                    alt={picture.pictureAlt}
                />

                <div 
                    className={styles.overlay__content__controls}
                >
                    <button 
                        className={styles.overlay__content__controls__arrow} 
                        onClick={onPrev}
                    >
                        ‹
                    </button>

                    <button 
                        className={styles.overlay__content__controls__arrow}
                        onClick={onNext}
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;