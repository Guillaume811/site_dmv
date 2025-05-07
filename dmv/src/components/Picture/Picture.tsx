import React from 'react';
import { GalleryType } from '../../types/gallery.types';
import styles from './Picture.module.scss';

// Type
type PictureProps = {
    picture: GalleryType;
}

// Picture Component
const Picture: React.FC<PictureProps> = ({ picture }) => {
    return (
        <div className={styles.picture}>
            <img src={picture.pictureUrl} alt={picture.pictureAlt} loading='lazy'/>
        </div>
    );
};

export default Picture;