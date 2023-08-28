import React from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    // [estado, funcionQueCambiaElEstado]

    const aumentarHandler = () => setContador(prevState => prevState + 1);
    const disminuirHandler = () => setContador(prevState => prevState - 1);


    return (
        <div>
            <h2>Ejemplo de contador</h2>
            <div style={{ textAlign: 'center' }}>
                <h4>{contador}</h4>
                <button onClick={aumentarHandler}>Aumentar</button>
                <button onClick={disminuirHandler}>Disminuir</button>
            </div>
        </div>
    );
}

export default Contador;
