import React, { useEffect, useState } from 'react';

const initialForm = {
    userName: '',
    email: '',
    id: null
}

const CrudForm = ({ addUser, userToEdit, setUserToEdit, updateUser }) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (userToEdit) {
            setForm(userToEdit)
        } else {
            setForm(initialForm);
        }
    }, [userToEdit])

    //manejar cambios en los inputs (nombre de usuario y e-mail)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //manejar el botón de enviar (submit)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.userName || !form.email) {
            alert('Por favor rellene los campos de nombre de usuario y e-mail...')
            return;
        }

        if (userToEdit) {
            updateUser(form);
        } else {
            addUser(form); //llamo a la función agregar usuario
        }

        handleReset(e); //llamo al reset para limpiar el formulario
    }

    //manejar el botón de limpiar formulario (reset)
    const handleReset = (e) => {
        e.preventDefault();
        setForm(initialForm);
        setUserToEdit(null);
    }

    return (
        <div className='container-fluid mb-5'>
            <h3>Formulario</h3>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="userName">Nombre de Usuario</label>
                    <input onChange={handleChange} value={form.userName} type="text" className="form-control" id="userName" name="userName" placeholder="nombreDeUsuario" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">E-Mail</label>
                    <input onChange={handleChange} value={form.email} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="usuario@email.com" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartimos tu email con nadie más.</small>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success' onClick={handleSubmit}>Enviar</button>
                    <button className='btn btn-warning' onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </div>
    );
}

export default CrudForm;