import React from 'react';
import useAxios from '../hooks/useAxios';

const ListaHamburguesas = () => {

    const { data, isLoading, error } = useAxios('http://localhost:8080/hamburguesas');

    return (
        <div>
            <h2>Lista de hamburguesas</h2>
            <ul>
                {error.isError ? <h4>{error.message}</h4>
                    : isLoading ? <h4>Cargando...</h4> :
                        data.map(burger => (
                            <li key={burger.id}>{burger.nombre}</li>
                        ))
                }
            </ul>
        </div>
    );
}

export default ListaHamburguesas;