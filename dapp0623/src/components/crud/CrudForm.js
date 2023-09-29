import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CrudForm = ({ addUser, user, setUser }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = (e) => {
        e.preventDefault();

        if (userName !== '' && email !== '') {
            const userId = uuidv4(); //generando ID

            addUser({
                userName: userName,
                email: email,
                id: userId
            }) //agregando el usuario
        } else {
            window.alert('Completar los datos del formulario...')
        }
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className='container-fluid'>
            <form>
                <h3>Formulario</h3>
                <label className='form-label' >Nombre de usuario: </label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='nombreDeUsuario'
                    value={userName}
                    onChange={handleUserNameChange}
                />
                <label className='form-label' >E-mail: </label>
                <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='usuario@mail.com'
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleAddUser} className='btn btn-primary mb-3'>Enviar Datos</button>
            </form>
        </div>
    );
}

export default CrudForm;
