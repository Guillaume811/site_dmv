import { NavLink } from "react-router-dom";

// Typage

// Composant
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><NavLink to="/">Accueil</NavLink></li>
                <li className="navbar__item"><NavLink to="/prestation">Prestations</NavLink></li>
                <li className="navbar__item"><NavLink to="/projet">Projets</NavLink></li>
                <li className="navbar__item"><NavLink to="/galerie">Galerie</NavLink></li>
                <li className="navbar__item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;