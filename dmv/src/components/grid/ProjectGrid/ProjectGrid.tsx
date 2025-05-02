import React from 'react';
import CardProject from '../../cards/CardProject/CardProject';
import styles from './ProjectGrid.module.scss';

//Typage

// ProjectGrid Component
const ProjectGrid: React.FC = () => {
    return (
        <div className={styles.grid}>
            <CardProject project={{
                    id: 1,
                    title: 'Titre du projet 1',
                    subtitle: 'Sous-titre du projet 1',
                    keywords: ['mot-clé 1', 'mot-clé 2'],
                    picture: '/pictures/projet-a/header.jpg',
                    url: '/'
                }} />

                <CardProject project={{
                    id: 2,
                    title: 'Titre du projet 2',
                    subtitle: 'Sous-titre du projet 2',
                    keywords: ['mot-clé 1', 'mot-clé 2'],
                    picture: '/pictures/projet-b/header.jpg',
                    url: '/'
                }} />
        </div>
    );
};

export default ProjectGrid;