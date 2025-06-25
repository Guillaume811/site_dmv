import React from 'react';
import styles from './NotFound.module.scss';
import Button from '../../components/Button/Button';
import { getNavigationLink } from '../../data/navigationLinks';

const NotFound: React.FC = () => {

    const homeLink = getNavigationLink("home");

    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>
                <span>404</span><br/>
                La page est introuvable.
            </h1>
            <p className={styles.container__text}>
                Désolé, la page que vous voulez voir est introuvable.<br/>
                Revenez en lieu sûr :
            </p>
            <Button text='Accueil' to={homeLink?.to}/>
        </div>
    );
};

export default NotFound;