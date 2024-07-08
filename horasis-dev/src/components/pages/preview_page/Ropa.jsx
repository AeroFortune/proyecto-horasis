import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Avatar from './Avatar';
import ControlGroup from './ControlGroup';
import DropZone from './DropZone';
import './ropa.css';

const Ropa = () => {
    const [avatar, setAvatar] = useState({
        base: 'img/Modelo_Base.png',
        prendaSuperior: 'img/Sueter_sin_fondo.png',
        prendaInferior: 'img/Prenda_inferior.png',
        zapatos: 'img/zapatos.png',
    });

    const cambiarImagen = (tipo, nuevaImagen) => {
        setAvatar((prevAvatar) => ({
            ...prevAvatar,
            [tipo]: nuevaImagen,
        }));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="ropa">
                <Avatar avatar={avatar} />
                <section className="controls">
                    <ControlGroup
                        title="Prenda Superior"
                        tipo="prendaSuperior"
                        images={[
                            { src: 'img/Sueter1.png', alt: 'Prenda Superior 1' },
                            { src: 'img/Sueter2.png', alt: 'Prenda Superior 2' },
                        ]}
                    />
                    <ControlGroup
                        title="Prenda Inferior"
                        tipo="prendaInferior"
                        images={[
                            { src: 'img/Pantalon1.png', alt: 'Prenda Inferior 1' },
                            { src: 'img/Pantalon2.png', alt: 'Prenda Inferior 2' },
                        ]}
                    />
                    <ControlGroup
                        title="Calzado"
                        tipo="zapatos"
                        images={[
                            { src: 'img/Zapatos1.png', alt: 'Zapatos 1' },
                            { src: 'img/Zapatos2.png', alt: 'Zapatos 2' },
                        ]}
                    />
                </section>
            </div>
        </DndProvider>
    );
};

export default Ropa;
