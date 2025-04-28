import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';

const Galerie: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Galerie' backgroundImage={BackgroundHeading} />
            
            {/*Section de présentation des prestations*/}
            <BasicSection>
                <p>
                    Ici il y aura la galerie photos.
                </p>
            </BasicSection>
        </div>
    );
};

export default Galerie;