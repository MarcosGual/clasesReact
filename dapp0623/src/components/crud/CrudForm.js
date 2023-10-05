import React, { useEffect, useState } from 'react';

const initialForm = {
    userName: "",
    email: "",
    id: null
}

const CrudForm = ({ createUser, updateUser, userToEdit, setUserToEdit }) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (userToEdit) {
            setForm(userToEdit)
        } else {
            setForm(initialForm);
        }
    }, [userToEdit])

    const handleChange = (e) => {
        // console.log(e.target.name)

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

        // console.log(form)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.userName || !form.email) {
            alert("Datos incompletos");
            return;
        }
        if (form.id === null) {
            createUser(form);
        } else {
            updateUser(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setUserToEdit(null);
    };

    return (
        <div className='container-fluid'>
            <form>
                <h3>Usuarios</h3>
                <label className='form-label' >Nombre de usuario </label>
                <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='nombreDeUsuario'
                    name='userName'
                    value={form.userName}
                    onChange={handleChange}
                />
                <label className='form-label' >E-mail </label>
                <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='usuario@mail.com'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                />
                <button className='btn btn-success mb-3' onClick={handleSubmit}>Enviar Datos</button>
                <button className='btn btn-danger mb-3' onClick={handleReset}>Limpiar</button>
            </form>
        </div>
    );
}

export default CrudForm;
