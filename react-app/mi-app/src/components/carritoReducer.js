import { TYPES } from "./actions";

export const carritoInitialState = {
    productos: [
        {
            id: 1,
            nombre: "PRODUCTO A",
            precio: 20,
            src: "https://w7.pngwing.com/pngs/76/532/png-transparent-t-shirt-computer-icons-dress-shirt-t-shirt.png",
        },
        {
            id: 2,
            nombre: "PRODUCTO B",
            precio: 35,
            src: "https://i.pinimg.com/originals/bb/c3/5e/bbc35e5e40de2799464a1fd65047021b.png",
        },
        {
            id: 3,
            nombre: "PRODUCTO C",
            precio: 95,
            src: "https://cdn-icons-png.flaticon.com/512/2589/2589973.png",
        },
        {
            id: 4,
            nombre: "PRODUCTO D",
            precio: 80,
            src: "https://cdn-icons-png.flaticon.com/512/2093/2093798.png",
        },
        {
            id: 5,
            nombre: "PRODUCTO E",
            precio: 60,
            src: "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/014/791/original/shorts_5798614.png",
        },
        {
            id: 6,
            nombre: "PRODUCTO F",
            precio: 15,
            src: "https://cdn-icons-png.flaticon.com/512/976/976228.png",
        },
    ],
    carrito: [],
};

export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let nuevoItem = state.productos.find(producto => producto.id === action.payload)
            //console.log(nuevoItem)

            let itemEnCarrito = state.carrito.find(item => item.id === action.payload)

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } : {
                ...state,
                carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }]
            }
        }

        case TYPES.REMOVE_ITEM: {
            let itemAEliminar = state.carrito.find(item => item.id === action.payload)

            return itemAEliminar.cantidad > 1 ? {
                ...state,
                carrito: state.carrito.map(item => item.id === itemAEliminar.id ? { ...item, cantidad: item.cantidad - 1 } : item)
            } : {
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id)
            }
        }

        case TYPES.REMOVE_ALL_ITEMS: { 
            let itemAEliminar = state.carrito.find(item => item.id === action.payload)

            return{
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id)
            }
        }

        case TYPES.CLEAR_CART: { 
            return carritoInitialState;
        }

        default: return state;
    }
}