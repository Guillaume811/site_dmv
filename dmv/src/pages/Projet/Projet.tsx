import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';

const Projet: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title="Nos Projets" />

            {/*Section de présentation des projets*/}
            <BasicSection>
                <p>
                    Ici il y aura l'intégralité des cards projets.
                    La page projet, comportera 3 sections, une en-tête, une section de présentation et une section galerie.
                </p>
            </BasicSection>

                
        </div>
    );
};

export default Projet;