import React from "react";
import Title from "../../typographies/Title/Title";
import styles from "./HeadingSection.module.scss";

// Typage
type HeadingSectionProps = {
    backgroundImage: string; // Optional background image
    title: string;
}

/* Component
* HeadingSection is a section that contains a title (h1).
*/
const HeadingSection: React.FC<HeadingSectionProps> = ({ backgroundImage, title }) => {
    return (
        <section className={styles.headingSection}>
            <div
                className={styles.headingSection__background}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className={styles.headingSection__content}>
                <Title text={title}/>
            </div>
            
        </section>
    );
};

export default HeadingSection;