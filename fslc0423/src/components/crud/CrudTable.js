import React from 'react';

const CrudTable = ({ usersDb, setUserToEdit, deleteUser }) => {
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usersDb.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{index}</th>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => setUserToEdit(user)} className='btn btn-warning btn-sm'>Editar</button>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-danger btn-sm'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudTable;