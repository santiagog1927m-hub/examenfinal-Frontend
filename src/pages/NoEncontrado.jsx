import { useNavigate } from "react-router-dom";

function NoEncontrado() {

   
    const navigate = useNavigate();

    return (
        <div className="no-encontrado">

            {/* mostramos el código de error */}
            <h1>404</h1>

            <h2>Página no encontrada</h2>

            <p>La página que buscas no existe.</p>

            {/* boton para regresar al inicio */}
            <button onClick={() => navigate("/")}>
                Volver al inicio
            </button>

        </div>
    );
}


export default NoEncontrado;
