import React from 'react';

const CartItem = ({ item, deleteFromCart }) => {

    const { id, precio, nombre, cantidad } = item;

    return (
        <div className='col-md-12 d-flex justify-content-between mb-3'>
            <h5>{nombre}</h5>
            <h5>{cantidad} u</h5>
            <h5>$ {precio}</h5>
            <button onClick={() => deleteFromCart(id, false)} className='btn btn-warning btn-sm'>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)} className='btn btn-warning btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default CartItem;
