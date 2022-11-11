import React from "react";

const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad, src } = data;

  return (
    <div className="col-md-12 d-flex flex-row justify-content-around mb-3">
      <h5>{nombre}</h5>
      <h5>
        $ {precio} x {cantidad} u
      </h5>
      <h5>$ {precio * cantidad}</h5>
      <button onClick={()=>deleteFromCart(id, false)} className="btn btn-danger btn-sm">Eliminar uno</button>
      <button onClick={()=>deleteFromCart(id, true)} className="btn btn-danger btn-sm">Eliminar todos</button>
    </div>
  );
};

export default ItemCarrito;
