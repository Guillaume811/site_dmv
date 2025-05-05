import React, { useState } from 'react';
import { GalleryPicture } from '../../../projects/project.types';
import styles from './GalleryGrid.module.scss';
import Picture from '../../Picture/Picture';
import Lightbox from '../../Lightbox/Lightbox';

// Type
type GalleryGridProps = {
  pictures : GalleryPicture[];  // Define any props you need for the GalleryGrid component
};

// GalleryGrid Component
const GalleryGrid: React.FC<GalleryGridProps> = ({ pictures }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
  
    const handleOpen = (position: number) => {
      setIndex(position);
      setIsOpen(true);
    };
  
    const handleNext = () => setIndex((index + 1) % pictures.length);
    const handlePrev = () => setIndex((index + pictures.length - 1) % pictures.length);
    
    return (
        <>
            <div className={styles.grid}>
                {pictures.map((picture, position) =>(
                    <div key={picture.id} onClick={() => handleOpen(position)} style={{ cursor: "pointer" }}>
                        <Picture picture={picture} />
                    </div>
                    
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    pictures={pictures}
                    index={index}
                    onClose={() => setIsOpen(false)}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </>
        
    );
};

export default GalleryGrid;