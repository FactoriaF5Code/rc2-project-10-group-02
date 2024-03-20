import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const LoggedButtons = () => {
    return (
        <section>
            <Link to="/" style={{ color: 'red', marginRight: '10px' }}>
                <FontAwesomeIcon icon={faTimes} />CERRAR SESIÓN
            </Link>
            <span>HOLA, ALEJANDRA</span>
        </section>
    )
}
