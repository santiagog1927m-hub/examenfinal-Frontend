import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="navbar">

            <button
                className={location.pathname === "/" ? "activo" : ""}
                onClick={() => navigate("/")}
            >
                Inicio
            </button>

            <button
                className={location.pathname.startsWith("/catalogo") ? "activo" : ""}
                onClick={() => navigate("/catalogo")}
            >
                Vitrina
            </button>

            <button
                className={location.pathname === "/compras" ? "activo" : ""}
                onClick={() => navigate("/compras")}
            >
                Mi Canasta
            </button>

            <button
                className={location.pathname === "/compras/resumen" ? "activo" : ""}
                onClick={() => navigate("/compras/resumen")}
            >
                Mi Pedido
            </button>

        </nav>
    );
}

export default Navbar;
