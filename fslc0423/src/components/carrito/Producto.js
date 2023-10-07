import React from 'react';

const Producto = ({ producto, addToCart }) => {

    //destructuro ("desgrano") el objeto producto en sus partes
    const { id, nombre, precio, src } = producto;

    return (
        <div className='col-sm-6 col-md-4 text-center mb-4'>
            <div className='mb-2'>
                <h4>{nombre}</h4>
                <img width={150} src={src} alt={nombre} />
                <h5 className='mt-2'>$ {precio}</h5>
            </div>
            <button onClick={() => addToCart(id)} className='btn btn-success btn-sm'>Agregar</button>
        </div>
    );
}

export default Producto;