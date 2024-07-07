import PerfilUsuario from "../ui/perfil-avatar";
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import axios from 'axios';
import axiosInstance from '../hooks/axiosIntercept'
import { useAuth } from "../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PerfilUsuarioPage (){


    const { user, error, logout } = useAuth()
    const navigate = useNavigate()



    const handleLogout = () => {
        logout()
        navigate('/')
    }

    if (user == null) {
        return <p>Cargando datos...</p>;
    }

    if (error){
        return <p>Error viejo aaaa que hiciste uasdasdjasd</p>
    }

    // Agregar INTERCEPTOR o MIDDLEWARE que detecte si tienes un token
    // si tienes token --> perfil ; si no tienes token --> pagina de registro/login

    return(
        <>
        <Header></Header>       
        <section className="seccion-perfil-usuario">
            <PerfilUsuario 
            name={user.name} 
            email={user.email} 
            user_image_url={user.user_image_url} 
            weight={user.weight} 
            height={user.height}>
            </PerfilUsuario>
            <button onClick={handleLogout} >Cerrar sesión</button>
        </section>
        <Footer></Footer>
        </>
        )
    

    
}

export default PerfilUsuarioPage;
