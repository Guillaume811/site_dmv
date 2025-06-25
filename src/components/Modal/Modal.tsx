import { ReactNode, useEffect } from "react";
import TitleSection from "../sections/TitleSection/TitleSection";
import styles from "./Modal.module.scss";
import stylesTitlesSection from "../../components/sections/TitleSection/TitleSection.module.scss";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

/* Component Modal
* Receives "onClose" and "children" as props from "ModalProps".

* Render logic :
* Uses "useEffect" to listen for the Escape key:
  -> If the user presses "Escape", it calls "onClose" to close the modal.
* Adds the keydown event listener when the modal appears and removes it when it disappears.

* View TSX :
* Returns an overlay <div> that closes the modal when clicked.
* Inside the overlay:
  - Uses "e.stopPropagation()" to prevent clicks inside the modal from closing it.
  - Shows a close button (×) that triggers "onClose".
  - Displays a "TitleSection" titled "Contact", wrapping whatever content is passed through "children".

* Responsive : 
*/
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        
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