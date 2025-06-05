import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss";


// Typage
type ButtonProps = {
    text: string;
    to?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    externalClassName?: string;
};

/* Component Button
* Receives "text", "to", "onClick", "type", and "className" as props from "ButtonProps".

* View TSX :
* If "to" exists :
* -> Returns a "Link" that goes to the given path and shows the "text"
* -> It uses the "styles.button" class
* If "to" doesn't exist :
* -> Returns a regular <button> with the given "type",
* -> "onClick" function,
* -> Extra class from "className",
* -> It also shows the "text".

* 

*/
const Button: React.FC<ButtonProps> = ({ text, to, onClick, type, externalClassName }) => {
    const maskSprite = '/pictures/hover-button/urban-sprite.png';

  // Masque appliqué uniquement à l'élément visuel (pas sur le bouton/Link lui-même)
    const maskStyle = {
        WebkitMaskImage: `url(${maskSprite})`,
        maskImage: `url(${maskSprite})`,
        WebkitMaskSize: '3000% 100%',
        maskSize: '3000% 100%',
        WebkitMaskPosition: '100% 0',
        maskPosition: '100% 0',
    } as React.CSSProperties;

    const content = (
        <>
        <span className={styles.maskedGreen} style={maskStyle} />
        <span className={styles.content}>{text}</span>
        </>
    );

    if (to) {
        return (
        <Link to={to} className={`${styles.button} ${externalClassName}`}>
            {content}
        </Link>
        );
    }

    return (
        <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${externalClassName}`}
        >
        {content}
        </button>
    );
};

export default Button;