import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./TabsPrestation.module.scss";
import { PrestationType } from '../../types/prestation.types';
import { PrestationService } from '../../services/PrestationService';

/* Component TabsPrestation
* Render logic :
* Uses "useState" to store the list of prestations in "prestations".
* Uses another "useState" to track which tab is active using "activeTab", initialized to 1.
* Uses "useEffect" to load all prestations from "PrestationService.getAll()" when the component mounts.
* Once loaded, saves the data in "prestations" and sets the first item's id as the active tab if available.

* View TSX :
* Returns a <div> with class "styles.tabs" that contains two main parts:
  -> A navigation bar where each "prestation.title" is shown as a <Button>. Clicking the button sets that tab as active.
  -> A content area that only displays the panel matching the current "activeTab". Each panel shows:
    -> A pictogram image from "prestation.picto" with alt text.
    -> A title using "prestation.title".
    -> A description text using "prestation.description".

* Responsive :
*/
const TabsPrestation: React.FC = () => {

    const [prestations, setPrestations] = useState<PrestationType[]>([]);
    const [activeTab, setActiveTab] = useState<number>(1);

    useEffect(() => {
        PrestationService.getAll()
        .then((data) => {
            setPrestations(data);
            if (data.length > 0) {
                setActiveTab(data[0].id);
            }
        });
    }, []);
    
    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__nav}>
                {prestations.map(prestation => (
                    <Button 
                        type="button"
                        text={prestation.title}
                        className={`${activeTab === prestation.id ? styles.active : ""}`}
                        onClick={() => setActiveTab(prestation.id)}
                    />
                ))}
            </div>

            <div className={styles.tabs__content}>
                {prestations.map(prestation =>
                    prestation.id === activeTab ? (
                        <div key={prestation.id} className={styles.tabs__content__panel}>
                            <img src={prestation.picto} alt={prestation.pictoAlt} className={styles.tabs__content__panel__icon} />
                            <h2 className={styles.tabs__content__panel__title}>
                                {prestation.title}
                            </h2>
                            <p>{prestation.description}</p>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default TabsPrestation;