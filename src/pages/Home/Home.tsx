import React, { useEffect, useRef, useState } from 'react';
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
import stylesRowDiv from "../../components/div/RowDiv/RowDiv.module.scss";
import backgroundImage from "../../assets/pictures/background/intro.jpg";
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Montage from '../../assets/pictures/background/parallax-accueil.jpg';
import Drone from '../../assets/pictures/prez-drone.jpg';
import { getNavigationLink } from "../../data/navigationLinks";
import { ProjectType } from '../../types/project.types';
import { ProjectService } from '../../services/ProjectService';
import { PrestationType } from '../../types/prestation.types';
import { PrestationService } from '../../services/PrestationService';
import ParallaxFixSection from '../../components/sections/ParallaxFixSection/ParallaxFixSection';
import { useSectionOpacity } from '../../hooks/useSectionOpacity';

/* Component Page Home
* Render logic :
* Uses "getNavigationLink" :
    -> to get the navigation links for the "prestation" and "projet" pages
    -> saves them as "prestationLink" and "projetLink".
* Manages scroll-based opacity for the intro title section:
    -> Uses "useRef" to track the section DOM element.
    -> Uses "useState" for "opacity" and updates it with a scroll listener that compares the section's center to the screen center.
* Manages scroll-based opacity for the scroll arrow:
    -> Uses "useRef" to track the arrow DOM element.
    -> Uses "useState" for "arrowOpacity", updated by a scroll listener based on the arrow's distance from the bottom of the screen.
* Uses "useRef" and a custom hook "useSectionOpacity" to compute dynamic opacity for the project section title.
* Uses "useState" to create "projects", a list of project items :
    -> Uses "useEffect" to load 6 project items from "ProjectService.getFirst(6)" when the component shows.
    -> If it works, saves them in "projects"; if it fails, shows an error in the console.
* Uses "useState" to create "prestations", a list of prestation items :
    -> Uses another "useEffect" to load all prestations from "PrestationService.getAll()" when the component shows.
    -> If it works, saves them in "prestations"; if it fails, shows an error in the console.

* View TSX :
* "Section intro" :
    -> Uses "ParallaxFixSection" with a background image.
    -> Inside it, "BasicSection" contains a "ScrollArrow" with animated opacity and a reference.
    -> A "TitleSection" with a title, paragraph, and button uses scroll-based opacity and a ref.
    -> Displays a first "TitleSection" with the title "DMV - Production", 
    -> A paragraph of intro text,
    -> A "Button" that links to the prestations page.
* "Section Nos projets" :
    -> Displays a second "TitleSection" titled "Nos projets"
    -> With a "ProjectGrid" using the data from "projects".
* "Section Parallax" :
    -> Shows a "ParallaxSection" with a background image from "Montage"
    -> A "Button" linking to the projets page.
* "Section Prestation" :
    -> Displays a third "TitleSection" titled "Nos Prestations"
    -> With a "PrestationGrid" using the data from "prestations".
* "Section Contact" :
    -> Displays a last "TitleSection" titled "Contact" 
    -> With a "RowDiv" that shows a "ContactForm" on the left and a drone image on the right.

* 
*/
const Home: React.FC = () => {
    // Récupère les lien des pages prestation est projet
    const prestationLink = getNavigationLink("prestation");
    const projetLink = getNavigationLink("projet");

    // Effect first section
    // TitleSection
    const sectionRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionCenter = rect.top + rect.height / 2;
            const screenCenter = windowHeight / 2;

            const distance = Math.abs(sectionCenter - screenCenter);
            const maxDistance = windowHeight / 2;
            const ratio = Math.max(0, 1 - distance / maxDistance);

            setOpacity(ratio);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //SCrollArrow
    const arrowRef = useRef<HTMLDivElement>(null);
    const [arrowOpacity, setArrowOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!arrowRef.current) return;

            const rect = arrowRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const distanceFromBottom = windowHeight - rect.top;

            const fadeStart = 200;
            const fadeEnd = 400;

            let opacity = 1;

            if (distanceFromBottom <= fadeStart) {
                opacity = 1;
            } else if (distanceFromBottom >= fadeEnd) {
                opacity = 0;
            } else {
                const range = fadeEnd - fadeStart;
                opacity = 1 - (distanceFromBottom - fadeStart) / range;
            }

            opacity = Math.max(0, Math.min(1, opacity));
            setArrowOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // appel initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect section project, avec hook perso
    const titleRef = useRef<HTMLDivElement>(null);
    const titleOpacity = useSectionOpacity(titleRef);

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
            <ParallaxFixSection backgroundImage={backgroundImage}>
                {/*Section d'introduction*/}
                <BasicSection className={stylesBasicSection.sectionIntro}>
                    <ScrollArrow 
                        text='Scroll' 
                        imageSrc={Fleche} 
                        altText='Fleche vers le bas'
                        opacity={arrowOpacity}
                        innerRef={arrowRef}
                    />
                </BasicSection>

                {/*Section d'introduction 2*/}
                <TitleSection 
                    title='DMV - Production' 
                    classNameSection={stylesTitlesSection.sectionEffectPresentation}
                    classNameTitle={stylesTitlesSection.sectionEffectPresentation__title}
                    innerRef={sectionRef}
                    opacity={opacity}
                >
                    <p>
                        Bienvenue sur mon portfolio professionnel.<br/><br/>
                        Je suis télépilote de drone certifié par la DGAC (Direction Générale de l’Aviation Civile), passionné par l’image, la technologie et les perspectives inédites qu’offre la prise de vue aérienne.<br/><br/>
                        À travers ce site, je vous propose de découvrir mes prestations spécialisées dans la <strong>captation par drone</strong>, destinées à des secteurs variés comme l’<strong>immobilier</strong>, le <strong>BTP</strong>, les <strong>domaines viticoles</strong>, l’<strong>urbanisme</strong> ou encore les <strong>événements</strong>. Mon objectif est simple : <span>valoriser vos projets</span> sous un angle nouveau, avec des <span>visuels professionnels</span>, esthétiques et pertinents.<br/><br/>
                        Ce portfolio est à la fois une vitrine de mon savoir-faire et un espace pour vous présenter les services que je propose. Toutes les prestations sont <span>pensées sur-mesure</span>, dans le respect des normes de sécurité aérienne et des attentes de mes clients.<br/><br/>
                    </p>
                    <RowDiv 
                        leftContent={<Button text='Nos prestations' to={prestationLink?.to} />}
                        rightContent={<Button text='Nos projets' to={projetLink?.to} />}
                        classNameRowDiv={stylesRowDiv.rowDivButtons}
                    />
                </TitleSection>
            </ParallaxFixSection>

            {/*Section Nos projets*/}
            <TitleSection title='Chaque projet est unique, et chaque mission raconte une histoire.' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
                innerRef={titleRef}
                opacity={titleOpacity}
                opacityOnTitleOnly={true}
            >
                <p className={stylesTitlesSection.sectionPresentation__text}
                    
                >
                    Chaque projet est unique. J’imagine et réalise, à vos côtés, des contenus visuels qui vous ressemblent : valorisation immobilière, suivi de chantier, communication viticole ou modélisation 3D de précision.<br/>
                    Avec une approche collaborative et exigeante, je m’assure que chaque image serve pleinement vos objectifs, qu’ils soient esthétiques, techniques ou commerciaux.<br/>
                    Découvrez ici mes dernières missions reflètant savoir-faire et passion du drone.<br/>
                </p>
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

            {/*Section découvrir nos prestations*/}    
            <ParallaxSection backgroundImage={Montage}>
                <Button text='Découvir nos Prestations' to={prestationLink?.to}/>
            </ParallaxSection>

            {/*Section Contact*/}
            <TitleSection title='Contact' 
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                
                <RowDiv
                    leftContent={<ContactForm />}
                    rightContent={<img src={Drone} alt="Drone" />}
                    classNameRowDiv={stylesRowDiv.rowDivForm}
                    classNameRowDivLeft={stylesRowDiv.rowDivForm__left}
                    classNameRowDivRight={stylesRowDiv.rowDivForm__right}
                />
                
            </TitleSection>
        </div>
        
    );
};

export default Home;