import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';

const Galerie: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Galerie' />
            
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