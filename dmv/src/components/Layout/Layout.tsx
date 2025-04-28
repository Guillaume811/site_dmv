import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

// Typage

// Component

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>je suis le footer</p>
            </footer>
        </>
    );
};

export default Layout;