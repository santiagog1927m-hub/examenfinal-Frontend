import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCarritoStore from "../store/UseCarritoStore";

function Header() {
    const navigate = useNavigate();

    // Traemos los productos de la canasta
    const carrito = useCarritoStore((state) => state.carrito);

    // Calculamos la cantidad de unidades
    const cantidad = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    // Actualizamos el título de la pestaña
    useEffect(() => {
        document.title = `Mercacauca (${cantidad})`;
    }, [cantidad]);

    return (
        <header className="header">
            <div>
                <h2>Mercacauca</h2>
                <p>Mercado de Popayán</p>
            </div>

            <button onClick={() => navigate("/compras")}>
                Mi Canasta ({cantidad})
            </button>
        </header>
    );
}

export default Header;


