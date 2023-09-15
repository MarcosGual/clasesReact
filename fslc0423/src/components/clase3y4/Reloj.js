import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

const Reloj = ({ hora }) => {
    return (
        <h3>{hora}</h3>
    )
}

const RelojEffect = () => {
    const [visible, setVisible] = useState(false);
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const {isDarkTheme} = useContext(ThemeContext);

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1)
        }

        return () => {
            clearInterval(temporizador);
        }
    }, [visible])

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#020202' : null, color: isDarkTheme ? '#ffffff' : null }}>
            <h3>Reloj</h3>
            <div>{visible ? <Reloj hora={hora} /> : 'Cargando...'}</div>
            <br />
            <button onClick={() => setVisible(!visible)}>Ver Reloj</button>
        </div>
    );
}

export default RelojEffect;
