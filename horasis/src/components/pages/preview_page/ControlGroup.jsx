import React from 'react';
import { useDrag } from 'react-dnd';
import Carousel from 'react-multi-carousel';

const ControlGroup = ({ title, images, tipo, responsive }) => {
    return (
        <div className="control-group">
            <h3 className="Botton-name">{title}</h3>
            <Carousel responsive={responsive} containerClass="carousel-container">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <DraggableItem tipo={tipo} image={image} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

const DraggableItem = ({ tipo, image }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: tipo,
        item: { src: image.src },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <img src={image.src} alt={image.alt} />
        </div>
    );
};

export default ControlGroup;
