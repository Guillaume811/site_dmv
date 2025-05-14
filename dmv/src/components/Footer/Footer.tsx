import React from 'react';
import styles from "./Footer.module.scss";
// Pictures and icons
import logo from "../../assets/pictures/logo.png";
import mailIcon from "../../assets/pictures/icons/mail.png";
import phoneIcon from "../../assets/pictures/icons/phone.png";
import linkedinIcon from "../../assets/pictures/icons/linkedin.png";
import instagramIcon from "../../assets/pictures/icons/instagram.png";
import { useModal } from "../Modal/ModalContext";
import ContactForm from '../ContactForm/ContatcForm';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navigationLinks';

// Types

// Footer component
const Footer: React.FC = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Hook to open the modal
    const { open } = useModal();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <div className={styles.footer__top__left}>                    
                    <div className={styles.footer__top__left__social}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className={styles.footer__top__left__social__icon} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.footer__top__left__social__icon} />
                        </a>
                    </div>                    
                </div>
                <div className={styles.footer__top__center}>
                    <ul className={styles.footer__top__center__list}>
                    {navLinks.map(({ id, label, to }) => (
                        <li key={id} className={styles.footer__top__center__list__items}>
                            <NavLink
                                to={to}
                                className={styles.footer__top__center__list__items__link}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    </ul> 
                </div>
                <div className={styles.footer__top__right}>
                    <div className={styles.footer__top__right__contact}>
                        <img
                            src={mailIcon}
                            alt="Contacter par email"
                            className={styles.footer__top__right__contact__icon}
                            onClick={() => open(<ContactForm />)}
                            role="button"
                        />
                        <a href="">
                            <img src={phoneIcon} alt="Appeler DMV - Production" className={styles.footer__top__right__contact__icon} />
                        </a>
                    </div> 
                </div> 
            </div>
            <div className={styles.footer__bottom}>
                <p className={styles.footer__bottom__text}>
                    &copy; {currentYear} DMV - Production. Made in Djénius
                </p>
                <ul className={styles.footer__bottom__list}>
                    <li className={styles.footer__bottom__list__items}>
                        <NavLink to='/legal' className={styles.footer__bottom__list__items__link}>
                            Mentions Légales
                        </NavLink>
                    </li>
                    <li className={styles.footer__bottom__list__items}>
                        <NavLink to='/legal' className={styles.footer__bottom__list__items__link}>
                            Confidentialité
                        </NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;