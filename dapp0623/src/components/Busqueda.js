import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../providers/ThemeContext';

const Busqueda = () => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const { isDarkTheme, toggleTheme } = useThemeContext();

    const handlerBusqueda = (event) => {
        // console.log(event.target.value)
        setTerminoBusqueda(event.target.value)
    }

    useEffect(() => {
        // console.log('Componente cargado');
        console.log('término de búsqueda cambió')
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: isDarkTheme ? '#222222' : null, color: isDarkTheme ? '#ffffff' : null }}>
            <button onClick={toggleTheme}>Cambiar Tema</button>
            <label htmlFor='terminoBusqueda'>Buscar: </label>
            <input onChange={handlerBusqueda} type='text' />
            <h4>Buscando {terminoBusqueda}...</h4>
        </div>
    );
}

export default Busqueda;
