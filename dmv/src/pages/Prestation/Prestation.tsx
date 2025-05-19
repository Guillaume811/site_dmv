import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';
import TabsPrestation from '../../components/TabsPrestation/TabsPrestation';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";


const Prestation: React.FC = () => {
    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Nos Prestations' backgroundImage={BackgroundHeading} />

            {/*Section de présentation des prestations*/}
            <BasicSection className={stylesBasicSection.sectionPage}>
                <TabsPrestation />
            </BasicSection>
            
        </div>
    );
};

export default Prestation;