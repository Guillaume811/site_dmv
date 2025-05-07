import React, { useEffect, useState } from 'react';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import BasicSection from '../../components/sections/BasicSection/BasicSection';
import BackgroundHeading from '../../assets/pictures/background/heading.jpg';
import stylesBasicSection from "../../components/sections/BasicSection/BasicSection.module.scss";
import { GalleryType } from '../../types/gallery.types';
import { GalleryService } from '../../services/GalleryService';
import GalleryGrid from '../../components/grid/GalleryGrid/GalleryGrid';

const Galerie: React.FC = () => {
    // État local pour stocker les projets à afficher
            const [gallery, setGallery] = useState<GalleryType[]>([]);
            // Au montage du composant, on récupère les projets à afficher
            useEffect(() => {
                GalleryService.getAll()
                    .then(setGallery)
                    .catch(console.error);
            }, []);

    return (
        <div>
            {/*Section d'en-tête*/}
            <HeadingSection title='Galerie' backgroundImage={BackgroundHeading} />
            
            {/*Section de présentation des prestations*/}
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
        </div>
    );
};

export default Galerie;