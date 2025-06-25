import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import GalleryGrid from '../../components/grid/GalleryGrid/GalleryGrid';
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";
import { ProjectType } from '../../types/project.types';
import { ProjectService } from '../../services/ProjectService';

/* Component Page SingleProject
* This is a dynamic page.

* Render logic :
* Uses "useParams" to get the "slug" from the URL.
* Uses "useState" to create a local state named "project", which can be a project or null.
* Uses "useEffect" to call "ProjectService.getBySlug(slug)" when the "slug" changes.
* If the call works, it saves the result in "project". If it fails, it shows an error in the console.
* If there's no "slug", the effect does nothing. If "project" is still null, shows a loading or error message.

* View TSX :
* Displays a "HeadingSection" using "project.title" and "project.pictureHeaderUrl".
* Inside "TitleSection", shows "project.subtitle" as a title and "project.description" as a paragraph.
* If "project.picturesGallery" has images, displays them with "GalleryGrid".
* If not, shows a message saying there are no pictures for the project.

* Responsive :
*/
const SingleProject: React.FC = () => {

    const { slug } = useParams(); // Récupère le slug de l'URL
    const [project, setProject] = useState<ProjectType | null>(null);

    useEffect(() => {
        if (!slug) return;

        ProjectService.getBySlug(slug)
            .then((data) => setProject(data || null))
            .catch(console.error);
    }, [slug]);

    if (!project) return <p>Chargement ou projet introuvable.</p>;
  
    return (
        <div>
            <HeadingSection 
                title={project.title} 
                backgroundImage={project.pictureHeaderUrl}
            />

            <TitleSection
                title={project.subtitle}
                classNameSection={stylesTitlesSection.sectionPresentation}
                classNameTitle={stylesTitlesSection.sectionPresentation__title}
            >
                <p>
                    {project.description}
                </p>

                {project.picturesGallery?.length ? (
                    <GalleryGrid pictures={project.picturesGallery} />
                ) : (
                    <p>Aucune image disponible pour ce projet.</p>
                )}
                

            </TitleSection>
        </div>
        

    );
};

export default SingleProject;