import React from "react";

// Typage
type BasicSectionProps = {
    children: React.ReactNode;
}

//Component
const BasicSection: React.FC<BasicSectionProps> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default BasicSection;