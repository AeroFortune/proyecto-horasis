import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../navigation/footer';
import Header from '../../navigation/header';
import Avatar from './Avatar';
import ControlGroup from './ControlGroup';
import DropZone from './DropZone';
import './ropa.css';
import zapato1 from '/home/aerofortune/Coding/Web/proyecto-horasis/horasis/src/assets/preview_assets/calzado/zapato1.png';
import zapato2 from '/src/assets/preview_assets/calzado/zapato2.png';
import zapato3 from '/src/assets/preview_assets/calzado/zapato3.png';
import pantalon1 from '/src/assets/preview_assets/inferior/pantalon1.png';
import pantalon2 from '/src/assets/preview_assets/inferior/pantalon2.png';
import pantalon3 from '/src/assets/preview_assets/inferior/pantalon3.png';
import sueter1 from '/src/assets/preview_assets/superior/sueter1.png';
import sueter2 from '/src/assets/preview_assets/superior/sueter2.png';
import sueter3 from '/src/assets/preview_assets/superior/sueter3.png'; // Importa todas las imágenes de suéteres necesarias

// Función para importar todas las imágenes de una carpeta
const PrendaSuperiorImages = [
    { src: sueter1, alt: 'Sueter 1' },
    { src: sueter2, alt: 'Sueter 2' },
    { src: sueter3, alt: 'Sueter 3' },
];

const PrendaInferiorImages = [
    { src: pantalon1, alt: 'Pantalon 1' },
    { src: pantalon2, alt: 'Pantalon 2' },
    { src: pantalon3, alt: 'Pantalon 3' },
];

const CalzadoImages = [
    { src: zapato1, alt: 'Zapato 1' },
    { src: zapato2, alt: 'Zapato 2' },
    { src: zapato3, alt: 'Zapato 3' },
];

const PreviewPage = () => {
    const [avatar, setAvatar] = useState({
        base: 'img/Modelo_Base.png',
        prendaSuperior: 'img/superior/sueter3.png',
        prendaInferior: 'img/inferior/pantalon2.png',
        zapatos: 'img/calzado/zapato1.png',
    });

    const [showDropZones, setShowDropZones] = useState(false);

    const cambiarImagen = (tipo, nuevaImagen) => {
        setAvatar((prevAvatar) => ({
            ...prevAvatar,
            [tipo]: nuevaImagen,
        }));
    };

    const toggleDropZones = () => {
        setShowDropZones(!showDropZones);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Header></Header>
            <div className="home">
                <button onClick={toggleDropZones} className="toggle-button">
                    {showDropZones ? 'Ocultar Avatar' : 'Mostrar Avatar'}
                </button>
                {showDropZones && (
                    <div className="avatar-dropzone-container">
                        <Avatar avatar={avatar} />
                        <div className="drop-zones">
                            <DropZone tipo="prendaSuperior" cambiarImagen={cambiarImagen} />
                            <DropZone tipo="prendaInferior" cambiarImagen={cambiarImagen} />
                            <DropZone tipo="zapatos" cambiarImagen={cambiarImagen} />
                        </div>
                    </div>
                )}
                <section className="controls">
                    <ControlGroup title="Prenda Superior" tipo="prendaSuperior" images={PrendaSuperiorImages} responsive={responsive} />
                    <ControlGroup title="Prenda Inferior" tipo="prendaInferior" images={PrendaInferiorImages} responsive={responsive} />
                    <ControlGroup title="Calzado" tipo="zapatos" images={CalzadoImages} responsive={responsive} />
                </section>
            </div>
            <Footer></Footer>
        </DndProvider>
    );
};

export default PreviewPage;
