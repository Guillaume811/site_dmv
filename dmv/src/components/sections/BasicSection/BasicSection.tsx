import React from "react";

// Typage
type BasicSectionProps = {
    className?: string;
    children: React.ReactNode;
}

//Component
const BasicSection: React.FC<BasicSectionProps> = ({ className, children }) => {
    return (
        <section className={`${className ?? ""}`}>
            {children}
        </section>
    );
};

export default BasicSection;