import React from 'react';
import './GalleryGrid.css';
import { GalleryPicture } from '../../../projects/project.types';
import styles from './GalleryGrid.module.scss';
import Picture from '../../Picture/Picture';

// Type
type GalleryGridProps = {
  pictures : GalleryPicture[];  // Define any props you need for the GalleryGrid component
};

// GalleryGrid Component
const GalleryGrid: React.FC<GalleryGridProps> = ({ pictures }) => {
    return (
        <div className={styles.grid}>
            {pictures.map((picture) =>(
                <Picture key={picture.id} picture={picture} />
            ))}
        </div>
    );
};

export default GalleryGrid;