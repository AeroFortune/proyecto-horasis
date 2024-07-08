function PerfilUsuario({user_image_url, name, email, weight, height}){
return(
        <>
            <div class="perfil-usuario-header">
                <div class="perfil-usuario-portada">
                    <div class="perfil-usuario-avatar">
                        <img src={user_image_url} alt="img-avatar"></img>
                        <button type="button" class="boton-avatar">
                            <i class="far fa-image"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="perfil-usuario-body">
                <div class="perfil-usuario-bio">
                    <h3 class="nombre usuario">Bienvenido, {name}</h3>
                </div>
                <div class="perfil-usuario-footer">
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-envelope"></i>Correo: {email}</li>
                        <li><i class="icono fas fa-weight"></i>Peso: {weight}</li>
                        <li><i class="icono fas fa-arrows-alt-v"></i>Altura: {height}</li>
                    </ul>
                </div>
            </div>
            
        </>
            
        );
    }
export default PerfilUsuario;
