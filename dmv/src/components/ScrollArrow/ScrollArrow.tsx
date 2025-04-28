import React from 'react';
import styles from './ScrollArrow.module.scss';
import { motion } from 'framer-motion';

// Typage
type ScrollArrowProps = {
    text: string;
    imageSrc: string;
    altText: string;
}

// Component
const ScrollArrow: React.FC<ScrollArrowProps> = ({text, imageSrc, altText}) => {
    return (
        <div className={styles.content}>
            <motion.span 
                className={styles.content__span}
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                    duration: 1.5,
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
                animate={{ y: [0, 8, 0] // Bouncing effect
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