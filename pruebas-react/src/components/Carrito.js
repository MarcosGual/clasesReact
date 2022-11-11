import { clear } from "@testing-library/user-event/dist/clear";
import React, { useContext } from "react";
import { useReducer } from "react";
import { contextoTema } from "../providers/contextoTemaProvider";
import { TYPES } from "./actions";
import { carritoInitialState, carritoReducer } from "./carritoReducer";
import ItemCarrito from "./ItemCarrito";
import Producto from "./Producto";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { estiloTemas, manejadorDeTemas } = useContext(contextoTema);

  const { productos, carrito } = state;

  const addToCart = (id) => {
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
    <div style={estiloTemas}>
      <h1>Carrito de Compras con React</h1>
      <h2>Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <Producto key={producto.id} data={producto} addToCart={addToCart} />
        ))}
      </div>
      <h2>Carrito</h2>
      <div className="row">
        {carrito.map((item, index) => (
          <ItemCarrito
            key={index}
            data={item}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
      <button onClick={clearCart} className="btn btn-warning btn-sm">
        Limpiar Carrito
      </button>
      <button onClick={manejadorDeTemas} className="btn btn-danger btn-sm">
        Cambiar Tema
      </button>
    </div>
  );
};

export default Carrito;
