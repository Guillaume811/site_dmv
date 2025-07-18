import React from 'react';
import { Link } from 'react-router-dom';
import TitleCard from '../../typographies/TitleCard/TitleCard';
import Button from '../../Button/Button';
import styles from './CardPrestation.module.scss';
import { PrestationType } from '../../../types/prestation.types';


// Typage from PrestationType
type CardPrestationProps = {
    prestation: PrestationType;
}
 
/* Component CardPrestation
* Receives a "prestation" prop from "CardPrestationProps".

* View TSX :
* Returns a "Link" that navigates to "prestation.slug" and wraps the entire card layout.
* Inside the top section :
  -> Displays an image using "prestation.picto" with alt text from "prestation.pictoAlt".
  -> Displays another image using "prestation.number" with alt text from "prestation.numberAlt".
* Inside the bottom section :
  -> Displays a "TitleCard" using "prestation.title" and "prestation.shortDescription".
  - Displays a "Button" that also links to "prestation.slug" with the text "Découvrir".

* 
*/
const CardPrestation: React.FC<CardPrestationProps> = ({ prestation }) => {
    return (
        <Link to={prestation.slug} className={styles.card}>
            <div className={styles.card__top}>
                <img 
                    src={prestation.picto} 
                    alt={prestation.pictoAlt}
                    className={styles.card__top__picto}
                />
            </div>
            <div className={styles.card__bottom}>
                <TitleCard
                className={styles.card__bottom__text}
                title={prestation.title}
                subtitle={prestation.shortDescription}
            />
            </div>
            <Button 
                to={prestation.slug}
                text='Découvrir'
            />
        </Link>
    );
};

export default CardPrestation;