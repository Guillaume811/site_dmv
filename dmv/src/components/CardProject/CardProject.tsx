import React from 'react';
import styles from './CardProject.module.css'; // Assuming you have a CSS module for styles
import { Link } from 'react-router-dom';
import TitleCard from '../typographies/TitleCard/TitleCard';

//Typage
type CardProjectProps = {
    project: {
        id: number;
        title: string;
        subtitle: string;
        keywords: string[];
        picture: string;
        url: string;
    };
}

// CardProject Component
const CardProject: React.FC<CardProjectProps> = ({ project }) => {
    return (
        <Link to={project.url} className={styles.card}>
            <div 
                className={styles.card__container}
                style={{ backgroundImage: `url(${project.picture})` }}
            >
                
                <div className={styles.card__container__keywords}>
                    {project.keywords.map((keyword, index) => (
                        <span key={index} className={styles.card__container__keywords__item}>
                            {keyword}
                        </span>
                    ))}
                </div>

                <TitleCard 
                    className={styles.text}
                    title={project.title}
                    subtitle={project.subtitle}
                />

            </div>
        
        </Link>
    );
};

export default CardProject;