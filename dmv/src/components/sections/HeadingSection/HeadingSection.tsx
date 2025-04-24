import React from "react";
import Title from "../../typographies/Title/Title";

// Typage
type HeadingSectionProps = {
    title: string;
}

/* Component
* HeadingSection is a section that contains a title (h1).
*/
const HeadingSection: React.FC<HeadingSectionProps> = ({ title }) => {
    return (
        <section>
            <Title text={title}/>
        </section>
    );
};

export default HeadingSection;