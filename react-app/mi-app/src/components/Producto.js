import React from "react";

const Producto = (props) => {
  const { data, addToCart } = props;

  return (
    <div>
      <h4>{data.nombre}</h4>
      <h5>$ {data.precio}</h5>
      <button onClick={()=>addToCart(data.id)}>Agregar</button>
    </div>
  );
};

export default Producto;
