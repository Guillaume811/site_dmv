import React from "react";
import Title from "../../typographies/Title/Title";
import styles from "./HeadingSection.module.scss";

// Typage
type HeadingSectionProps = {
    backgroundImage: string; // Optional background image
    title: string;
}

/* Component HeadingSection
* Receives "backgroundImage" and "title" as props from "HeadingSectionProps".

* View TSX :
* Returns a <section> styled with "styles.headingSection".
* Inside:
  -> Display a <div> with "styles.headingSection__background" that uses "backgroundImage" as its background.
  -> Display another <div> with "styles.headingSection__content" that contains a "Title" component displaying the "title".
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