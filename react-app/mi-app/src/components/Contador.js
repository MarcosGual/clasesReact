import React from 'react';
import { useState } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);
  
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
        <>
            <div style={{display: "flex"}}>
                <button onClick={sumar}>Sumar uno</button>
                <h3>{contador}</h3>
                <button onClick={restar}>Restar uno</button>
            </div>
        </>
     );
}

export default Contador;
