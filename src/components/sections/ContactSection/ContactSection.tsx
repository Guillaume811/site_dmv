import React from 'react';
import TitleSection from '../TitleSection/TitleSection';
import Button from '../../Button/Button';
import ContactForm from '../../ContactForm/ContatcForm';
import { useModal } from '../../Modal/ModalContext';
import styles from "./ContactSection.module.scss";
import stylesTitlesSection from "../TitleSection/TitleSection.module.scss";

const ContactSection: React.FC = () => {

    const { open } = useModal();

    return (
        <div className={styles.container}>
            <TitleSection
                title='Offrez un nouveau point de vue à votre projet'
                classNameSection={stylesTitlesSection.sectionContact}
                classNameTitle={stylesTitlesSection.sectionContact__title}
            >
                <p>
                    Formulaire simple, réponse rapide : votre projet commence ici.
                </p>

                <Button text="Lancer votre projet" onClick={() => open(<ContactForm />)} />

            </TitleSection>
        </div>
        
    );
}

export default ContactSection;