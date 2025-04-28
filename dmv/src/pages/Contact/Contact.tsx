import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';

const Contact: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Contact' backgroundImage='BackgroundHeading' />
            {/*Section de présentation des prestations*/}
            <BasicSection>
                <p>
                    Ici il y aura un formulaire de contact avec les champs suivants : Nom, Prénom, Email, Message.
                    Je compte rajouter un champs (pas obligatoire) pour le numéro de téléphone et une liste déroulante pour sélection la prestation souhaitée.
                </p>
            </BasicSection>
        </div>
    );
};

export default Contact;