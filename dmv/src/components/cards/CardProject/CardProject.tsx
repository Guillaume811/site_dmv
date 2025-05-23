import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleCard from '../../typographies/TitleCard/TitleCard';
import styles from './CardProject.module.scss';
import { ProjectType } from '../../../types/project.types';

//Typage from ProjectType
type CardProjectProps = {
    project: ProjectType;
    index: number;
}

/* Component CardProject
* Receives "project" and "index" as props from "CardProjectProps".
* Render logic :
* Uses "useRef" to create "cardRef", a reference to the card element in the DOM.
* Uses "useState" to manage:
    -> "translateX" for horizontal movement on scroll.
    -> "opacity" to fade the card in and out.
    -> "isHovered" to control hover effects like scale and shadow.
* Uses "useEffect" to add a scroll listener that:
    -> Calculates the card's vertical position relative to the screen center.
    -> Computes a ratio based on distance from center.
    -> Applies horizontal translation (left or right based on "index" parity).
    -> Adjusts opacity smoothly using a custom ratio curve.
    -> Updates "translateX" and "opacity" on scroll.
    -> Cleans up the scroll listener on unmount.

* View TSX :
* Returns a <Link> pointing to the project's detailed page using "project.slug".
* On hover, the card scales slightly and shows a glowing box shadow.
* The card's position is animated with scroll-based translation and opacity.
* Inside the card:
    -> A <div> uses "project.pictureHeaderUrl" as a background image.
    -> Displays a list of keywords from "project.keywords".
    -> Shows a "TitleCard" with the project's title and subtitle.
*/
const CardProject: React.FC<CardProjectProps> = ({ project, index }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (!cardRef.current) return;

            const rect = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Position verticale de la carte
            const centerY = rect.top + rect.height / 2;
            const screenCenterY = windowHeight / 2;

            // Distance depuis le centre du viewport
            const distance = Math.abs(centerY - screenCenterY);

            // Zone dans laquelle l’effet est actif (plus petit = plus visible plus tôt)
            const fadeDistance = windowHeight * 0.65;

            // Ratio progressif
            const ratio = Math.min(distance / fadeDistance, 1);

            // Décalage horizontal (translateX)
            const maxTranslate = 100; // px
            const direction = index % 2 === 0 ? -1 : 1;
            const translate = direction * ratio * maxTranslate;

            // Opacité plus douce (plus visible plus tôt)
            const opacity = 1 - Math.pow(ratio, 1.2);

            setTranslateX(translate);
            setOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, [index]);

    return (
        <Link 
            to={`/projet/${project.slug}`} 
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={cardRef}
            style={{
                transform: `translateX(${translateX}px) scale(${isHovered ? 1.03 : 1})`,
                opacity,
                boxShadow: isHovered
                    ? '0 0 20px rgba(255, 239, 12, 0.4)'
                    : 'none',
                transition: 'transform 0.2s ease-out, opacity 0.3s ease-out, box-shadow 0.3s ease',
            }}
        >
            <div 
                className={styles.card__container}
                style={{ backgroundImage: `url(${project.pictureHeaderUrl})` }}
            >
                
                <div className={styles.card__container__keywords}>
                    {project.keywords.map((keyword, i) => (
                        <span key={i} className={styles.card__container__keywords__item}>
                            {keyword}
                        </span>
                    ))}
                </div>

                <TitleCard 
                    className={styles.card__container__text}
                    title={project.title}
                    subtitle={project.subtitle}
                />

            </div>
        
        </Link>
    );
};

export default CardProject;