import React from 'react';
import styles from "./Footer.module.scss";
// Pictures and icons
import logoWhite from "../../assets/pictures/logo-white.png";
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
            <div className={styles.footer__left}>
                <img src={logoWhite} alt="Logo DMV-Production" className={styles.footer__left__logo}/>
                <p className={styles.footer__left__text}>
                    &copy; {currentYear} DMV - Production.<br/>
                    Made in Djénius
                </p>
            </div>

            <div className={styles.footer__right}>
                <div className={styles.footer__right__top}>
                    <div className={styles.footer__right__top__nav}>
                        <ul className={styles.footer__right__top__nav__list}>
                        {navLinks.map(({ id, label, to }) => (
                            <li key={id} className={styles.footer__right__top__nav__list__items}>
                                <NavLink
                                    to={to}
                                    className={styles.footer__right__top__nav__list__items__link}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.footer__right__top__nav__list}>
                        <li className={styles.footer__right__top__nav__list__items}>
                            <NavLink to='/legal' className={styles.footer__right__top__nav__list__items__link}>
                                Mentions Légales
                            </NavLink>
                        </li>
                        <li className={styles.footer__right__top__nav__list__items}>
                            <NavLink to='/legal' className={styles.footer__right__top__nav__list__items__link}>
                                Confidentialité
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className={styles.footer__right__top__contact}>
                        <h4 className={styles.footer__right__top__contact__title}>
                            Contactez-nous :
                        </h4>
                        <div className={styles.footer__right__top__contact__button}>
                            <img
                                src={mailIcon}
                                alt="Contacter par email"
                                className={styles.footer__right__top__contact__button__icon}
                                onClick={() => open(<ContactForm />)}
                                role="button"
                            />
                            <a href="">
                                <img src={phoneIcon} alt="Appeler DMV - Production" className={styles.footer__right__top__contact__button__icon} />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.footer__right__bottom}>
                    {/*<h4 className={styles.footer__right__bottom__title}>
                        Suivez-nous :
                    </h4>*/}
                    <div className={styles.footer__right__bottom__social}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className={styles.footer__right__bottom__social__icon} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.footer__right__bottom__social__icon} />
                        </a>
                    </div> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;