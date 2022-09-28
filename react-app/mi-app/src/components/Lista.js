import React from "react";
import Item from "./Item";

const Lista = ({lista}) => {

  return (
    <div>
      <h3>Lista de Electrodomésticos</h3>
      <ul>
        {lista.map(electrodomestico=>(<Item item={electrodomestico} />))}
      </ul>
    </div>
  );
};

export default Lista;
