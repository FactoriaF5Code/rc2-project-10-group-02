import { Link } from "react-router-dom";
import LoggedButtons from "./LoggedButtons.jsx";
import './Header.css'

function HeaderLoggedIn() {
    return (
        <header>
            <section>
                <img src="../assets/fituplogo.svg" alt="logo" />
                <Link to="/">Nuestras instalaciones</Link>
                <Link to="/horario">Horarios</Link>
                <Link to="/reservas">Reservas</Link>
            </section>
            <section>
                <LoggedButtons />
            </section>
        </header>
    );
}

export default HeaderLoggedIn;