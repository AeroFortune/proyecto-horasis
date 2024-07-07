import React, { useState } from 'react';
import Header from '../navigation/header';
import Footer from '../navigation/footer';

function RopaPage() {
    
    const [avatar, setAvatar] = useState({
        base: '/src/assets/preview_assets/modelo_base.png',
        prendaSuperior: '/src/assets/preview_assets/sueter_bgless.png',
        prendaInferior: '/src/assets/preview_assets/prenda_inferior.png',
        zapatos: '/src/assets/preview_assets/zapatos.png',
    });

    const cambiarImagen = (tipo, nuevaImagen) => {
        setAvatar((prevAvatar) => ({
            ...prevAvatar,
            [tipo]: nuevaImagen,
        }));
    };

    return (
        <><Header></Header>
        <div className='avatar-page'>
            <section className="avatar-body">
                <div className="avatar-container">
                    <img id="avatar" src={avatar.base} alt="Avatar" />
                    <img id="prenda-superior" src={avatar.prendaSuperior} alt="Prenda Superior" />
                    <img id="prenda-inferior" src={avatar.prendaInferior} alt="Prenda Inferior" />
                    <img id="zapatos" src={avatar.zapatos} alt="Zapatos" />
                </div>
            </section>

            <section className="controls">
                <div className="control-group">
                    <h3 className="Botton-name">Prenda Superior</h3>
                    <img src="img/Sueter1.png" alt="Prenda Superior 1" />
                    <button onClick={() => cambiarImagen('prendaSuperior', 'img/Sueter1.png')}>Cambiar</button>
                    <img src="img/Sueter2.png" alt="Prenda Superior 2" />
                    <button onClick={() => cambiarImagen('prendaSuperior', 'img/Sueter2.png')}>Cambiar</button>
                </div>
                <div className="control-group">
                    <h3 className="Botton-name">Prenda Inferior</h3>
                    <img src="img/Pantalon1.png" alt="Prenda Inferior 1" />
                    <button onClick={() => cambiarImagen('prendaInferior', 'img/Pantalon1.png')}>Cambiar</button>
                    <img src="img/Pantalon2.png" alt="Prenda Inferior 2" />
                    <button onClick={() => cambiarImagen('prendaInferior', 'img/Pantalon2.png')}>Cambiar</button>
                </div>
                <div className="control-group">
                    <h3 className="Botton-name">Calzado</h3>
                    <img src="img/Zapatos1.png" alt="Zapatos 1" />
                    <button onClick={() => cambiarImagen('zapatos', 'img/Zapatos1.png')}>Cambiar</button>
                    <img src="img/Zapatos2.png" alt="Zapatos 2" />
                    <button onClick={() => cambiarImagen('zapatos', 'img/Zapatos2.png')}>Cambiar</button>
                </div>
            </section>
        </div>
        <Footer></Footer>
        </>
    );
}

export default RopaPage;
