import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import TabsPrestation from '../../components/TabsPrestation/TabsPrestation';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';

/* Component Page Prestation
* Render logic :

* View TSX :
* Displays a "HeadingSection" with the title "Nos Prestations" and a background image from "BackgroundHeading".
* Inside "BasicSection", shows the "TabsPrestation" component which will likely display different prestation tabs.

* Responsive :
*/
const Prestation: React.FC = () => {
    return (
        <div>
            <HeadingSection title='Nos Prestations' backgroundImage={BackgroundHeading} />

            <BasicSection className={stylesBasicSection.sectionPage}>
                <TabsPrestation />
            </BasicSection>
            
        </div>
    );
};

export default Prestation;