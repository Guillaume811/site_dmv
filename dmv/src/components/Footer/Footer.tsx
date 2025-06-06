import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navigationLinks';
import { useModal } from "../Modal/ModalContext";
import ContactForm from '../ContactForm/ContatcForm';
import styles from "./Footer.module.scss";
import logoWhite from "../../assets/pictures/logo-white.png";
import mailIcon from "../../assets/pictures/icons/mail.png";
import phoneIcon from "../../assets/pictures/icons/phone.png";
import linkedinIcon from "../../assets/pictures/icons/linkedin.png";
import instagramIcon from "../../assets/pictures/icons/instagram.png";



// Types

/* Component Footer
* Render logic :
* Uses "new Date().getFullYear()" to get the current year and store it in "currentYear".
* Uses the custom hook "useModal" to get the "open" function, which allows opening a modal.

* View TSX :
* Returns a <footer> element styled with "styles.footer".
* Inside the left section:
  -> Displays the white logo image using "logoWhite".
  -> Shows a text with the current year and a short credit line.
* Inside the right section:
  -> The top part includes:
    -> A navigation list built from "navLinks", where each item is rendered with a <NavLink>.
    -> Another list with links to "Mentions Légales" and "Confidentialité", both using <NavLink>.
    -> A contact block with a title and two icons:
      -> One for email using "mailIcon" that opens the modal with "ContactForm" on click.
      -> One for phone using "phoneIcon", wrapped in an anchor tag.
  -> The bottom part includes social media links:
    -> An Instagram icon that links.
    -> A LinkedIn icon that links.
    -> Both icons open in a new tab.

* Responsive :
*/
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
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