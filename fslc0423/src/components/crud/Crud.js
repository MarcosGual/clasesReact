import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Crud = () => {

    const [usersDb, setUsersDb] = useState([]);

    //estado que vamos utilizar para editar un registro
    const [userToEdit, setUserToEdit] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:8080/usuarios');

            setUsersDb(res.data);
        } catch (error) {
            console.log('Error al obtener usuarios - ' + error.message)
        }
    }

    const addUser = async (user) => {
        user.id = uuidv4();
        user.createdAt = new Date().toLocaleString();

        // setUsersDb([
        //     ...usersDb, user
        // ])

        try {
            await axios.post('http://localhost:8080/usuarios', user);
            getUsers();
        } catch (error) {
            console.log('Error al agregar el usuario - ' + error.message);
        }
    };

    const updateUser = async (user) => {
        //let newUserData = usersDb.map(usu => usu.id === user.id ? user : usu);
        // setUsersDb(newUserData);

        user.updatedAt = new Date().toLocaleString();

        try {
            await axios.put(`http://localhost:8080/usuarios/${user.id}`, user);
            // setUserToEdit(null);
            getUsers();
        } catch (error) {
            console.log('Error al actualizar el usuario - ' + error.message)
        } finally {
        }


    };

    const deleteUser = async (userId) => {
        const confirmation = window.confirm('Desea eliminar el registro con id ' + userId + '?')

        if (confirmation) {
            // setUsersDb(usersDb.filter(usu => usu.id !== userId));
            try {
                await axios.delete(`http://localhost:8080/usuarios/${userId}`);
                getUsers();
            } catch (error) {
                console.log('Error al eliminar registro - ' + error.message);
            }
        } else {
            return;
        }
    };

    return (
        <div className='container'>
            <h1>CRUD con React</h1>
            <CrudForm addUser={addUser} userToEdit={userToEdit} setUserToEdit={setUserToEdit} updateUser={updateUser} />
            <CrudTable usersDb={usersDb} setUserToEdit={setUserToEdit} deleteUser={deleteUser} />
        </div>
    );
}

export default Crud;