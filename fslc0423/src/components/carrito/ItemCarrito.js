import React from 'react';

const ItemCarrito = ({ item, deleteFromCart }) => {

    const { id, nombre, precio, cantidad } = item;

    return (
        <div className='d-flex justify-content-between' style={{ marginBottom: 4 }}>
            <h5>{nombre}</h5>
            <h5>$ {precio}</h5>
            <h5>{cantidad} u</h5>
            <button onClick={()=>deleteFromCart(id, false)} className='btn btn-warning'>Eliminar uno</button>
            <button onClick={()=>deleteFromCart(id, true)} className='btn btn-warning'>Eliminar todos</button>
        </div>
    );
}

export default ItemCarrito;
