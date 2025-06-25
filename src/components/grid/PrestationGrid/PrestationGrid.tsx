import React from 'react';
import CardPrestation from '../../cards/CardPrestation/CardPrestation';
import styles from './PrestationGrid.module.scss';
import { PrestationType } from '../../../types/prestation.types';

//Typage
type PrestationGridProps = {
    prestations: PrestationType[];
}

/* Component PrestationGrid
* Receives a "prestations" prop from "PrestationGridProps".

* View TSX :
* If "prestations" is empty, returns a <p> with a message saying there are no projects to show.
* If there are items, returns a <div> styled with "styles.grid".
* Inside the grid
    -> loops through "prestations"
    -> renders a "CardPrestation" for each one using its "id" as the key.

* Responsive :
*/
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