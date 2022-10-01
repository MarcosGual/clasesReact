import React from 'react';
import useImage from '../hooks/useImage';

const Tarjeta = ({tarjeta}) => {
    return (
        <div className='card'>
            <img className="card--imagen" src={useImage('./img/katie.png')} alt="" />
            <div className="card--stats">
                <img className='card--estrella' src={useImage('./img/estrellita.png')} />
                <span>5.0</span>
                <span className="gris">(6) · </span>
                <span className="gris">USA</span>
            </div>
            <p className='card--titulo'>Lecciones con Katie Zaferes</p>
            <p><span className='negrita'>Desde $9060</span>/persona</p>
        </div>
    );
}

export default Tarjeta;
