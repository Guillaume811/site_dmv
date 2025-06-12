import React from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import TabsPrestation from '../../components/TabsPrestation/TabsPrestation';
import AccordionTab from "../../components/AccordionTab/AccordionTab";
import useIsMobile from "../../hooks/useIsMobile";
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';

/* Component Page Prestation
* Render logic :
* Uses the custom hook "useIsMobile" to check if the screen size is mobile and stores the result in "isMobile".

* View TSX :
Returns a <div> that contains:
  -> A "HeadingSection" with the title "Nos Prestations" and a background image from "BackgroundHeading".
  -> A "BasicSection" styled with "stylesBasicSection.sectionPage".
    -> If "isMobile" is true, displays the "AccordionTab" component.
    -> If "isMobile" is false, displays the "TabsPrestation" component.
*/
const Prestation: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <div>
            <HeadingSection title='Nos Prestations' backgroundImage={BackgroundHeading} />

            <BasicSection className={stylesBasicSection.sectionPage}>
                {isMobile ? <AccordionTab /> : <TabsPrestation />}
            </BasicSection>
            
        </div>
    );
};

export default Prestation;