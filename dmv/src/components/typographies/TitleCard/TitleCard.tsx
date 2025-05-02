import React from 'react';
import styles from './TitleCard.module.scss';

// Typage
type TitleCardProps = {
    className?: string;
    title: string;
    subtitle: string;
};

// Composant
const TitleCard: React.FC<TitleCardProps> = ({ className, title, subtitle }) => {
    return (
        <div className={`${className ?? ""}`}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <h4 className={styles.subtitle}>
                {subtitle}
            </h4>
        </div>
        
    ) ;
};

export default TitleCard;