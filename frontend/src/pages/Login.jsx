import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import HeaderGuest from '../components/HeaderGuest';
const Login = () => {
    //State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
       const navigate = useNavigate();

    //Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const loginSuccess = await Login({ email: email, password: password });
            if (loginSuccess) {
                setEmail('');
                setPassword('');
                navigate("/", { state: { msg: "Inicio de sesión correcto" } });
            }
        } 
        catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div>
        <HeaderGuest />
        
        <form onSubmit={handleSubmit} className="Form">

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
        </form>
    </div>
    );
};


export default Login;