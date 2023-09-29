import axios from "axios";
import { TYPES } from "./types";

export const carritoInitialState = {
    products: [],
    cart: []
}

export const carritoReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const nuevoItem = state.products.find(product => product.id === action.payload);

            const itemEnCarrito = state.cart.find(item => item.id === action.payload);

            let carritoActualizado = [];

            if (itemEnCarrito) {
                carritoActualizado = state.cart.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } else {
                carritoActualizado = [...state.cart, { ...nuevoItem, cantidad: 1 }]
            }

            return {
                ...state,
                cart: carritoActualizado
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
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1]
            }
        }
        default:
            return state;
    }
}