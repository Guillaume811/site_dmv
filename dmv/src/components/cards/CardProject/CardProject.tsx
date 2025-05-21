import React from 'react';
import styles from './CardProject.module.scss';
import { Link } from 'react-router-dom';
import TitleCard from '../../typographies/TitleCard/TitleCard';
import { ProjectType } from '../../../types/project.types';

//Typage from ProjectType
type CardProjectProps = {
    project: ProjectType;
}

/* Component CardProject
* Receives a "project" prop from "CardProjectProps".

* View TSX :
* Returns a "Link" that navigates to "/projet/" followed by "project.slug" and wraps the entire card.
* Uses a <div> with a background image set from "project.pictureHeaderUrl".
* Inside this container:
  -> Displays a list of keywords from "project.keywords", each shown in a <span>.
  -> Displays a "TitleCard" with "project.title" and "project.subtitle" as the main text.
*/
const CardProject: React.FC<CardProjectProps> = ({ project }) => {
    return (
        <Link to={`/projet/${project.slug}`} className={styles.card}>
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