import React from 'react';

const Producto = ({ producto, addToCart }) => {

    //destructuro ("desgrano") el objeto producto en sus partes
    const { id, nombre, precio, src } = producto;

    return (
        <div className='col-sm-6 col-md-4'>
            <h4>{nombre}</h4>
            <h5>$ {precio}</h5>
            <button onClick={() => addToCart(id)} className='btn btn-success btn-sm'>Agregar</button>
        </div>
    );
}

export default Producto;