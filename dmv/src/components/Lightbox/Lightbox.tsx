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

const Lightbox: React.FC<LightboxProps> = ({pictures, index, onClose, onNext, onPrev }) => {
    // On récupère l'image actuellement sélectionnée à partir de l'index
    const picture = pictures[index];

    // Effet de clavier : écoute les touches pendant que la lightbox est ouverte
    useEffect(()=> {
        // Fonction appelée à chaque pression de touche
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        // On attache l'écouteur d'événements clavier
        window.addEventListener('keydown', handleKey);
        // Nettoyage à la fermeture du composant : on retire l'écouteur
        return () => window.removeEventListener('keydown', handleKey);
        }, [onClose, onNext, onPrev]); // On passe les fonctions onClose, onNext et onPrev en dépendance pour éviter les erreurs de compilation

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