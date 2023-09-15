import React, { useEffect } from 'react';

const ItemLista = ({ producto }) => {
    // console.log(props.producto);

    const { nombre, precio, stock } = producto;

    useEffect(() => {
        console.log('Item de lista cargado: ' + nombre);

        return ()=>{
            console.log('Item de lista desmontado');
        }; //utilizando la fase de vida DESMONTAJE
    }, []) //array de dependencias vacío --> fase de vida MONTAJE

    return (
        <>
            {/* renderizado condicional */}
            {(stock > 0) && <li>
                Producto: {nombre} || Precio: $ {precio}
            </li>}
        </>
    );
}

export default ItemLista;