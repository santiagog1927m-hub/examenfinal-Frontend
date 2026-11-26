import useCarritoStore from "../store/UseCarritoStore";

function Carrito() {

    // obtenemos los productos de la canasta
    const carrito = useCarritoStore((state) => state.carrito);

    // obtenemos las funciones para manejar los productos
    const sumarUnidades = useCarritoStore(
        (state) => state.sumarUnidades
    );

    const restarUnidades = useCarritoStore(
        (state) => state.restarUnidades
    );

    const eliminarProducto = useCarritoStore(
        (state) => state.eliminarProducto
    );

    const vaciarCarrito = useCarritoStore(
        (state) => state.vaciarCarrito
    );

    // calculamos el total de la canasta
    const total = carrito.reduce((suma, producto) => {
        return suma + producto.price * producto.cantidad;
    }, 0);

    return (
        <div className="carrito">

            <h2>Mi Canasta</h2>

            {/* revisamos si la canasta está vacía */}
            {carrito.length === 0 ? (

                <h3 className="vacio">Tu canasta está vacía.</h3>

            ) : (

                <>
                    {/* recorremos los productos de la canasta */}
                    {carrito.map((producto) => (

                        <div className="item-carrito" key={producto.id}>

                            <img
                                src={producto.image || producto.thumbnail}
                                alt={producto.title}
                            />

                            <div>
                                <h3>{producto.title}</h3>

                                <p>Precio: ${producto.price}</p>

                                <p>Unidades: {producto.cantidad}</p>

                                <p>
                                    Subtotal: $
                                    {(producto.price * producto.cantidad).toFixed(2)}
                                </p>

                                {/* boton para restar unidades */}
                                <button onClick={() => restarUnidades(producto.id)}>
                                    -
                                </button>

                                {/* boton para sumar unidades */}
                                <button onClick={() => sumarUnidades(producto.id)}>
                                    +
                                </button>

                                {/* boton para eliminar el producto */}
                                <button onClick={() => eliminarProducto(producto.id)}>
                                    Eliminar
                                </button>
                            </div>

                        </div>
                    ))}

                    {/* mostramos el total de todos los productos */}
                    <h2>Total: ${total.toFixed(2)}</h2>

                    {/* boton para vaciar toda la canasta */}
                    <button onClick={vaciarCarrito}>
                        Vaciar canasta
                    </button>
                </>
            )}

        </div>
    );
}


export default Carrito;
