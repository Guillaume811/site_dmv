import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import Button from '../../components/Button/Button';
import BasicSection from '../../components/sections/BasicSection/BasicSection';

const Prestation: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Nos Prestations' />

            {/*Section de présentation des prestations*/}
            <BasicSection>
                <p>
                    Ici il y aura les différentes prestations. Elle serons présenté sous forme d'onglets avec la description, les tarifs, ect... Et il y aura un bouton de contact à la fin.
                </p>
                <Button text='Obtenir un devis' />
            </BasicSection>
            
        </div>
    );
};

export default Prestation;