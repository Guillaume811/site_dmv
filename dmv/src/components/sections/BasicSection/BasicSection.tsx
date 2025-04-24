import React from "react";
import styles from "./BasicSection.module.scss";

// Typage
type BasicSectionProps = {
    children: React.ReactNode;
}

//Component
const BasicSection: React.FC<BasicSectionProps> = ({ children }) => {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
};

export default BasicSection;