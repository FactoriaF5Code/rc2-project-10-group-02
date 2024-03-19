import "./App.css";
import Router from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>HOLA SOCIOS QUE PAGÁIS Y NO VENÍS NUNCA</h1>
      <Link to="/">HomePage</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/nombresala">Detalle Sala</Link>  
      <Link to="/reservas">Pagina reserva</Link>
      <Link to="/horario">Horario</Link>
      <Link to="/misreservas">Mis Reservas</Link>
    </Router>
  );
}

export default App;
