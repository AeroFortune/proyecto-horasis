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

// Función para importar todas las imágenes de una carpeta

const PrendaSuperiorImages = Object.entries(import.meta.glob('../../../../public/img/superior/*.{png,jpg,jpeg,svg}')).map(([path, resolver], index) => ({
    src: path.replace('../../../../public/', '/'),
    alt: `Sueter ${index + 1}`
}));

const PrendaInferiorImages = Object.entries(import.meta.glob('../../../../public/img/inferior/*.{png,jpg,jpeg,svg}')).map(([path, resolver], index) => ({
    src: path.replace('../../../../public/', '/'),
    alt: `Pantalon ${index + 1}`
}));

const CalzadoImages = Object.entries(import.meta.glob('../../../../public/img/calzado/*.{png,jpg,jpeg,svg}')).map(([path, resolver], index) => ({
    src: path.replace('../../../../public/', '/'),
    alt: `Zapatos ${index + 1}`
}));

// const PrendaSuperiorImages = [
//     { src: sueter1, alt: 'Sueter 1' },
//     { src: sueter2, alt: 'Sueter 2' },
//     { src: sueter3, alt: 'Sueter 3' },
// ];

// const PrendaInferiorImages = [
//     { src: pantalon1, alt: 'Pantalon 1' },
//     { src: pantalon2, alt: 'Pantalon 2' },
//     { src: pantalon3, alt: 'Pantalon 3' },
// ];

// const CalzadoImages = [
//     { src: zapato1, alt: 'Zapato 1' },
//     { src: zapato2, alt: 'Zapato 2' },
//     { src: zapato3, alt: 'Zapato 3' },
// ];

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
