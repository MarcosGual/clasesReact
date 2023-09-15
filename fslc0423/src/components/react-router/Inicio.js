import React, { useReducer, useState } from 'react';
import { TYPES } from './types';

//estado inicial
const initialState = {
    contador: 0,
    mostrarContador: false
}

//función reductora
const contadorReducer = (state, action) => {
    // console.log(state)
    switch (action.type) {
        case TYPES.AUMENTO:
            // console.log(action.payload)
            return { ...state, contador: state.contador + action.payload };
        case TYPES.DECREMENTO:
            // console.log(state.contador);
            return { ...state, contador: state.contador - action.payload }
        case TYPES.MOSTRAR_CONTADOR:
            return { ...state, mostrarContador: !state.mostrarContador }
        default:
            return state;
    }
}

const Inicio = () => {

    //[estado, despachar]
    const [state, dispatch] = useReducer(contadorReducer, initialState);

    const aumentarHandler = () => dispatch({ type: TYPES.AUMENTO, payload: 1 });
    const aumentar2Handler = () => dispatch({ type: TYPES.AUMENTO, payload: 2 })

    const disminuirHandler = () => dispatch({ type: TYPES.DECREMENTO, payload: 1 });
    const disminuir2Handler = () => dispatch({ type: TYPES.DECREMENTO, payload: 2 })

    return (
        <div>
            <h2>Inicio</h2>
            <p>Bienvenidos a nuestra página</p>
            <h4>Contador</h4>
            <button onClick={() => dispatch({ type: TYPES.MOSTRAR_CONTADOR })}>Mostrar Contador</button>
            {state.mostrarContador &&
                <div style={{ textAlign: 'center' }}>
                    <h5>{state.contador}</h5>
                    <button onClick={disminuir2Handler} >Disminuir 2</button>
                    <button onClick={disminuirHandler}>Disminuir</button>
                    <button onClick={aumentarHandler}>Aumentar</button>
                    <button onClick={aumentar2Handler}>Aumentar 2</button>
                </div>}
        </div >
    );
}

export default Inicio;
