import React from "react";
import styles from "./TitleSection.module.scss";

// Typage
type TitleSectionProps = {
    title: string;
    children: React.ReactNode;
};

/* Component
* TitleSection is a section that contains a title (h2) and children elements.
*/
const TitleSection: React.FC<TitleSectionProps> = ({ title, children}) => {
    return(
        <section className={styles.section}>
            <h2>{title}</h2>
            {children}
        </section>

    );
};

export default TitleSection;