import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "./Modal";

// Typage du context
type ModalContextType = {
    open: (content: ReactNode) => void; 
    close: () => void;                  
};

/* ModalContext
* Creates a context named "ModalContext" using "createContext".
* The initial value is set to "null" and will be updated later with a real value.
* The context is typed with "ModalContextType".
*/
const ModalContext = createContext<ModalContextType | null>(null);

/* useModal
* A custom hook that uses "useContext" to access the "ModalContext".
* If the context is not available (null), it throws an error saying "useModal" must be used inside "ModalProvider".
* If the context exists, returns it. This includes functions like "open" and "close".
*/
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal doit être utilisé dans ModalProvider");
    return context;
};

// Typage of provider
type ModalProviderProps = {
    children: ReactNode;
};

/* ModalProvider
* Receives "children" as a prop from "ModalProviderProps".
* Uses "useState" to store the current modal content in "content", which starts as null.
* Defines "open" to set the modal content and show the modal.
* Defines "close" to clear the content and hide the modal.

* Returns a "ModalContext.Provider" that shares the "open" and "close" functions with all children.
* Renders the "children" inside the provider.
* If "content" is not null, displays the "Modal" component with the given content and a close function. 
*/
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [content, setContent] = useState<ReactNode | null>(null);
    const open = (node: ReactNode) => setContent(node);
    const close = () => setContent(null);

    return (
        <ModalContext.Provider value={{ open, close }}>
          {children} 
          {content && <Modal onClose={close}>{content}</Modal>}
        </ModalContext.Provider>
    );
};