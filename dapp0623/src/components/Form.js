import React, { useState } from 'react';

const Form = () => {
    // const [acumulador, setAcumulador] = useState(0);

    // const aumentarAcumulador = () => {
    //     // ++acumulador;
    //     // console.log(acumulador);
    //     setAcumulador(acumulador + 1)
    // };

    const [listaDeNombres, setListaDeNombres] = useState([]);
    const [nombre, setNombre] = useState('');

    const handleName = (event)=>{
        setNombre(event.target.value)
    }

    const handleAddName = () => {
        setListaDeNombres([...listaDeNombres, nombre])
    }

    return (
        <div>
            <label>Nombre: </label>
            <input onChange={handleName} value={nombre} type='text' />
            <button onClick={handleAddName}>Agregar nombre</button>
            <h3>Lista de Nombres</h3>
            <ul>
                {listaDeNombres.map((nombre, index) => <li key={index}>{nombre}</li>)}
            </ul>
        </div>
    );
}

export default Form;
