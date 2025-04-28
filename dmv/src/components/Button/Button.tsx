import React from 'react';
import styles from "./Button.module.scss";
import { Link } from 'react-router-dom';

// Typage
type ButtonProps = {
    text: string;
    to?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
};

/* Button component
* Type:
* - text: string - The text to display on the button
* - to: string - The link to navigate to when the button is clicked (optional) 
* - onClick: function - The function to call when the button is clicked (optional)
* - type: string - The type of the button (optional, default is 'button')
* 
* Usage:
* - If `to` is provided, the button will be a link that navigates to the specified URL when clicked.
* - If `type` and/or `onClick` is provided, the button will call the specified function when clicked.

*/
const Button: React.FC<ButtonProps> = ({ text, to, onClick, type }) => {

    if (to) {
        return (
            <Link to={to} className={styles.button}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {text}
        </button>
    ) 
};

export default Button;