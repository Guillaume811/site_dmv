import React from "react";
import { motion } from "framer-motion";

// Typage
type TitleSectionProps = {
    classNameSection?: string;
    classNameTitle?: string;
    title: string;
    children: React.ReactNode;
    opacity?: number;
    innerRef?: React.Ref<HTMLDivElement>;
    opacityOnTitleOnly?: boolean; //
};

/* Component TitleSection
* Receives "classNameSection", "classNameTitle", "title", "children", "opacity", "innerRef", and "opacityOnTitleOnly" from "TitleSectionProps".

* View TSX :
* If "opacityOnTitleOnly" is true:
    -> Returns a <section> with the given class name.
    -> Wraps the <h2> title in a <motion.h2> with animated opacity and a short transition.
    -> Only the title fades in/out based on the scroll position.

* If "opacity" is a number and "opacityOnTitleOnly" is false:
    -> Returns a <motion.section> with animated opacity applied to the entire section.
    -> Includes the title and children inside.

* If no animation is needed:
    -> Returns a regular <section> with the title and children, and attaches the ref if provided.
*/
const TitleSection: React.FC<TitleSectionProps> = ({
    classNameSection,
    classNameTitle,
    title,
    children,
    opacity = 1,
    innerRef,
    opacityOnTitleOnly = false
}) => {
    // Si l'animation ne doit être appliquée qu'au titre
    if (opacityOnTitleOnly) {
        return (
        <section className={classNameSection ?? ''}>
            <div ref={innerRef}>
                <motion.h2
                    
                    className={classNameTitle ?? ''}
                    style={{ opacity }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h2>
            </div>
            
            {children}
        </section>
        );
    }

    // Si l'opacité s'applique à toute la section
    if (typeof opacity === 'number') {
        return (
        <motion.section
            ref={innerRef}
            className={classNameSection ?? ''}
            style={{ opacity }}
            transition={{ duration: 0.2 }}
        >
            <h2 className={classNameTitle ?? ''}>{title}</h2>
            {children}
        </motion.section>
        );
    }

    // Section HTML classique
    return (
        <section ref={innerRef} className={classNameSection ?? ''}>
        <h2 className={classNameTitle ?? ''}>{title}</h2>
        {children}
        </section>
    );
};

export default TitleSection;