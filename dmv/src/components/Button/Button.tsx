import React from 'react';

// Typage
type ButtonProps = {
    text: string;
};

// Composant
const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button>{text}</button>;
};

export default Button;