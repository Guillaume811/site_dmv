import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../Modal/ModalContext";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContatcForm";
import styles from "./Navbar.module.scss";
import logo from "../../assets/pictures/logo.png";
import { getNavigationLink, getNavigationLinksExcluding } from "../../data/navigationLinks";
import linkedinIcon from "../../assets/pictures/icons/linkedin-black.png";
import instagramIcon from "../../assets/pictures/icons/instagram-black.png";

/* Component Navbar
* Render logic :
* Uses "getNavigationLink" to get the "homeLink".
* Uses "getNavigationLinksExcluding" to get all navigation links except "home", stored in "navLinks".

* View TSX :
* Returns a <nav> element styled with "styles.navbar".
* Displays a logo as a <Link> pointing to "homeLink?.to".
* Renders a <ul> menu list:
  - Each "navLinks" item is shown as a <NavLink> that closes the menu when clicked.
  - Ends with a "Contact" <Button> that opens a modal with the "ContactForm".

* Responsive :
    * Render logic :
    * Uses "useState" to manage "isOpen", which controls if the menu is open or closed.
    * Uses "useRef" to create two references:
        -> "menuRef" for the <ul> menu element.
        -> "burgerRef" for the burger button.
    * Uses "useModal" to get the "open" function for opening the contact form in a modal.
    * Uses "useEffect" to add an event listener that:
        -> Closes the menu if a user clicks outside of the menu and burger button while the menu is open.
        -> Cleans up the event listener when the component unmounts or "isOpen" changes.
    
    * View TSX :
    * Shows a burger button (☰ or ✖) that toggles the menu open/closed, with accessibility support via "aria-label".
*/
const Navbar: React.FC = () => {
    const homeLink = getNavigationLink("home");
    const navLinks = getNavigationLinksExcluding(["home"]);

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);
    const { open } = useModal();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !burgerRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <>

            <nav className={styles.navbar}>
                <Link to={homeLink?.to || "/"} className={styles.navbar__logo}>
                    <img 
                        src={logo} 
                        alt="Logo DMV - Production"    
                        className={styles.navbar__logo__img}
                    />
                </Link>

                <button
                    ref={burgerRef}
                    className={styles.navbar__burger}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Menu desktop/tablette */}
                <ul className={styles.navbar__listDesktop}>
                    {navLinks.map(({ id, label, to }) => (
                        <li key={id} className={styles.navbar__listDesktop__item}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `${styles.navbar__listDesktop__item__link} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    <li className={styles.navbar__listDesktop__item}>
                        <Button text="Contact" onClick={() => open(<ContactForm />)} />
                    </li>
                </ul>

                {/* Menu mobile uniquement */}
                <div
                    ref={menuRef}
                    className={`${styles.navbar__mobileMenu} ${isOpen ? styles.open : ""}`}
                >
                    <ul className={styles.navbar__mobileMenu__list}>
                        {navLinks.map(({ id, label, to }) => (
                            <li key={id} className={styles.navbar__mobileMenu__list__item}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `${styles.navbar__mobileMenu__list__item__link} ${
                                            isActive ? styles.active : ""
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <li className={styles.navbar__mobileMenu__list__item}>
                            <Button text="Contact" onClick={() => open(<ContactForm />)} />
                        </li>
                    </ul>

                    <div className={styles.navbar__mobileMenu__socials}>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; 