import React from "react";
import styles from "./TitleSection.module.scss";
import { motion } from "framer-motion";

// Typage
type TitleSectionProps = {
    classNameSection?: string;
    classNameTitle?: string;
    title: string;
    children: React.ReactNode;
    opacity?: number;
    innerRef?: React.Ref<HTMLDivElement>;
};

/* Component TitleSection
* Receives "classNameSection", "classNameTitle", "title", and "children" as props from "TitleSectionProps".

* View TSX :
* Returns a <section> element with "classNameSection" if provided, or an empty string.
* Inside the section:
  -> Displays a <h2> element with "classNameTitle" if provided, or an empty string, showing the "title".
  -> Renders the "children" content below the title.
*/
const TitleSection: React.FC<TitleSectionProps> = ({ classNameSection, classNameTitle, title, children, opacity = 1, innerRef}) => {
    const content = (
        <>
            <h2 className={classNameTitle ?? ''}>{title}</h2>
            {children}
        </>
    );

    if (typeof opacity === 'number') {
        return (
            <motion.section
                ref={innerRef}
                className={classNameSection ?? ''}
                style={{ opacity }}
                transition={{ duration: 0.2 }}
            >
                {content}
            </motion.section>
        );
    }

    // Sinon section HTML classique
    return (
        <section ref={innerRef} className={classNameSection ?? ''}>
            {content}
        </section>
    );
};

export default TitleSection;