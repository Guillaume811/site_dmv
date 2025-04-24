import React from 'react';

// Typage
type TitleCardProps = {
    text: string;
};

// Composant
const TitleCard: React.FC<TitleCardProps> = ({ text }) => {
    return <h3>{text}</h3>;
};

export default TitleCard;