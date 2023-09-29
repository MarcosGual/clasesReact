import React, { useEffect } from 'react';
import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudList from './CrudList';
import axios from 'axios';

//CRUD: CREATE, READ, UPDATE, DELETE (crear, leer/obtener, actualizar, borrar)
const Crud = () => {

    const [users, setUsers] = useState([]); //lista de usuarios 
    const [user, setUser] = useState('');

    const actualizarListaUsuarios = async () => {
        const res = await axios.get('http://localhost:8080/usuarios');
        const usuarios = res.data;

        if (usuarios.length > 0) {
            setUsers(usuarios);
        }
    }

    useEffect(() => {
        actualizarListaUsuarios();
    }, []);

    const addUser = async (user) => {
        if (user) {
            setUsers([...users, user])

            //solicitud post --> para agregar datos a una base de datos (en este caso una api falsa)
            const { data } = await axios.post('http://localhost:8080/usuarios', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(data);
        }
    }

    const editUser = (user) => {

    }

    const deleteUser = async (deletedUserId) => {

        const deleteConfirmation = window.confirm('Desea eliminar el usuario?')

        if (deleteConfirmation) {
            const newUsersArray = users.filter(user => user.id !== deletedUserId);
            setUsers(newUsersArray);

            await axios.delete(`http://localhost:8080/usuarios/${deletedUserId}`)
        }
    }

    return (
        <div>
            <h2>CRUD con React</h2>
            <CrudForm addUser={addUser} user={user} setUser={setUser} />
            <CrudList users={users} deleteUser={deleteUser} />
        </div>
    );
}

export default Crud;
