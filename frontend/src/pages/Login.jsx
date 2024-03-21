import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import HeaderGuest from "../components/HeaderGuest";

const Login = () => {
  //State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginSuccess = await Login({ email: email, password: password });
      if (loginSuccess) {
        setEmail("");
        setPassword("");
        navigate("/", { state: { msg: "Inicio de sesión correcto" } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <HeaderGuest />

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="form__btn">INICIAR SESIÓN </button>
        <div class="form__opciones">
          <label for="recordar" class="form__recordarme">
            <input type="checkbox" id="recordar" />
            Recordarme en este equipo
          </label>
          <a href="#" class="form__enlace">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
