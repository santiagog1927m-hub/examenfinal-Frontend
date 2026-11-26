import { useNavigate } from "react-router-dom";

function Inicio() {

    // Nos permite ir a otras páginas
    const navigate = useNavigate();

    return (
        <div className="inicio">

            {/* titulo de la pagina */}
            <h1>Bienvenido a Mercacauca</h1>

            <p>
                Encuentra los mejores productos para tu hogar
                en nuestro mercado virtual
            </p>

            {/* Aquí están las dos secciones principales */}
            <div className="secciones-inicio">

                {/* SecciON de productos */}
                <div className="seccion">
                    <img
                        src="/mercado.jpeg"
                        alt="Productos del mercado"
                    />

                    <h2>nuestra vitrina</h2>

                    <p>
                        productos disponibles
                    </p>

                    {/* boton catalogo */}
                    <button onClick={() => navigate("/catalogo")}>
                        Ver productos
                    </button>
                </div>

                {/* entramos a la canasta */}
                <div className="seccion">
                    <img
                        src="/mercado.jpeg"
                        alt="Canasta de compras"
                    />

                    <h2>Mi Canasta</h2>

                    <p>
                        Revisa tus productos agregados
                        a tu canasta
                    </p>

                    {/* boton de las compras */}
                    <button onClick={() => navigate("/compras")}>
                        Ir a mi canasta
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Inicio;
