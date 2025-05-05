import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectType } from '../../projects/project.types';
import { ProjectService } from '../../projects/ProjectService';
import HeadingSection from '../../components/sections/HeadingSection/HeadingSection';
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";
import TitleSection from '../../components/sections/TitleSection/TitleSection';
import GalleryGrid from '../../components/grid/GalleryGrid/GalleryGrid';

const SingleProject: React.FC = () => {

    const { slug } = useParams(); // Récupère le slug de l'URL
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (!slug) return;

    ProjectService.getProjectBySlug(slug)
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