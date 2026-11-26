import { useState, useEffect } from "react";
import apiDummy from "../services/apiDummy";
import useCarritoStore from "../store/UseCarritoStore";

function ProductosAxios() {

    // guardamos los productos recibidos de la API
    const [productos, setProductos] = useState([]);

    // guardamos la categoria seleccionada
    const [categoria, setCategoria] = useState("");

    // controlamos el estado de carga
    const [cargando, setCargando] = useState(true);

    // guardamos los posibles errores
    const [error, setError] = useState("");

    // funcion para agregar productos a la canasta
    const agregarProducto = useCarritoStore(
        (state) => state.agregarProducto
    );

    // este efecto consulta la API cuando cambia
    useEffect(() => {

        const cargarProductos = async () => {

            try {
                setCargando(true);
                setError("");

                let respuesta;

                // si no tenemos categoria mostramos todos los productos
                if (categoria === "") {
                    respuesta = await apiDummy.get("/products?limit=24");
                } else {

                    // Si hay categoría, consultamos los productos de esa categoría
                    respuesta = await apiDummy.get(
                        `/products/category/${categoria}`
                    );
                }

                // guardamos los productos recibidos
                setProductos(respuesta.data.products);

            } catch {

                
                setError("Error al cargar los productos");

            } finally {

                
                setCargando(false);
            }
        };

        cargarProductos();

    }, [categoria]);

    // mensaje mientras se cargan los productos
    if (cargando) {
        return <h2 className="cargando">Cargando productos...</h2>;
    }

    // mensaje de error
    if (error) {
        return <h2 className="error">{error}</h2>;
    }

    return (
        <div className="productos">

            <h2>Productos con Axios</h2>

            {/* nos sirve para selleccionar una catgoria */}
            <label>Seleccionar categoría:</label>

            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            >
                <option value="">Todos los productos</option>
                <option value="groceries">Groceries</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
            </select>

            {/* mostramos los productos recibidos */}
            <div className="grid-productos">

                {productos.map((producto) => (

                    <div className="producto" key={producto.id}>

                        <img
                            src={producto.thumbnail}
                            alt={producto.title}
                        />

                        <h3>{producto.title}</h3>

                        <p>${producto.price}</p>

                        {/* boton para agregar producto a la canasta */}
                        <button onClick={() => agregarProducto(producto)}>
                            Agregar a la canasta
                        </button>

                    </div>

                ))}

            </div>
        </div>
    );
}

export default ProductosAxios;
