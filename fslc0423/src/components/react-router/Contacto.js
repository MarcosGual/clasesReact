import React from 'react';

const Contacto = () => {
    return (
        <form>
            <h2>Formulario de Contacto</h2>
            <label htmlFor='nombre'>Nombre: </label>
            <input type='text' />
            <label htmlFor='apellido'>Apellido: </label>
            <input type='text' />
            <button>Enviar!</button>
        </form>
    );
}

export default Contacto;
