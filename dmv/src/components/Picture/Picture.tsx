import React from 'react';
import { GalleryImage } from '../../projects/project.types';
import styles from './Picture.module.scss';

// Type
type PictureProps = {
    image: GalleryImage
}
const Picture: React.FC<PictureProps> = ({ image }) => {
    return (
        <div className={styles.picture}>
            <img src={image.pictureUrl} alt={image.pictureAlt} loading='lazy'/>
        </div>
    );
};

export default Picture;