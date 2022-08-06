import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ListaUsuarios = ({items}) => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState({
        message: '',
        isError: false
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data)) //caso de éxito
            .catch(err => setError({
                message: err.message,
                isError: true
            }))
            .finally(() => {
                setTimeout(() => setIsLoading(false), 2000)
            })
    }, [items])

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {error.isError ? <h4>{error.message}</h4>
                    : isLoading ? <h4>Cargando...</h4> :
                        users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;