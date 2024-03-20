import { Link } from "react-router-dom";
import "./Header.css"
const LogginButtons = () => {
    return (
        <section className="loggin-buttons">
            <Link to="/register" className="access">REGISTRARSE</Link>
            <button><Link to="/login" className="access">INICIAR SESIÓN</Link> </button>
        </section>
    )
}
 export default LogginButtons;
