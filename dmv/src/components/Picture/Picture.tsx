import React from 'react';
import styles from './Picture.module.scss';
import { GalleryType } from '../../types/gallery.types';

// Type from GalleryType
type PictureProps = {
    picture: GalleryType;
}

/* Component Picture
* Receives a "picture" prop from "PictureProps".

* View TSX :
* Returns a <div> styled with "styles.picture".
* Inside the div, displays an <img> using "picture.pictureUrl" for the source and "picture.pictureAlt" for the alt text.
* The image uses "loading='lazy'" to delay loading until it's near the screen. 
*/
const Picture: React.FC<PictureProps> = ({ picture }) => {
    return (
        <div className={styles.picture}>
            <img src={picture.pictureUrl} alt={picture.pictureAlt} loading='lazy'/>
        </div>
    );
};

export default Picture;