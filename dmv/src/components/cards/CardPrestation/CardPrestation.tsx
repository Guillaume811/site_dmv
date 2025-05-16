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
                    className={styles.card__picto}
                />
                <p className={styles.card__number}>
                    {prestation.number}
                </p>
            </div>
            <TitleCard
                className={styles.card__text}
                title={prestation.title}
                subtitle={prestation.shortDescription}
            />
            <Button 
                to={prestation.slug}
                text='Découvrir'
            />
        
        </Link>
    );
};

export default CardPrestation;