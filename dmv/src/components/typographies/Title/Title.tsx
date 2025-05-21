import React from 'react';
import styles from './Title.module.scss';

// Typage
type TitleProps = {
    text: string;
};

/* Component Title
* Receives "text" as a prop from "TitleProps".
* Returns an <h1> element styled with "styles.title" that displays the "text".
*/
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={styles.title}>
            {text}
        </h1>
    ); 
};

export default Title;