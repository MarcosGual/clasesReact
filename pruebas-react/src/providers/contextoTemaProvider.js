import React, { useState } from 'react';

export const contextoTema = React.createContext();

const ContextoTemaProvider = ({ children }) => {
    const [esTemaClaro, setEsTemaClaro] = useState(false);

    const estiloTemas = {
        color: esTemaClaro ? '#fff' : '#000',
        backgroundColor: esTemaClaro ? '#292C35' : '#fff'
    }

    function manejadorDeTemas() {
        setEsTemaClaro(!esTemaClaro);
    }

    const valorDeTema = {
        estiloTemas: estiloTemas,
        manejadorDeTemas: manejadorDeTemas,
        esTemaClaro: esTemaClaro
    }

    return (
        <div>
            <contextoTema.Provider value={valorDeTema}>
                {children}
            </contextoTema.Provider>
        </div>
    );
}

export default ContextoTemaProvider;