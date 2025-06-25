import React from 'react';
import { motion } from 'framer-motion';
import styles from './ScrollArrow.module.scss';


// Typage
type ScrollArrowProps = {
    text: string;
    imageSrc: string;
    altText: string;
    opacity: number;
    innerRef: React.Ref<HTMLDivElement>;
}

/* Component ScrollArrow
* Receives "text", "imageSrc", "altText", "opacity", and "innerRef" as props from "ScrollArrowProps".

* View TSX :
* Returns a <div> styled with "styles.content" :
    -> Using "opacity" as its inline style
    -> And "innerRef" as its ref.
* Inside the div:
  -> Displays a <motion.span> that shows "text" with an animation that fades in and out in a loop.
  -> Displays a <motion.img> using "imageSrc" and "altText" with a vertical bouncing animation that loops forever. 
*/
const ScrollArrow: React.FC<ScrollArrowProps> = ({text, imageSrc, altText, opacity, innerRef}) => {
    return (
        <div
            ref={innerRef}
            className={styles.content}
            style={{ opacity }}
        >
            <motion.span
                className={styles.content__span}
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                {text}
            </motion.span>

            <motion.img 
                src={imageSrc} 
                alt={altText} 
                className={styles.content__picture}
                animate={{ y: [0, 8, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default ScrollArrow;