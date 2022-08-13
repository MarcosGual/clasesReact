import React from 'react';
import useAxios from '../hooks/useAxios';

const ListaUsuarios = () => {

    const { data, isLoading, error } = useAxios('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {error.isError ? <h4>{error.message}</h4>
                    : isLoading ? <h4>Cargando...</h4> :
                        data.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;