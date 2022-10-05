import React from "react";

const Item = ({ infoClase, eliminar }) => {
  return (
    <li key={infoClase.id} >
      {infoClase.titulo} | {infoClase.temas} | {infoClase.curso} <button onClick={()=>eliminar(infoClase.id)}>Eliminar</button>
    </li>
  );
};

export default Item;
