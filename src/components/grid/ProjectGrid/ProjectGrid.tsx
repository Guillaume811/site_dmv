import React from 'react';
import CardProject from '../../cards/CardProject/CardProject';
import styles from './ProjectGrid.module.scss';
import { ProjectType } from '../../../types/project.types';

//Typage from ProjectType
type ProjectGridProps = {
    projects: ProjectType[];
}

/* Component ProjectGrid
* Receives a "projects" prop from "ProjectGridProps".

* View TSX :
* If "projects" is empty, returns a <p> element with a message saying there are no projects to show.
* If there are items, returns a <div> styled with "styles.grid".
* Loops through the "projects" array and renders a "CardProject" for each item.
* Passes "project" and its "index" to each "CardProject", using "project.id" as the unique key.

* Responsive :
*/
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {

    if (!projects.length) {
        return <p className={styles.empty}>Aucun projet à afficher.</p>;
    }
    
    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <CardProject key={project.id} project={project} index={index}/>
            ))}
        </div>
    );
};

export default ProjectGrid;