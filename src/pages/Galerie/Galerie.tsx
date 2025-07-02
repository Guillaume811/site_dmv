import React, { useEffect, useState } from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import GalleryGrid from '../../components/grid/GalleryGrid/GalleryGrid';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';
import { GalleryType } from '../../types/gallery.types';
import { GalleryService } from '../../services/GalleryService';
import ContactSection from '../../components/sections/ContactSection/ContactSection';

/* Component Page Galerie
* Render logic :
* Uses "useState" to create a local state named "gallery", which will hold a list of gallery items.
* Uses "useEffect" to call "GalleryService.getAll()" one time when the component first shows on screen. 
* If it works, it saves the data into "gallery". If it fails, it shows an error in the console.

* View TSX :
* Displays a "HeadingSection" with the title "Galerie" and a background image from "BackgroundHeading".
* Inside "BasicSection", shows a short message of presentation.
* If "gallery" has items, shows a "GalleryGrid" using "pictures={gallery}".
* If "gallery" is empty, shows a message saying there are no pictures for the project.

* Responsive :
*/
const Galerie: React.FC = () => {

    const [gallery, setGallery] = useState<GalleryType[]>([]);

    useEffect(() => {
        GalleryService.getAll()
            .then(setGallery)
            .catch(console.error);
    }, []);

    return (
        <div>
            <HeadingSection title='Galerie' backgroundImage={BackgroundHeading} />
            
            <BasicSection className={stylesBasicSection.sectionPage}>
                <p>
                    Ici il y aura le texte de présentation de la galeries.
                </p>

                {gallery?.length ? (
                    <GalleryGrid pictures={gallery} />
                ) : (
                    <p>Aucune image disponible pour ce projet.</p>
                )}

            </BasicSection>

            <ContactSection />
        </div>
    );
};

export default Galerie;