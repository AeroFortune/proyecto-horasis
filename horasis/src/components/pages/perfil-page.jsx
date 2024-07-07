import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Footer from "../navigation/footer";
import Header from "../navigation/header";
import PerfilUsuario from "../ui/perfil-avatar";

function PerfilUsuarioPage() {


    const { user, error, logout } = useAuth()
    const navigate = useNavigate()



    const handleLogout = () => {
        logout()
        navigate('/')
    }

    console.log(user)

    if (user == null) {
        return <p>Cargando datos...</p>;
    }

    if (error) {
        return <p>Error viejo aaaa que hiciste uasdasdjasd</p>
    }

    // Agregar INTERCEPTOR o MIDDLEWARE que detecte si tienes un token
    // si tienes token --> perfil ; si no tienes token --> pagina de registro/login

    return (
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
