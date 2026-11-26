import { NavLink, Outlet } from "react-router-dom";

function SectionCatalogo() {

    return (
        <div>

            {/* imagen y titulo de la portada */}
            <div className="portada">
                <h1>Nuestra vitrina</h1>
                <p>Encuentra los mejores productos.</p>
            </div>

            {/* aqui nos sirve para cambiar entre las subpaginas */}
            <nav className="pestanas">

                {/* Primera pestaña */}
                <NavLink to="/catalogo" end>
                    Productos con Fetch
                </NavLink>

                {/* Segunda pestaña */}
                <NavLink to="/catalogo/axios">
                    Productos con Axios
                </NavLink>

            </nav>

            
            <Outlet />

        </div>
    );
}

// Exportamos el componente
export default SectionCatalogo;
