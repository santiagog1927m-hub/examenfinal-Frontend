import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCarritoStore from "../store/UseCarritoStore";

function Resumen() {

    // nos permite navegar a otras paginas
    const navigate = useNavigate();

    // aqui obtenemos los productos de la canasta
    const carrito = useCarritoStore((state) => state.carrito);

    // obtenemos la funcion para vaciar la canasta
    const vaciarCarrito = useCarritoStore(
        (state) => state.vaciarCarrito
    );

    // controlamos si el pedido ya fue confirmado
    const [confirmado, setConfirmado] = useState(false);

    // calculamos las unidades totales
    const unidades = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    // calculamos el subtotal de los productos
    const subtotal = carrito.reduce((total, producto) => {
        return total + producto.price * producto.cantidad;
    }, 0);

    
    const envio = 5000;

    // sumamos el subtotal y el envio
    const total = subtotal + envio;

    // funcin para confirmar el pedido
    const confirmarPedido = () => {
        setConfirmado(true);
        vaciarCarrito();
    };

    // mensaje que aparece cuando confirmamos el pedido
    if (confirmado) {
        return (
            <div className="confirmado">
                <h2>¡Pedido confirmado!</h2>

                <p>Gracias por comprar en Mercacauca.</p>

                <button onClick={() => navigate("/catalogo")}>
                    Volver a la vitrina
                </button>
            </div>
        );
    }

    return (
        <div className="resumen">

            <h2>Resumen de mi pedido</h2>

            {/* revisamos si hay productos en la canasta */}
            {carrito.length === 0 ? (

                <h3 className="vacio">
                    No tienes productos en tu pedido.
                </h3>

            ) : (

                <>
                    {/* mostramos los productos del pedido */}
                    {carrito.map((producto) => (
                        <div className="resumen-producto" key={producto.id}>

                            <p>{producto.title}</p>

                            <p>Unidades: {producto.cantidad}</p>

                            <p>
                                Subtotal: $
                                {(producto.price * producto.cantidad).toFixed(2)}
                            </p>

                        </div>
                    ))}

                    <hr />

                    {/* mostramos los valores del pedido */}
                    <p>Unidades totales: {unidades}</p>

                    <p>Subtotal: ${subtotal.toFixed(2)}</p>

                    <p>Envío: ${envio.toFixed(2)}</p>

                    <h2>Total: ${total.toFixed(2)}</h2>

                    {/* boton para confirmar la compra */}
                    <button onClick={confirmarPedido}>
                        Confirmar pedido
                    </button>
                </>
            )}

            {/* se deshabilita si la canasta esta vacia */}
            <button
                disabled={carrito.length === 0}
                onClick={() => navigate("/catalogo")}
            >
                Seguir comprando
            </button>

        </div>
    );
}


export default Resumen;
