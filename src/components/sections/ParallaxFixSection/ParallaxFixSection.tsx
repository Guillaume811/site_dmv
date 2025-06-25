import React from 'react';
import styles from './ParallaxFixSection.module.scss';

type SectionParallaxFixProps = {
    backgroundImage: string;
    children: React.ReactNode;
};

/* Component SectionParallaxFix
* Receives "backgroundImage" and "children" as props from "SectionParallaxFixProps".

* View TSX :
* Returns a <div> styled with "styles.parallaxContainer".
* Applies the "backgroundImage" as an inline background style.
* Renders the "children" content inside the container.
*/
const SectionParallaxFix: React.FC<SectionParallaxFixProps> = ({ backgroundImage, children }) => {
    return (
        <div
            className={styles.parallaxContainer}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {children}
        </div>
    );
};

export default SectionParallaxFix;