import React from 'react';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Montage from '../../assets/pictures/background/parallax-accueil.jpg';
import Drone from '../../assets/pictures/prez-drone.jpg';
import Button from '../../components/Button/Button';
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';
import { getNavigationLink } from "../../data/navigationLinks";
import ParallaxSection from '../../components/sections/ParallaxSection/ParallaxSection';
import ProjectGrid from '../../components/grid/ProjectGrid/ProjectGrid';
import { useEffect, useState } from 'react';
import { ProjectType } from '../../types/project.types';
import { ProjectService } from '../../services/ProjectService';
import { PrestationType } from '../../types/prestation.types';
import { PrestationService } from '../../services/PrestationService';
import ContactForm from '../../components/ContactForm/ContatcForm';
import RowDiv from '../../components/div/RowDiv/RowDiv';
import PrestationGrid from '../../components/grid/PrestationGrid/PrestationGrid';

// Typage

// Composant
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