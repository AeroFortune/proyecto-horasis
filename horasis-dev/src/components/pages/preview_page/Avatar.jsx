import React from 'react';

const Avatar = ({ avatar }) => {
    return (
        <section className="avatar-body">
            <div className="avatar-container">
                <img id="avatar" src={avatar.base} alt="Avatar" />
                <img id="prenda-superior" src={avatar.prendaSuperior} alt="Prenda Superior" />
                <img id="prenda-inferior" src={avatar.prendaInferior} alt="Prenda Inferior" />
                <img id="zapatos" src={avatar.zapatos} alt="Zapatos" />
            </div>
        </section>
    );
};

export default Avatar;
