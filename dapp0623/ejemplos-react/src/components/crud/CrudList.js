import React from 'react';

const CrudList = ({ users, setUserToEdit, deleteUser }) => {
    return (
        <div className='container-fluid'>
            <h3>Lista de Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre de Usuario</th>
                        <th>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => setUserToEdit(user)} className='btn btn-warning btn-sm'>Editar</button></td>
                            <td><button onClick={() => deleteUser(user.id)} className='btn btn-danger btn-sm'>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudList;
