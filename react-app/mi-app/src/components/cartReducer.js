import { TYPES } from "./actions";

export const cartInitialState = {
  products: [
    { id: 1, nombre: "Producto A", precio: 150 },
    { id: 2, nombre: "Producto B", precio: 270 },
    { id: 3, nombre: "Producto C", precio: 220 },
    { id: 4, nombre: "Producto D", precio: 540 },
    { id: 5, nombre: "Producto E", precio: 450 },
    { id: 6, nombre: "Producto F", precio: 190 },
  ],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let nuevoItem = state.products.find(
        (producto) => producto.id === action.payload
      );

      let itemEnCarrito = state.cart.find((item) => item.id === nuevoItem.id);

      return itemEnCarrito
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemEnCarrito.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...nuevoItem, cantidad: 1 }],
          };
    }
    case TYPES.REMOVE_ITEM: {
      let itemAEliminar = state.cart.find((item) => item.id === action.payload);
      console.log(itemAEliminar);

      return itemAEliminar.cantidad > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(item=>item.id!==action.payload)
        };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
        let itemAEliminar = state.cart.find((item) => item.id === action.payload);

        return {
            ...state,
            cart: state.cart.filter(item=>item.id!==action.payload)
        };
    }
    case TYPES.CLEAR_CART: {
        return cartInitialState;
    }
    default:
      return state;
  }
}
