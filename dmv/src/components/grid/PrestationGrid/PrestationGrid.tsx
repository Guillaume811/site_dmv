import React from 'react';
import styles from './PrestationGrid.module.scss';
import { PrestationType } from '../../../types/prestation.types';
import CardPrestation from '../../cards/CardPrestation/CardPrestation';

//Typage
type PrestationGridProps = {
    prestations: PrestationType[];
}

// PrestationGrid Component
const PrestationGrid: React.FC<PrestationGridProps> = ({ prestations }) => {
    
    if (!prestations.length) {
        return <p className={styles.empty}>Aucun projet à afficher.</p>;
    }
    
    return (
         <div className={styles.grid}>
            {prestations.map((prestation) => (
                <CardPrestation key={prestation.id} prestation={prestation} />
            ))}
        </div>
    );
};

export default PrestationGrid;