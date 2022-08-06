import React from 'react';

const ItemLista = ({id, contenido, deleteItem}) => {
    function eventHandler() {
        console.log(contenido);
        // console.log('Estoy en el manejador de eventos y este es el id: ', id);
        deleteItem(id);
    }

    return (
        <li key={id} onClick={eventHandler}>
            {contenido}
        </li>
    )
}

export default ItemLista;
