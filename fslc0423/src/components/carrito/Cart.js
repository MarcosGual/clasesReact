import React, { useReducer } from 'react';
import { carritoInitialState, carritoReducer } from './actions/carritoReducer';
import Product from './Product';
import CartItem from './CartItem';
import { TYPES } from './actions/types';

const Cart = () => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    const deleteFromCart = (id, eliminarTodos) => {
        if (eliminarTodos) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        }
    };

    const clearCart = () => {
        const confirm = window.confirm('Está seguro de que desea vaciar el carrito?')
        if (confirm) {
            dispatch({ type: TYPES.CLEAR_CART })
        }
    };

    return (
        <div className='container-fluid'>
            <h2 className='mb-2'>Productos</h2>
            <div className='row'>
                {state.products.map(producto => <Product key={producto.id} product={producto} addToCart={addToCart} />)}
            </div>
            <h2 className='mb-2'>Carrito</h2>
            <div className='row'>
                {state.cart.map(item => <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />)}
            </div>
            {state.cart.length > 0 && <button onClick={clearCart} className='btn btn-danger btn-sm'>Vaciar Carrito</button>}
        </div>
    );
}

export default Cart;
