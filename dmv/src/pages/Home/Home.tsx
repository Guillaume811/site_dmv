import React from 'react';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Montage from '../../assets/pictures/background/parallax-accueil.jpg';
import Button from '../../components/Button/Button';
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';
import { getNavigationLink } from "../../data/navigationLinks";
import ParallaxSection from '../../components/sections/ParallaxSection/ParallaxSection';
import ProjectGrid from '../../components/grid/ProjectGrid/ProjectGrid';

// Typage

// Composant
const Home: React.FC = () => {
    // Récupère les lien des pages prestation est projet
    const prestationLink = getNavigationLink("prestation");
    const projetLink = getNavigationLink("projet");

    // Récupère la data des projets

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
                <ProjectGrid />

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
                <p>
                    Ici il y aura des cart qui présenterons brièvement les prestation de la société.
                    Il y aura un bouton pour chaque prestation qui redirigera vers la page de la prestation.
                    Ou la card elle même sera un bouton qui redirigera vers la page de la prestation.
                    Les cards seront présenté avec un titre, un texte et un pictogramme et/ou un bouton.
                </p>
            </TitleSection>

            {/*Section Contact*/}
            <TitleSection title='Contact' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                <p>
                    Ici il y aura un formulaire de contact avec les champs suivants : Nom, Prénom, Email, Message.
                    Il y aura un bouton pour envoyer le message.
                    Il y aura aussi un bouton pour appeler la société.
                </p>
            </TitleSection>
        </div>
        
    );
};

export default Home;