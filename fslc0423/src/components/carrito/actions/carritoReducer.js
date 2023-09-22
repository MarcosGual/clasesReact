import { TYPES } from "./types";

export const carritoInitialState = {
    products: [
        { id: 1, nombre: "Producto A", precio: 500, stock: 20, src: "" },
        { id: 2, nombre: "Producto B", precio: 800, stock: 10, src: "" },
        { id: 3, nombre: "Producto C", precio: 900, stock: 15, src: "" },
        { id: 4, nombre: "Producto D", precio: 400, stock: 6, src: "" },
        { id: 5, nombre: "Producto E", precio: 750, stock: 23, src: "" },
        { id: 6, nombre: "Producto F", precio: 350, stock: 5, src: "" }
    ],
    cart: []
}

export const carritoReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const nuevoItem = state.products.find(product => product.id === action.payload);

            const itemEnCarrito = state.cart.find(item => item.id === action.payload);

            return itemEnCarrito ? {
                ...state,
                cart: state.cart.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } : {
                ...state,
                cart: [...state.cart, { ...nuevoItem, cantidad: 1 }]
            }
        }
        case TYPES.REMOVE_ITEM: {
            const itemEnCarrito = state.cart.find(item => item.id === action.payload);


            return itemEnCarrito.cantidad > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== itemEnCarrito.id)
            }
        }
        case TYPES.REMOVE_ALL_ITEMS: {

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return carritoInitialState;
        }
        default:
            return state;
    }
}