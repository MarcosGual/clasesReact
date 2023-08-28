import React from 'react';

const ItemLista = (props) => {
    // console.log(props.producto);

    // if (props.producto.stock < 1) return null;

    return (
        <>
            {/* renderizado condicional */}
            {(props.producto.stock > 0) && <li>
                Producto: {props.producto.nombre} || Precio: $ {props.producto.precio}
            </li>}
        </>
    );
}

export default ItemLista;