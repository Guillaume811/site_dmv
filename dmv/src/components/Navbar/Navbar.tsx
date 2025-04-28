import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";
import styles from "./Navbar.module.scss";
import { useEffect, useRef, useState } from "react";
import { getNavigationLink, getNavigationLinksExcluding } from "../../data/navigationLinks";

/* Navbar Composant
* --------------------
* Display Navbar at the top of the site, including :
* - A clickable logo that redirects to the homepage
* - A dynamic list of navigation links generated from the `navLinks` array
*   - Each link uses `NavLink`
*   - Active links display an animated underline
* - A custom `Button` component at the end (for Contact), rendered outside the loop
* 
* Styling:
* - Hover and active states are managed via `::after`
* 
* Responsive:
* - 
*/
const Navbar: React.FC = () => {
    // Récupère le lien de home
    const homeLink = getNavigationLink("home");
    // Récupère tous les autre lien sauf home
    const navLinks = getNavigationLinksExcluding(["home"]);
    
    // Gère si le menu est ouvert ou fermer
    const [isOpen, setIsOpen] = useState(false);
    // Créer une référence pour l'élément ul 
    // Permet de savoir où se trouve le menu dans le DOM
    // et de le manipuler si besoin (ex: pour le fermer au clic en dehors du menu)
    const menuRef = useRef<HTMLUListElement>(null);
    // Créer une référence pour le bouton burger
    const burgerRef = useRef<HTMLButtonElement>(null);

     // Ferme le menu si on clique à l’extérieur
    useEffect(() => {
        // Déclaration de la fonction qui gère le clic en dehors du menu, elle reçois un objet event de type MouseEvent.
        const handleClickOutside = (event: MouseEvent) => {
        // Vérifie si :    
        if (
            // le menu est ouvert
            isOpen &&
            // la ref du menu est présente dans le DOM
            menuRef.current &&
            // le click n'a pas eu lieu dans le menu lui même
            !menuRef.current.contains(event.target as Node) &&
            // le click n'a pas eu lieu sur le bouton burger
            !burgerRef.current?.contains(event.target as Node)
        ) {
            // Si oui, change l'état du menu pour le fermer
            setIsOpen(false);
        }
    };
    // Ajoute un écouteur d'événement pour le clic sur le document
    document.addEventListener("mousedown", handleClickOutside);
    // Nettoie l'écouteur d'événement lorsque le composant est démonté ou que l'état du menu change
    // (pour éviter les fuites de mémoire)
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // On le fait dans le useEffect pour que ça ne soit pas fait à chaque render
  }, [isOpen]);

    return (
        <nav className={styles.navbar}>
            <Link to={homeLink?.to || "/"} className={styles.navbar__logo}>
                <img 
                    src={logo} 
                    alt="Logo DMV - Production"    
                    className={styles.navbar__logo__img}
                />
            </Link>

            {/* Bouton burger (mobile) */}
            <button
                ref={burgerRef} // Ajoute la ref au bouton burger
                className={styles.burger}
                onClick={() => setIsOpen((prev) => !prev)} // Change l'état du menu au clic
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} // Accessibilité : indique si le menu est ouvert ou fermé
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Menu mobile ou desktop */}
            <ul 
                ref={menuRef} // Ajoute la ref au menu
                className={`${styles.navbar__list} ${isOpen ? styles.open : ""}`}>
                    {navLinks.map(({ id, label, to }) => (
                        <li key={id} className={styles.navbar__list__item}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `${styles.navbar__list__item__link} ${
                                    isActive ? styles.active : ""
                                    }`
                                }
                                onClick={() => setIsOpen(false)} // ferme le menu après clic
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}

                    {/* TODO: Changer le <li></li> par le compnent Button + Ajouter le onclik pour le responsive */}
                    <li className={styles.navbar__list__item}>
                        <NavLink to="/contact" className={styles.navbar__list__item__link}>
                            Contact
                        </NavLink>
                    </li>
            </ul>
        </nav>
    );
};

export default Navbar;