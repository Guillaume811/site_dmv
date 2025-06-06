import React from 'react';

// Typage
type RowDivProps = {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
    classNameRowDiv: string;
    classNameRowDivLeft?: string;
    classNameRowDivRight?: string;
}

/* Component RowDiv
* Receives "leftContent", "rightContent", "classNameRowDiv", "classNameRowDivLeft", and "classNameRowDivRight" as props from "RowDivProps".
* Determines if inner <div> wrappers should be used based on the presence of both "classNameRowDivLeft" and "classNameRowDivRight".

* View TSX :
* Returns a main <div> with the class "classNameRowDiv".
* If both inner class names are provided:
  -> Wraps "leftContent" in a <div> with "classNameRowDivLeft".
  -> Wraps "rightContent" in a <div> with "classNameRowDivRight".
* If not, renders "leftContent" and "rightContent" directly without inner <div> wrappers.
*/
const RowDiv: React.FC<RowDivProps> = ({ leftContent, rightContent, classNameRowDiv, classNameRowDivLeft, classNameRowDivRight }) => {
    const hasInnerDivs = classNameRowDivLeft && classNameRowDivRight;

    return (
        <div className={classNameRowDiv}>
        {hasInnerDivs ? (
            <>
                <div className={classNameRowDivLeft}>
                    {leftContent}
                </div>
                <div className={classNameRowDivRight}>
                    {rightContent}
                </div>
            </>
        ) : (
            <>
                {leftContent}
                {rightContent}
            </>
        )}
        </div>
    );
};

export default RowDiv;