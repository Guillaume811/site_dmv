import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss";


// Typage
type ButtonProps = {
    text: string;
    to?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
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
const Button: React.FC<ButtonProps> = ({ text, to, onClick, type, className }) => {

    if (to) {
        return (
            <Link to={to} className={styles.button}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${className}`}>
            {text}
        </button>
    ) 
};

export default Button;