import React, { createContext, useContext, useState } from "react";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'leche',
            precio: 500,
            stock: 20
        },
        {
            id: 2,
            nombre: 'harina',
            precio: 400,
            stock: 20
        },
        {
            id: 3,
            nombre: 'yerba',
            precio: 1500,
            stock: 5
        }
    ]);

    return (
        <ProductosContext.Provider value={{ productos, setProductos }}>
            {children}
        </ProductosContext.Provider>
    )
}

export const useProductos = () => {
    return useContext(ProductosContext);
}