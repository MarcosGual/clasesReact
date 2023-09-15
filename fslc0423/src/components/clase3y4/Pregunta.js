import React, { useState } from 'react';

const Pregunta = () => {
    //useState --> se declara el estado
    // me devuelve un array con el estado y una función para cambiarlo
    const [respuesta, setRespuesta] = useState('');

    const verRespuestaHandler = () => setRespuesta('El estado es dinámico, privado, encapsulado, e "inmutable".')
    const ocultarRespuestaHandler = () => setRespuesta('');

    return (
        <div>
            <h3>Estado: useState hook</h3>
            <p>¿Cómo es el estado en React?</p>
            <button onClick={verRespuestaHandler}>Ver respuesta</button> <button onClick={ocultarRespuestaHandler}>Ocultar respuesta</button>
            <p>{respuesta}</p>
        </div>
    );
}

export default Pregunta;