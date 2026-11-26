import { useState, useEffect } from "react";
import useCarritoStore from "../store/UseCarritoStore";

function ProductosFetch() {

    // guardamos los productos que llegan de la API
    const [productos, setProductos] = useState([]);

    // aqui controlamos para mirar si los productos estan cargando
    const [cargando, setCargando] = useState(true);

    // guardamos un mensaje de error
    const [error, setError] = useState("");

    // se guarda lo que escribimos en el buscador
    const [busqueda, setBusqueda] = useState("");

    // la funcion que nos sirve para agregar productos a la canasta
    const agregarProducto = useCarritoStore(
        (state) => state.agregarProducto
    );

    
    useEffect(() => {

        // aqui nos controla la peticinn para poder cancelarla
        const controlador = new AbortController();

        const cargarProductos = async () => {

            try {
                setCargando(true);
                setError("");

                // aqui consultamos los productos de la api
                const respuesta = await fetch(
                    "https://fakestoreapi.com/products",
                    { signal: controlador.signal }
                );

                // aqui revisamos la respuesta si es correcta
                if (!respuesta.ok) {
                    throw new Error("Error al cargar productos");
                }

                // se convierte la respuedsta a json
                const datos = await respuesta.json();

                // aqui guardamos los productos recibidos
                setProductos(datos);

            } catch (error) {

                // aqui mostramos error si la peticion falla
                if (error.name !== "AbortError") {
                    setError("No se pudieron cargar los productos");
                }

            } finally {

                // aqui lo que hacemos es quitar el estado de carga si la petición no fue cancelada
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            }
        };

        cargarProductos();

        // aqui cancelamos la petición si salimos de la página
        return () => {
            controlador.abort();
        };

    }, []);

    // aqui filtramos los productos de nuestro gusto
    const productosFiltrados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    // aqui mostramos mensaje mientras cargan los productos
    if (cargando) {
        return <h2 className="cargando">Cargando productos...</h2>;
    }

    // aqui un mensaje por error
    if (error) {
        return <h2 className="error">{error}</h2>;
    }

    return (
        <div className="productos">

            <h2>Productos disponibles</h2>

            {/* buscador de productos */}
            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {/* aqui mostramos los productos */}
            <div className="grid-productos">

                {productosFiltrados.map((producto) => (

                    <div className="producto" key={producto.id}>

                        <img
                            src={producto.image}
                            alt={producto.title}
                        />

                        <h3>{producto.title}</h3>

                        <p>${producto.price}</p>

                        {/* boton para agregar a la canasta */}
                        <button onClick={() => agregarProducto(producto)}>
                            Agregar a la canasta
                        </button>

                    </div>

                ))}

                {/* mensaje cuando no encontramos productos */}
                {productosFiltrados.length === 0 && (
                    <p>No se encontraron productos.</p>
                )}

            </div>
        </div>
    );
}

export default ProductosFetch;
