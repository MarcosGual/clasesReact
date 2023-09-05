import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [lista, setLista] = useState(() => [
        { id: 1, title: "Lista en Estado 1" },
        { id: 2, title: "Lista en Estado 2" },
        { id: 3, title: "Lista en Estado 3" },
    ])


    const sumarHandler = () => setContador(prevState => prevState + 1);
    const restarHandler = () => setContador(prevState => prevState - 1);
    const cambiarListaHandler = () => {
        setLista(prevState => [
            ...prevState,
            { id: 4, title: "Lista Cambiada" }
        ])
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h3>Contador</h3>
                <h4>{contador}</h4>
                <button onClick={restarHandler}>-1</button>
                <button onClick={sumarHandler}>+1</button>
            </div>
            <h3>Lista Estado</h3>
            <ul>
                {lista.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
            <button onClick={cambiarListaHandler}>Cambiar lista</button>
        </>
    );
}

export default Contador;
