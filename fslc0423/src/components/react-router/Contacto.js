import React, { useState } from 'react';

const Contacto = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event)
        // Crear un objeto con los datos del formulario
        const formData = new FormData();
        formData.append('nombre', formulario.nombre);
        formData.append('correo', formulario.correo);
        formData.append('mensaje', formulario.mensaje);

        // Enviar los datos a formsubmit.co utilizando fetch
        try {
            const response = await fetch('https://formsubmit.co', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Procesar la respuesta si es exitosa
                console.log('Formulario enviado con éxito');
            } else {
                // Manejar errores si la respuesta no es exitosa
                console.error('Error al enviar el formulario - ' + response.json.toString());
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }

    return (
        <form target="_blank" action="https://formsubmit.co/mlgual@hotmail.com" method="POST">
            <label htmlFor="nombre">Nombre: </label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
            />
            <br /><br />
            <label htmlFor="correo">Correo electrónico: </label>
            <input
                type="email"
                id="correo"
                name="email"
                value={formulario.correo}
                onChange={handleChange}
                required
            />
            <br /><br />
            <label htmlFor="mensaje">Mensaje: </label>
            <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={handleChange}
                required
            ></textarea>
            <br /><br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Contacto;
