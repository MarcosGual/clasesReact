import { TYPES } from "./actions"

export const carritoInitialState = {
    productos: [
        { id: 1, nombre: 'Producto A', precio: 1500, src: '', stock: 20 },
        { id: 2, nombre: 'Producto B', precio: 1800, src: '', stock: 20 },
        { id: 3, nombre: 'Producto C', precio: 1200, src: '', stock: 20 },
        { id: 4, nombre: 'Producto D', precio: 3100, src: '', stock: 20 },
        { id: 5, nombre: 'Producto E', precio: 2700, src: '', stock: 20 },
        { id: 6, nombre: 'Producto F', precio: 3500, src: '', stock: 20 },
        { id: 7, nombre: 'Producto G', precio: 1300, src: '', stock: 20 },
        { id: 8, nombre: 'Producto H', precio: 2900, src: '', stock: 20 },
    ],
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
        default: return state;
    }
}