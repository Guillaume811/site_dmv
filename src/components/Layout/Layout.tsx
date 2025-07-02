import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CookieBanner from "../CookieBanner/CookieBanner";

/* Component Layout
* Returns a fragment that includes the full page layout.
* At the top, wraps the "Navbar" inside a <header>.
* In the middle, uses <main> to display the current page content through "Outlet".
* At the bottom, displays the "Footer" component.
*/
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
            <CookieBanner />
        </>
    );
};

export default Layout;