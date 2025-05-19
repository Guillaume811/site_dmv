import React, { useEffect, useState } from "react";
import styles from "./TabsPrestation.module.scss";
import { PrestationType } from '../../types/prestation.types';
import { PrestationService } from '../../services/PrestationService';
import Button from "../Button/Button";

// Type

// Tabs Component
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