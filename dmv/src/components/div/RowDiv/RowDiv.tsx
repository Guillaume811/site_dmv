import React from 'react';
import styles from "./RowDiv.module.scss";

// Typage
type RowDivProps = {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
}

const RowDiv: React.FC<RowDivProps> = ({ leftContent, rightContent }) => {
    return (
        <div className={styles.rowDiv}>
            <div className={styles.rowDiv__left}>
                {leftContent}
            </div>
            <div className={styles.rowDiv__right}>
                {rightContent}
            </div>
        </div>
    );
};

export default RowDiv;