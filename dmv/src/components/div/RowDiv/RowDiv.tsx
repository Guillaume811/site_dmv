import React from 'react';
import styles from "./RowDiv.module.scss";

// Typage
type RowDivProps = {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
}

/* Component RowDiv
* Receives "leftContent" and "rightContent" as props from "RowDivProps".

* View TSX :
* Returns a main <div> with the class "styles.rowDiv".
* Inside, it has two child <div>s:
  -> The first one uses "styles.rowDiv__left" to display the "leftContent".
  -> The second one uses "styles.rowDiv__right" to display the "rightContent". 
*/
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