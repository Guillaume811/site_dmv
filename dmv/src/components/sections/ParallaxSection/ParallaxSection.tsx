import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ParallaxSection.module.scss";

// Typage
type ParallaxSectionProps = {
    backgroundImage: string;
    children: React.ReactNode;
  };

// TODO: voir si c'est compatible IOS
/* Conponent ParallaxSection
* Receives "backgroundImage" and "children" as props from "ParallaxSectionProps".

* Render logic :
* Uses "useRef" to create a reference to the section element.
* Uses "useScroll" to track scroll position relative to the element referenced by "ref".
* Uses "useTransform" to convert scroll progress into a vertical movement (from "-20%" to "50%").

* View TSX :
* Returns a <section> styled with "styles.parallaxSection" and attaches the "ref".
* Inside:
  -> Renders a <motion.div> with a background image from "backgroundImage" and a vertical parallax animation using "y".
  -> Displays a content <div> in front of the background that shows the "children".
*/
const ParallaxSection: React.FC<ParallaxSectionProps> = ({backgroundImage, children}) => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "50%"]);

    return (
         <section className={styles.parallaxSection} ref={ref}>
            {/* anime picture */}
            <motion.div
                className={styles.parallaxSection__background}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    y: y,
                }}
            />
      
            {/* front content */}
            <div className={styles.parallaxSection__content}>
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;