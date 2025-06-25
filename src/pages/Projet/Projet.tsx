import React, { useEffect, useState } from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import ProjectGrid from '../../components/grid/ProjectGrid/ProjectGrid';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';
import { ProjectType } from '../../types/project.types';
import { ProjectService } from '../../services/ProjectService';

/* Component Page Projets
* Render logic :
* Uses "useState" to create a local state named "projects", which will hold a list of project items.
* Uses "useEffect" to call "ProjectService.getAll()" one time when the component shows for the first time.
* If the call works, it saves the result in "projects". If it fails, it shows an error in the console.

* View TSX :
* Displays a "HeadingSection" with the title "Nos Projets" and a background image from "BackgroundHeading".
* Inside "BasicSection", shows a short message of presentation.
* Displays a "ProjectGrid" using the data from "projects".

* Responsive :
*/
const Projet: React.FC = () => {
    // État local pour stocker les projets à afficher
        const [projects, setProjects] = useState<ProjectType[]>([]);
        // Au montage du composant, on récupère les projets à afficher
        useEffect(() => {
            ProjectService.getAll()
                .then(setProjects)
                .catch(console.error);
        }, []);
        
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title="Nos Projets" backgroundImage={BackgroundHeading}/>

            {/*Section de présentation des projets*/}
            <BasicSection className={stylesBasicSection.sectionPage}>

                <p>
                    Faire un petit texte présentant les projets, faut vendre du reve la mon reuf !
                </p>
                
                <ProjectGrid projects={projects} />
                
            </BasicSection>

                
        </div>
    );
};

export default Projet;