import React, { useEffect, useState } from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import { ProjectType } from '../../projects/project.types';
import { ProjectService } from '../../projects/ProjectService';
import ProjectGrid from '../../components/grid/ProjectGrid/ProjectGrid';

const Projet: React.FC = () => {
    // État local pour stocker les projets à afficher
        const [projects, setProjects] = useState<ProjectType[]>([]);
        // Au montage du composant, on récupère les projets à afficher
        useEffect(() => {
            ProjectService.getAllProjects()
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