import React from 'react';
import styles from './CardPrestation.module.scss';
import { Link } from 'react-router-dom';
import { PrestationType } from '../../../types/prestation.types';
import TitleCard from '../../typographies/TitleCard/TitleCard';
import Button from '../../Button/Button';

// Typage
type CardPrestationProps = {
    prestation: PrestationType;
}

// CardPrestation Component
const CardPrestation: React.FC<CardPrestationProps> = ({ prestation }) => {
    return (
        <Link to={prestation.slug} className={styles.card}>
            <div className={styles.card__top}>
                <img 
                    src={prestation.picto} 
                    alt={prestation.pictoAlt}
                    className={styles.card__top__picto}
                />
                <img 
                    src={prestation.number} 
                    alt={prestation.numberAlt}
                    className={styles.card__top__number}
                />
            </div>
            <div className={styles.card__bottom}>
                <TitleCard
                className={styles.card__bottom__text}
                title={prestation.title}
                subtitle={prestation.shortDescription}
            />
            <Button 
                to={prestation.slug}
                text='Découvrir'
            />
            </div>
        </Link>
    );
};

export default CardPrestation;