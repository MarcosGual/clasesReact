import React from "react";

const Item = ({ item }) => {
  return <li key={item.id}>Nombre: {item.nombre} | Precio: {item.precio}</li>;
};

export default Item;