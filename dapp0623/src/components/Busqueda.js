import React, { useEffect, useState } from 'react';

const Busqueda = () => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    const handlerBusqueda = (event) => {
        // console.log(event.target.value)
        setTerminoBusqueda(event.target.value)
    }

    useEffect(() => {
        // console.log('Componente cargado');
        console.log('término de búsqueda cambió')
    }, [])

    return (
        <div>
            <label htmlFor='terminoBusqueda'>Buscar: </label>
            <input onChange={handlerBusqueda} type='text' />
            <h4>Buscando {terminoBusqueda}...</h4>
        </div>
    );
}

export default Busqueda;
