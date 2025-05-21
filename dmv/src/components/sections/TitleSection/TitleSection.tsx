import React from "react";
import styles from "./TitleSection.module.scss";

// Typage
type TitleSectionProps = {
    classNameSection?: string;
    classNameTitle?: string;
    title: string;
    children: React.ReactNode;
};

/* Component TitleSection
* Receives "classNameSection", "classNameTitle", "title", and "children" as props from "TitleSectionProps".

* View TSX :
* Returns a <section> element with "classNameSection" if provided, or an empty string.
* Inside the section:
  -> Displays a <h2> element with "classNameTitle" if provided, or an empty string, showing the "title".
  -> Renders the "children" content below the title.
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