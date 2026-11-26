import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div>
            <Header />

            <Navbar />

            <main className="contenido">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;
