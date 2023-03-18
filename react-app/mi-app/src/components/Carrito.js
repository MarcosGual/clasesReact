import React, { useReducer } from "react";
import { TYPES } from "./actions";
import { cartInitialState, cartReducer } from "./cartReducer";
import ItemCarrito from "./ItemCarrito";
import Producto from "./Producto";

const Carrito = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, eliminarTodos) => {
    if (eliminarTodos) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <h2>Productos</h2>
      <div>
        {products.map((product) => {
          return (
            <Producto key={product.id} data={product} addToCart={addToCart} />
          );
        })}
      </div>
      <h2>Carrito</h2>
      <div>
        {cart.map((item) => {
          return (
            <ItemCarrito
              key={item.id}
              data={item}
              deleteFromCart={deleteFromCart}
            />
          );
        })}
      </div>
      <button onClick={() => clearCart()}>Limpiar Carrito</button>
    </div>
  );
};

export default Carrito;
