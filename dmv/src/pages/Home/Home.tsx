import React from 'react';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import Title from '../../components/typographies/Title/Title';
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Button from '../../components/Button/Button';
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import styles from "../../components/sections/BasicSection/BasicSection.module.scss";
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';

// Typage

// Composant
const Home: React.FC = () => {
    return (
        <div>
            {/*Section d'introduction*/}
            <BasicSection className={styles.sectionIntro}>
                <ScrollArrow 
                    text='Scroll' 
                    imageSrc={Fleche} 
                    altText='Fleche vers le bas' />
            </BasicSection>

            {/*Section d'introduction 2*/}
            <BasicSection className={styles.section}>
                <Title text="DMV - Production" />
                <p>
                    Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes,
                    varia animo tum miscente consilia, tandem id ut optimum factu elegit.
                </p>
                <Button text='Nos prestations' />
            </BasicSection>

            {/*Section Nos projets*/}
            <TitleSection title='Nos projets'>
                <p>
                    Ici il y aura un caroussel ou 2 colonnes de 3 ou 3 colonnes de 2 projets. Cela présentera les 6 derniers projets de la société.
                </p>
            </TitleSection>
              
            {/*Section découvrir nos projets*/}   
            <BasicSection className={styles.section}>
                <p>
                    Ici il y aura un parallaxe avec une image de fond et un Bouton au milieu.
                </p>
                <Button text='Découvir nos Projets' />
            </BasicSection> 
                
            {/*Section Nos prestations*/}
            <TitleSection title='Nos Prestations'>
                <p>
                    Ici il y aura des cart qui présenterons brièvement les prestation de la société.
                    Il y aura un bouton pour chaque prestation qui redirigera vers la page de la prestation.
                    Ou la card elle même sera un bouton qui redirigera vers la page de la prestation.
                    Les cards seront présenté avec un titre, un texte et un pictogramme et/ou un bouton.
                </p>
            </TitleSection>

            {/*Section Contact*/}
            <TitleSection title='Contact'>
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