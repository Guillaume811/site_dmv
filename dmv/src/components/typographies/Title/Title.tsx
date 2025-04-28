import React from 'react';
import styles from './Title.module.scss';

// Typage
type TitleProps = {
    text: string;
};

// Composant
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    ); 
};

export default Title;