import React, { useEffect } from 'react';
import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudList from './CrudList';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader';

//CRUD: CREATE, READ, UPDATE, DELETE (crear, leer/obtener, actualizar, borrar)
const Crud = () => {

    const [usersDb, setUsersDb] = useState([]);
    const [userToEdit, setUserToEdit] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const updateUserList = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get('http://localhost:8080/usuarios');
            const usuarios = res.data;

            if (usuarios.length > 0) {
                setUsersDb(usuarios);
            }
        } catch (error) {
            console.log('error al obtener usuarios: ' + error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        updateUserList();
    }, []);

    const createUser = (user) => {
        user.createdAt = Date.now().toLocaleString;
        user.id = uuidv4();

        setUsersDb([...usersDb, user]);
    };

    const updateData = (user) => {
        let newData = usersDb.map(el => el.id === user.id ? user : el)
        setUsersDb(newData);
    };

    const deleteUser = (userId) => {
        let isDelete = window.confirm(`Estás seguro de eliminar el registro con el id '${userId}`);

        if (isDelete && userId) {
            let newData = usersDb.filter(el => el.id !== userId);
            setUsersDb(newData);
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>CRUD con React</h2>
            <CrudForm
                createUser={createUser}
                updateData={updateData}
                userToEdit={userToEdit}
                setUserToEdit={setUserToEdit}
            />
            {isLoading && <Loader />}
            {usersDb && <CrudList
                users={usersDb}
                setUserToEdit={setUserToEdit}
                deleteUser={deleteUser}
            />}
        </div>
    );
}

export default Crud;
