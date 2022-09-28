import React from "react";

const Titulo = ({ titulo, estilos }) => {
  return (
    <div style={estilos}>
      <h1>{titulo}</h1>
    </div>
  );
};

export default Titulo;
