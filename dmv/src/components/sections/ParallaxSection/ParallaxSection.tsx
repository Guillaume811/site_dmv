import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ParallaxSection.module.scss";

// Typage
type ParallaxSectionProps = {
    backgroundImage: string;
    children: React.ReactNode;
  };

const ParallaxSection: React.FC<ParallaxSectionProps> = ({backgroundImage, children}) => {

    const ref = useRef<HTMLDivElement>(null);
     // On observe le scroll de cet élément
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // quand le top arrive en haut et que l'élément disparait
    });

    // On transforme le scroll en un déplacement vertical
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "50%"]);

    return (
         <section className={styles.parallaxSection} ref={ref}>
            {/* Image animée */}
            <motion.div
                className={styles.parallaxSection__background}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    y: y, // 👈 Animation sur l'axe Y
                }}
            />
      
            {/* Contenu devant */}
            <div className={styles.parallaxSection__content}>
                {children}
            </div>
        </section>
    );
};

export default ParallaxSection;