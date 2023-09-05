import React, { useReducer, useState } from 'react';
import { TYPES } from './types';

//estado inicial
const initialState = {
    contador: 0
}

//función reductora
const contadorReducer = (state, action) => {
    switch (action.type) {
        case TYPES.incrementar:
            console.log(state.contador + 1);
            return { contador: state.contador + 1 };
        case TYPES.decrementar:
            console.log(state.contador - 1);
            return { contador: state.contador - 1 };
        default:
            return state;
    }
}

const Contador = () => {

    const [estado, dispatch] = useReducer(contadorReducer, initialState);

    const sumarUno = () => dispatch({ type: TYPES.incrementar });
    const restarUno = () => dispatch({ type: TYPES.decrementar });

    return (
        <div>
            <h2>Ejemplo de contador</h2>
            <div style={{ textAlign: 'center' }}>
                <h4>{estado.contador}</h4>
                <button onClick={sumarUno}>Incrementar</button>
                <button onClick={restarUno}>Decrementar</button>
            </div>
        </div>
    );
}

export default Contador;

//componente con useState
// const [contador, setContador] = useState(0);
{/* <button onClick={() => setContador(contador + 1)}>Aumentar</button>
     <button onClick={() => setContador(contador - 1)}>Disminuir</button> */}