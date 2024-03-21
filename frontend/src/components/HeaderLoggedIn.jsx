import { Link } from "react-router-dom";
import LoggedButtons from "./LoggedButtons.jsx";
import "../Styles/Header.css";

function HeaderLoggedIn() {
  return (
    <header>
      <section className="selection">
        <img className="logo" src="../assets/fituplogo.svg" alt="logo" />
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
        <LoggedButtons />
      </section>
    </header>
  );
}

export default HeaderLoggedIn;
