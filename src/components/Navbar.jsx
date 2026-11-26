import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    
    const navigate = useNavigate();

    // nos permite saber en que pagina estamos
    const location = useLocation();

    return (
        <nav className="navbar">

            {/* boton para ir al inicio */}
            <button
                className={location.pathname === "/" ? "activo" : ""}
                onClick={() => navigate("/")}
            >
                Inicio
            </button>

            {/* boton para ir a la vitrina */}
            <button
                className={location.pathname.startsWith("/catalogo") ? "activo" : ""}
                onClick={() => navigate("/catalogo")}
            >
                Vitrina
            </button>

            {/* boton para ir a la canasta */}
            <button
                className={location.pathname === "/compras" ? "activo" : ""}
                onClick={() => navigate("/compras")}
            >
                Mi Canasta
            </button>

            {/* boton para ver el pedido */}
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

