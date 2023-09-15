import React from 'react';

const ListaSimple = (props) => {
    let equipos = props.listaDeEquipos;

    return (
        <ul>
            {equipos.map(equipo => <li key={equipo.id}>{equipo.nombre}</li>)}
        </ul>
    );
}

export default ListaSimple;
