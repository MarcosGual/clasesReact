import React, { useState } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0);
    // const array=useState(0);
    // const contador=array[0];
    // const setContador=array[1];

    const sumar = () => setContador((prevState) => prevState + 1);
    const restar = () => setContador((prevState) => prevState - 1);
    const reiniciar = () => setContador(0);
    const sumarCinco = () => setContador(prevState=>prevState+5);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <button onClick={restar}>-</button>
                <h3>{contador}</h3>
                <button onClick={sumar}>+</button>
                <button onClick={reiniciar}>Reinicio</button>
                <button onClick={sumarCinco}>+ 5</button>
            </div>
        </>
    )
}

export default Contador;