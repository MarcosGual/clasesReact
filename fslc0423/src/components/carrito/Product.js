import React from 'react';

const Product = ({ product, addToCart }) => {

    const { id, nombre, precio, src } = product;

    return (
        <div className='col-sm-6 col-md-4 mb-4'>
            <h4>{nombre}</h4>
            <h5>$ {precio}</h5>
            <button onClick={()=>addToCart(id)} className='btn btn-success btn-sm'>Agregar</button>
        </div>
    );
}

export default Product;
