import { Link } from "react-router-dom";
import LogginButtons  from "./LogginButtons.jsx";
import './Header.css'

function HeaderGuest() {
    return (
        <header>
            <section>
                <img src="../assets/fituplogo.svg" alt="logo" />
                <Link to="/">Nuestras instalaciones</Link>
                <Link to="/horario">Horarios</Link>
                <Link to="/reservas">Reservas</Link>
            </section>
            <section>
                 <LogginButtons />
            </section>
        </header>
    );
}

export default HeaderGuest;
