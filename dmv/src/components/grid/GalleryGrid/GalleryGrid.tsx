import React, { useState } from 'react';
import Picture from '../../Picture/Picture';
import Lightbox from '../../Lightbox/Lightbox';
import styles from './GalleryGrid.module.scss';
import { GalleryType } from '../../../types/gallery.types';

// Type from GalleryType
type GalleryGridProps = {
  pictures : GalleryType[];
};

/* Component GalleryGrid
* Render logic :
* Uses "useState" to manage "isOpen", which controls if the lightbox is shown.
* Uses another "useState" to manage "index", which tracks the current picture being shown in the lightbox.
* Defines "handleOpen" to set the selected picture index and open the lightbox.
* Defines "handleNext" to move to the next picture in the list (loops back to start).
* Defines "handlePrev" to move to the previous picture (loops to end if at the beginning).

* View TSX :
* Returns a fragment with two parts:
  -> A grid of pictures using "pictures.map()", each wrapped in a <div> that opens the lightbox when clicked.
  -> If "isOpen" is true, displays a "Lightbox" showing the current picture with navigation controls.

* Responsive : 
*/
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