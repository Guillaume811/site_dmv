import React from "react";

// Typage
type BasicSectionProps = {
    className?: string;
    children: React.ReactNode;
}

/* Compoent BasicSection
* Receives "className" and "children" as props from "BasicSectionProps".

* View TSX :
* Returns a <section> element.
* Applies the "className" if provided, otherwise uses an empty string.
* Renders whatever is passed as "children" inside the section.
*/
const BasicSection: React.FC<BasicSectionProps> = ({ className, children }) => {
    return (
        <section className={`${className ?? ""}`}>
            {children}
        </section>
    );
};

export default BasicSection;