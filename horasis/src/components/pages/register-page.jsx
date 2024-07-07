import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../navigation/header';
import Footer from '../navigation/footer';

function Register() {
    //const [count, setCount] = useState(0)
  

    const [name, setName] = useState()
    const [last_name, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [verPassword, setVerPassword] = useState()
    const [birth_date, setBirthDate] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:5000/users/register', {name, last_name, email, password, verPassword, birth_date, weight, height})
      .then(result => {
        console.log(result) 
        if (result.status == 201){
          navigate('/profile')
        } }
    )
      .catch(err => console.log(err))
    }


    return (
      <>
      <Header></Header>
        <div class="register-container">
          <div class="register-box">
          <h1>Registrate</h1>
          
          <form onSubmit={handleSubmit}>

              <div class="input-container">
                <label for="name">Nombre</label>
                <input type="text" onChange={(e) => setName(e.target.value) } id="name"/>
              </div>
              <div class="input-container">
                <label for="last_name">Apellido</label>
                <input type="text" onChange={(e) => setLastName(e.target.value) } id="last_name"/>
              </div>
              <div class="input-container">
                <label for="email">Correo</label>
                <input type="email" onChange={(e) => setEmail(e.target.value) } id="email"/>
              </div>
              <div class="input-container">
                <label for="password">Contraseña</label>
                <input type="password" onChange={(e) => setPassword(e.target.value) } id="password"/>
              </div>
              <div class="input-container">
                <label for="verified_password">Verificar Contraseña</label>
                <input type="password" onChange={(e) => setVerPassword(e.target.value) } id="verPassword"/>
              </div>

      
              
              <div class="input-container">
                <label for="bdate">Fecha de nacimiento</label>
                <input type="date" onChange={(e) => setBirthDate(e.target.value) } id="birth_date"/>
              </div>
              <div class="input-container">
                <label for="height">Altura (m)</label>
                <input type="number" onChange={(e) => setHeight(e.target.value) } id="height"/>
              </div>
              <div class="input-container">
                <label for="weight" id="weight-lbl">Peso (lb)</label>
                <input type="number" onChange={(e) => setWeight(e.target.value) } id="weight"/>
              </div>

            <button type="submit">Registrarse</button>
          </form>
          
          </div>
        </div>
        <Footer></Footer>
      </>

    )
  }
  
  export default Register;
