import React from 'react';
import CardProject from '../../cards/CardProject/CardProject';
import styles from './ProjectGrid.module.scss';
import { ProjectType } from '../../../types/project.types';

//Typage
type ProjectGridProps = {
    projects: ProjectType[];
}

// ProjectGrid Component
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {

    if (!projects.length) {
        return <p className={styles.empty}>Aucun projet à afficher.</p>;
      }
    return (
        <div className={styles.grid}>
            {projects.map((project) => (
                <CardProject key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectGrid;