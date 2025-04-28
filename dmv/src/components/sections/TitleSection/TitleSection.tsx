import React from "react";
import styles from "./TitleSection.module.scss";

// Typage
type TitleSectionProps = {
    classNameSection?: string;
    classNameTitle?: string;
    title: string;
    children: React.ReactNode;
};

/* Component
* TitleSection is a section that contains a title (h2) and children elements.
*/
const TitleSection: React.FC<TitleSectionProps> = ({ classNameSection, classNameTitle, title, children}) => {
    return(
        <section className={classNameSection ?? ""}>
            <h2 className={classNameTitle ?? ""}>
                {title}
            </h2>
            {children}
        </section>

    );
};

export default TitleSection;