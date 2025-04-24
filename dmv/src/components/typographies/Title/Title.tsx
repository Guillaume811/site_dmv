import React from 'react';

// Typage
type TitleProps = {
    text: string;
};

// Composant
const Title: React.FC<TitleProps> = ({ text }) => {
    return <h1>{text}</h1>;
};

export default Title;