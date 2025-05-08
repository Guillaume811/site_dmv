import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "./Modal"; // Ton composant modal réutilisable

// Typage du context
type ModalContextType = {
    open: (content: ReactNode) => void; // Affiche une modal avec du contenu JSX
    close: () => void;                  // Ferme la modal
};

// Création du contexte avec une valeur initiale "null" (sera définie plus tard)
const ModalContext = createContext<ModalContextType | null>(null);

// Hook personnalisé pour utiliser le contexte dans n’importe quel composant
export const useModal = () => {
    const context = useContext(ModalContext); // Accès à la valeur du contexte
    if (!context) throw new Error("useModal doit être utilisé dans ModalProvider");
    return context; // On renvoie { open, close }
};

// Typage du provider
type ModalProviderProps = {
    children: ReactNode;
};

// Fournisseur du contexte : englobe toute l’application
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    // État local pour stocker le contenu actuel de la modal
    const [content, setContent] = useState<ReactNode | null>(null);
  
    // Ouvre la modal avec du contenu (ex : <ContactForm />)
    const open = (node: ReactNode) => setContent(node);
  
    // Ferme la modal (efface le contenu)
    const close = () => setContent(null);

    return (
        // Fournit les fonctions open/close à toute l'application
        <ModalContext.Provider value={{ open, close }}>
          {/* Ton app entière */}
          {children} 
    
          {/* Si la modal a du contenu, on l’affiche */}
          {content && <Modal onClose={close}>{content}</Modal>}
        </ModalContext.Provider>
    );
};