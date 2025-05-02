import React from 'react';
import styles from './CardProject.module.scss';
import { Link } from 'react-router-dom';
import TitleCard from '../../typographies/TitleCard/TitleCard';
import { ProjectType } from '../../../projects/project.types';

//Typage
type CardProjectProps = {
    project: ProjectType;
}

// CardProject Component
const CardProject: React.FC<CardProjectProps> = ({ project }) => {
    return (
        <Link to={project.url} className={styles.card}>
            <div 
                className={styles.card__container}
                style={{ backgroundImage: `url(${project.pictureHeaderUrl})` }}
            >
                
                <div className={styles.card__container__keywords}>
                    {project.keywords.map((keyword, index) => (
                        <span key={index} className={styles.card__container__keywords__item}>
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