import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

export const LoggedButtons = () => {
    return (
        <section className="loggin-buttons">
            <Link to="/" className="access" style={{ color: 'red', marginRight: '10px' }}>
                <FontAwesomeIcon icon={faTimes} />CERRAR SESIÓN
            </Link>
            <span className="access">HOLA, ALEJANDRA</span>
        </section>
    )
}
