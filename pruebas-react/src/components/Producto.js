import React from "react";

const Producto = ({ data, addToCart }) => {
  const { id, nombre, precio, src } = data;

  return (
    <div className="col-sm-6 col-md-3 mb-3 d-flex">
      <h4>{nombre}</h4>
      <img style={{maxWidth: 80}} src={src} />
      <h5>$ {precio}</h5>
      <button onClick={() => addToCart(id)} className="btn btn-success btn-sm">
        Agregar
      </button>
    </div>
  );
};

export default Producto;
