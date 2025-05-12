import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";

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
            <Footer />
        </>
    );
};

export default Layout;