import { Link } from "react-router-dom";
import LogginButtons from "./LogginButtons.jsx";
import "../Styles/Header.css";

function HeaderGuest() {
  return (
    <header>
      <section className="selection">
        <img className="logo" src="../../public/fituplogo.svg" alt="logo" />
        <Link to="/" className="access">
          Nuestras instalaciones
        </Link>
        <Link to="/timetable" className="access">
          Horarios
        </Link>
        <Link to="/reservas" className="access">
          Reservas
        </Link>
      </section>
      <section>
        <LogginButtons />
      </section>
    </header>
  );
}

export default HeaderGuest;
