import React, { useReducer } from 'react';
import { carritoInitialState, carritoReducer } from './carritoReducer';
import Producto from './Producto';
import ItemCarrito from './ItemCarrito';
import { TYPES } from './actions';

const Carrito = () => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    };

    const deleteFromCart = (id, eliminarTodos) => {
        // console.log(id)
        if (eliminarTodos) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        }
    };

    const clearCart = () => {
        let confirmacion = window.confirm('Está seguro de que desea borrar el carrito?');
        if(confirmacion) dispatch({ type: TYPES.CLEAR_CART });
    };

    return (
        <div className='container-fluid'>
            <h2>Productos</h2>
            <div className='row'>
                {state.productos.map(producto => <Producto key={producto.id} producto={producto} addToCart={addToCart} />)}
            </div>
            <h2>Carrito</h2>
            <div>
                {state.carrito.map(item => <ItemCarrito key={item.id} item={item} deleteFromCart={deleteFromCart} />)}
            </div>
            <button onClick={clearCart} className='btn btn-danger'>Limpiar Carrito</button>
        </div>
    );
}

export default Carrito;