import { NavLink, Outlet } from "react-router-dom";
import useCarritoStore from "../store/UseCarritoStore";

function SectionCompras() {

    // aqui obtenemos los productos que tenemos en la canasta
    const carrito = useCarritoStore((state) => state.carrito);

    // aqui sumamos todas las unidades de los productos
    const cantidad = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    return (
        <div>

            {/* la portada de la seccion de compras */}
            <div className="portada">
                <h1>Mis compras</h1>
                <p>Administra tu canasta y revisa tu pedido.</p>
            </div>

            {/* pestañas para cambiar entre canasta y pedido */}
            <nav className="pestanas">

                {/* muestra la cantidad de productos */}
                <NavLink to="/compras" end>
                    Mi Canasta ({cantidad})
                </NavLink>

                {/* muestra el resumen del pedido */}
                <NavLink to="/compras/resumen">
                    Mi Pedido
                </NavLink>

            </nav>

           
            <Outlet />

        </div>
    );
}


export default SectionCompras;
