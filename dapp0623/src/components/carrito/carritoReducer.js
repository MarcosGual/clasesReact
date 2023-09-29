import { TYPES } from "./actions"

export const carritoInitialState = {
    productos: [],
    carrito: []
}

export const carritoReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            //console.log(action.payload);
            let nuevoItem = state.productos.find(producto => producto.id === action.payload);
            // console.log(nuevoItem)
            let itemEnCarrito = state.carrito.find(item => item.id === action.payload);

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } : {
                ...state,
                carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }]
            }
        }
        case TYPES.REMOVE_ITEM: {
            let itemEnCarrito = state.carrito.find(item => item.id === action.payload);

            return itemEnCarrito.cantidad > 1 ? {
                ...state,
                carrito: state.carrito.map(item => item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item)
            } : {
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemEnCarrito.id)
            };
        }
        case TYPES.REMOVE_ALL_ITEMS: {
            let itemEnCarrito = state.carrito.find(item => item.id === action.payload);

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemEnCarrito.id)
            } : state;
        }
        case TYPES.CLEAR_CART: {
            return carritoInitialState;
        }
        case TYPES.READ_STATE: {
            return {
                ...state,
                productos: action.payload[0],
                carrito: action.payload[1]
            }
        }
        default: return state;
    }
}