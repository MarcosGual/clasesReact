import React, { useState } from "react";

const Busqueda = () => {
    // let terminoBusqueda = '';
    const [terminoBusqueda, setTermino]= useState('');

    const manejarCambio = (event) => {
        // console.log(event);
        // console.log(event.target.value);

        // terminoBusqueda=event.target.value;
        setTermino(event.target.value);
    }

    return (
        <div>
            <label htmlFor='buscar'>Buscar: </label>
            <input id='buscar' type='text'
                onChange={manejarCambio} />
            <p>Buscando <strong>{terminoBusqueda}...</strong></p>
        </div>
    )
}

export default Busqueda;