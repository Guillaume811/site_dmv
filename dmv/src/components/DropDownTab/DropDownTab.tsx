import React from "react";
import styles from "./DropDownTab.module.scss";
import { PrestationType } from "../../types/prestation.types";
import ArrowTop from "../../assets/pictures/fleche-top.png";
import ArrowBot from "../../assets/pictures/fleche-bot.png";

type DropDownTabProps = {
    prestation: PrestationType;
    isOpen: boolean;
    onToggle: () => void;
};

/* DropDownTab Component
* Receives "prestation", "isOpen", and "onToggle" as props from "DropDownTabProps".

* View TSX :
* Returns a <div> styled with "styles.dropdown" that represents one collapsible item.
* At the top, displays a <button> as the dropdown header:
  -> Shows the "prestation.title".
  -> Displays an arrow icon that switches between "ArrowTop" and "ArrowBot" depending on "isOpen".
  -> Calls "onToggle" when clicked to open or close the dropdown.

* If "isOpen" is true, displays the dropdown content:
  -> An image from "prestation.picto" with alt text from "prestation.pictoAlt".
  -> A title with "prestation.title".
  -> A paragraph with "prestation.description". 
*/

const DropDownTab: React.FC<DropDownTabProps> = ({ prestation, isOpen, onToggle }) => {
    return (
    <div className={styles.dropdown}>
        <button className={styles.dropdown__header} onClick={onToggle}>
            <span>{prestation.title}</span>
            <img
                src={isOpen ? ArrowTop : ArrowBot}
                alt=""
                className={styles.dropdown__header__icon}
            />
        </button>

        {isOpen && (
        <div className={styles.dropdown__content}>
            <img
                src={prestation.picto}
                alt={prestation.pictoAlt}
                className={styles.dropdown__content__icon}
            />
            <h2 className={styles.dropdown__content__title}>
                {prestation.title}
            </h2>
            <p className={styles.dropdown__content__description}>
                {prestation.description}
            </p>
        </div>
        )}
    </div>
    );
};

export default DropDownTab;