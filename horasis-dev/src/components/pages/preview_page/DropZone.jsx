import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ tipo, cambiarImagen }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: tipo,
        drop: (item) => cambiarImagen(tipo, item.src),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className="drop-zone"
            style={{
                border: isOver ? '2px solid green' : '2px dashed gray',
                padding: '10px',
                margin: '10px',
            }}
        >
            <p>{`Arrastra aquí la ${tipo}`}</p>
        </div>
    );
};

export default DropZone;
