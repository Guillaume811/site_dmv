import React, { useState } from 'react';
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
    const [hasHovered, setHasHovered] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const maskSprite = '/pictures/hover-button/urban-sprite.png';

    const maskStyle = {
        WebkitMaskImage: `url(${maskSprite})`,
        maskImage: `url(${maskSprite})`,
        WebkitMaskSize: '3000% 100%',
        maskSize: '3000% 100%',
    } as React.CSSProperties;

    const animationClass =  isHovering
        ? styles.animateIn
        : hasHovered
        ? styles.animateOut
        : styles.noAnim;

    const content = (
        <>
        <span
            className={`${styles.maskedGreen} ${animationClass}`}
            style={maskStyle}
        />
        <span className={styles.content}>{text}</span>
        </>
    );

    const commonProps = {
        onMouseEnter: () => {
        setHasHovered(true);
        setIsHovering(true);
        },
        onMouseLeave: () => {
        setIsHovering(false);
        },
        className: `${styles.button} ${externalClassName}`,
    };

    return to ? (
        <Link to={to} {...commonProps}>
        {content}
        </Link>
    ) : (
        <button type={type} onClick={onClick} {...commonProps}>
        {content}
        </button>
    );
};

export default Button;