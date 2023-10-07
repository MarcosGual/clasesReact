import React, { useEffect, useReducer, useState } from 'react';
import { carritoInitialState, carritoReducer } from './carritoReducer';
import Producto from './Producto';
import ItemCarrito from './ItemCarrito';
import { TYPES } from './actions';
import axios from 'axios';

const Carrito = () => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const updateState = async () => {
        setIsLoading(true);
        const productsURL = "http://localhost:8080/productos";
        const cartURL = "http://localhost:8080/carrito";

        const resProductos = await axios.get(productsURL);
        const resCarrito = await axios.get(cartURL);

        const productos = resProductos.data;
        const carrito = resCarrito.data;

        dispatch({
            type: TYPES.READ_STATE,
            payload: [productos, carrito]
        })

        setIsLoading(false);
    }

    useEffect(() => {
        updateState()
    }, []);

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
        if (confirmacion) dispatch({ type: TYPES.CLEAR_CART });
    };

    return (
        <div className='container-fluid'>
            <h2>Productos</h2>
            {isLoading ? <h4>Cargando...</h4> : <div className='row'>
                {state.productos.map(producto => <Producto key={producto.id} producto={producto} addToCart={addToCart} />)}
            </div>}
            <h2>Carrito</h2>
            <div>
                {state.carrito.map(item => <ItemCarrito key={item.id} item={item} deleteFromCart={deleteFromCart} />)}
            </div>
            <button onClick={clearCart} className='btn btn-danger'>Limpiar Carrito</button>
        </div>
    );
}

export default Carrito;