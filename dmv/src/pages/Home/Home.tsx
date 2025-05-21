import React, { useEffect, useState } from 'react';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import Button from '../../components/Button/Button';
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';
import ParallaxSection from '../../components/sections/ParallaxSection/ParallaxSection';
import ProjectGrid from '../../components/grid/ProjectGrid/ProjectGrid';
import ContactForm from '../../components/ContactForm/ContatcForm';
import RowDiv from '../../components/div/RowDiv/RowDiv';
import PrestationGrid from '../../components/grid/PrestationGrid/PrestationGrid';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Montage from '../../assets/pictures/background/parallax-accueil.jpg';
import Drone from '../../assets/pictures/prez-drone.jpg';
import { getNavigationLink } from "../../data/navigationLinks";
import { ProjectType } from '../../types/project.types';
import { ProjectService } from '../../services/ProjectService';
import { PrestationType } from '../../types/prestation.types';
import { PrestationService } from '../../services/PrestationService';

/* Component Page Home
* Render logic :
* Uses "getNavigationLink" :
* -> to get the navigation links for the "prestation" and "projet" pages
* -> saves them as "prestationLink" and "projetLink".
* Uses "useState" to create "projects", a list of project items :
* -> Uses "useEffect" to load 6 project items from "ProjectService.getFirst(6)" when the component shows.
* -> If it works, saves them in "projects"; if it fails, shows an error in the console.
* Uses "useState" to create "prestations", a list of prestation items :
* -> Uses another "useEffect" to load all prestations from "PrestationService.getAll()" when the component shows.
* -> If it works, saves them in "prestations"; if it fails, shows an error in the console.

* View TSX :
* "Section intro" :
* -> Shows a "BasicSection" with a "ScrollArrow" containing a text and an image.
* -> Displays a first "TitleSection" with the title "DMV - Production", 
* -> A paragraph of intro text,
* -> A "Button" that links to the prestations page.
* "Section Nos projets" :
* -> Displays a second "TitleSection" titled "Nos projets"
* -> With a "ProjectGrid" using the data from "projects".
* "Section Parallax" :
* -> Shows a "ParallaxSection" with a background image from "Montage"
* -> A "Button" linking to the projets page.
* "Section Prestation" :
* -> Displays a third "TitleSection" titled "Nos Prestations"
* -> With a "PrestationGrid" using the data from "prestations".
* "Section Contact" :
* -> Displays a last "TitleSection" titled "Contact" 
* -> With a "RowDiv" that shows a "ContactForm" on the left and a drone image on the right.

* 
*/
const Home: React.FC = () => {
    // Récupère les lien des pages prestation est projet
    const prestationLink = getNavigationLink("prestation");
    const projetLink = getNavigationLink("projet");

    // État local pour stocker les projets à afficher
    const [projects, setProjects] = useState<ProjectType[]>([]);
    // Au montage du composant, on récupère les projets à afficher
    useEffect(() => {
        ProjectService.getFirst(6)
            .then(setProjects)
            .catch(console.error);
    }, []);

    // État local pour stocker les prestations à afficher
    const [prestations, setPrestations] = useState<PrestationType[]>([]);
    // Au montage du composant, on récupère les projets à afficher
    useEffect(() => {
        PrestationService.getAll()
            .then(setPrestations)
            .catch(console.error);
    }, []);

    return (
        <div>
            {/*Section d'introduction*/}
            <BasicSection className={stylesBasicSection.sectionIntro}>
                <ScrollArrow 
                    text='Scroll' 
                    imageSrc={Fleche} 
                    altText='Fleche vers le bas' />
            </BasicSection>

            {/*Section d'introduction 2*/}
            <TitleSection 
                title='DMV - Production' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                <p>
                    Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes,
                    varia animo tum miscente consilia, tandem id ut optimum factu elegit.
                </p>
                <Button text='Nos prestations' to={prestationLink?.to} />
            </TitleSection>

            {/*Section Nos projets*/}
            <TitleSection title='Nos projets' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                <ProjectGrid projects={projects} />

            </TitleSection>
              
            {/*Section découvrir nos projets*/}    
            <ParallaxSection backgroundImage={Montage}>
                <Button text='Découvir nos Projets' to={projetLink?.to}/>
            </ParallaxSection>
                
            {/*Section Nos prestations*/}
            <TitleSection title='Nos Prestations' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                <PrestationGrid prestations={prestations} />

            </TitleSection>

            {/*Section Contact*/}
            <TitleSection title='Contact' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                
                <RowDiv
                    leftContent={<ContactForm />}
                    rightContent={<img src={Drone} alt="Drone" />}
                />
                
            </TitleSection>
        </div>
        
    );
};

export default Home;