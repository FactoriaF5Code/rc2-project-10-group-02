import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TimeTable from "./pages/TimeTable";

function App() {
  return (
    <Router>
      <h1>HOLA SOCIOS QUE PAGÁIS Y NO VENÍS NUNCA</h1>
      <Link to="/">HomePage</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/nombresala">Detalle Sala</Link>  
      <Link to="/reservas">Pagina reserva</Link>
      <Link to="/TimeTable">Horario</Link>
      <Link to="/misreservas">Mis Reservas</Link>

      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/TimeTable" element={<TimeTable />}  />
      </Routes>
    </Router>
  );
}

export default App;
