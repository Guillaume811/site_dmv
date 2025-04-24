import React from 'react';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import Title from '../../components/typographies/Title/Title';
import Fleche from '../../assets/pictures/fleche-vers-le-bas-jaune.png';
import Button from '../../components/Button/Button';
import TitleSection from '../../components/sections/TitleSection/TitleSection';

// Typage

// Composant
const Home: React.FC = () => {
    return (
        <div>
            <BasicSection>
                <p>
                    Scroll
                </p>
                <img src={Fleche} alt="Flèche vers le bas qui rebondis" />
            </BasicSection>

            <BasicSection>
                <Title text="DMV - Production" />
                <p>
                    Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes,
                    varia animo tum miscente consilia, tandem id ut optimum factu elegit.
                </p>
                <Button text='Nos prestations' />
            </BasicSection>

            <TitleSection title='Nos projets'>
                <p>
                    Ici il y aura un caroussel ou 2 colonnes de 3 ou 3 colonnes de 2 projets.
                </p>
            </TitleSection>
        </div>
        
    );
};

export default Home;