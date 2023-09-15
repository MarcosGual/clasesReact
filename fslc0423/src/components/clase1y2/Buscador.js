import React, { useState } from 'react';

const Buscador = () => {
    const [terminoBusqueda, setTerminoDeBusqueda] = useState('');

    const busquedaHandler = (event) => {
        // console.log(event.target.value)
        setTerminoDeBusqueda(event.target.value);
    }

    return (
        <div>
            <label htmlFor='busqueda'>Buscar: </label>
            <input onChange={busquedaHandler} type='text' />
            <p>Buscando... {terminoBusqueda}</p>
        </div>
    );
}

export default Buscador;
