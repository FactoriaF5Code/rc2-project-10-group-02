import { Link } from "react-router-dom";

export const LogginButtons = () => {
    return (
        <section>
             <Link to="/register">REGISTRARSE</Link>
                <button><Link to="/login">INICIAR SESIÓN</Link> </button>
        </section>
    )
}

