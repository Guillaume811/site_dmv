import React from 'react';
import styles from './TitleCard.module.scss';

// Typage
type TitleCardProps = {
    className?: string;
    title: string;
    subtitle: string;
};

/* Component TitleCard
* Receives "className", "title", and "subtitle" as props from "TitleCardProps".

* Returns a <div> with the given "className" if provided, or an empty string.
* Inside the div:
  -> Displays a <h3> with the "title" styled using "styles.title".
  -> Displays a <h4> with the "subtitle" styled using "styles.subtitle".
*/
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