import { ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";
import TitleSection from "../sections/TitleSection/TitleSection";
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
// Fermer avec Échap
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        // Fermer avec clic en dehors de la modale
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.overlay__modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.overlay__modal__close} onClick={onClose}>×</button>
                <TitleSection 
                    title="Contact"
                    classNameSection={stylesTitlesSection.sectionPresentation}
                    classNameTitle={stylesTitlesSection.sectionPresentation__title}
                >
                    {children}
                </TitleSection>
                
            </div>
        </div>
    );
};

export default Modal;