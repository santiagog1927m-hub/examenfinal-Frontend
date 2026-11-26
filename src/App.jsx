import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layouts/Layout";

// Importamos las páginas
import Inicio from "./pages/Inicio";
import SectionCatalogo from "./pages/SectionCatalogo";
import ProductosFetch from "./pages/ProductosFetch";
import ProductosAxios from "./pages/ProductosAxios";
import SectionCompras from "./pages/SectionCompras";
import Carrito from "./pages/Carrito";
import Resumen from "./pages/Resumen";
import NoEncontrado from "./pages/NoEncontrado";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Diseño principal de la página */}
                <Route path="/" element={<Layout />}>

                    {/* Página de inicio */}
                    <Route index element={<Inicio />} />

                    {/* Sección de la vitrina */}
                    <Route path="catalogo" element={<SectionCatalogo />}>
                        <Route index element={<ProductosFetch />} />
                        <Route path="axios" element={<ProductosAxios />} />
                    </Route>

                    {/* Sección de compras */}
                    <Route path="compras" element={<SectionCompras />}>
                        <Route index element={<Carrito />} />
                        <Route path="resumen" element={<Resumen />} />
                    </Route>

                    {/* Página para rutas que no existen */}
                    <Route path="*" element={<NoEncontrado />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
