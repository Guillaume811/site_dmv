import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";
import styles from "./Navbar.module.scss";

const navLinks = [
    { label: "Prestations", to: "/prestation" },
    { label: "Projets", to: "/projet" },
    { label: "Galerie", to: "/galerie" },
  ];

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
* - Responsive 
*/
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navbar__logo}>
                <img 
                    src={logo} 
                    alt="Logo DMV - Production"    
                    className={styles.navbar__logo__img}
                />
            </Link>

            <ul className={styles.navbar__list}>
                {navLinks.map(({ label, to }) => (
                    <li key={to} className={styles.navbar__list__item}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `${styles.navbar__list__item__link} ${
                                isActive ? styles.active : ""
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}

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