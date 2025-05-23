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
* Receives "classNameSection", "classNameTitle", "title", "children", "opacity", and "innerRef" as props from "TitleSectionProps".

* Render logic :
* Builds a "content" fragment that includes a <h2> with "title" and the "children" content.

* View TSX :
* If "opacity" is a number:
    -> Returns a <motion.section> with the given class name, animated opacity, and ref set to "innerRef".
    -> Uses a short transition duration of 0.2 seconds.
* If "opacity" is not a number:
    -> Returns a regular <section> element with the given class name and ref, containing the same content.
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