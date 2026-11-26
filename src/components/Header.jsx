import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    return (
        <header className="header">

            <div>
                <h2>Mercacauca</h2>
                <p>Mercado de Popayán</p>
            </div>

            <button onClick={() => navigate("/compras")}>
                Mi Canasta (0)
            </button>

        </header>
    );
}

export default Header;


