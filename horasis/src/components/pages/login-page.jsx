import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Footer from '../navigation/footer';
import Header from '../navigation/header';

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('a')

  const navigate = useNavigate()
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      });
      console.log(response.data)
      const { token } = response.data;
      localStorage.setItem('token', token); // Guardar token en localStorage
      navigate('/perfil')


    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  }

  const handleLink = () => {
    // Navegar a una ruta específica cuando se hace clic en el botón
    navigate('/register');
  };


  return (
    <>
      <Header></Header>
      <div class="login-container">
        <div class="login-box">
          <h1>Login</h1>
          {/* // onSubmit={handleSubmit} */}
          <form onSubmit={handleLogin}>
            {error.toString()}
            <div class="input-container">
              <label for="user">Usuario/E-mail</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" />
            </div>
            <div class="input-container">
              <label for="pass">Contraseña</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" />
            </div>
            <div class="input-container">

              <button type="submit" id="login-btn">Ingresar</button>
              <button type="submit" onClick={handleLink} id="login-btn">Crear nueva cuenta</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login;
