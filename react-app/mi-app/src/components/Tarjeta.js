import React from "react";
import Boton from "./Boton";

const Tarjeta = () => {
  const objetoEstilos = {
    display: "flex",
    flexDirection: "column",
    width: "150px",
  };

  return (
    <div style={objetoEstilos}>
      <figure
        style={{
          border: "solid 2px black",
          width: "200px",
          height: "275px",
          textAlign: "center",
        }}
      >
        <figcaption>
          <h1>Villa Langostura</h1>
          <p>Un hermoso lugar para pasar las vacaciones</p>
        </figcaption>
        {/* Aqui va el boton */}
      </figure>
      <Boton />
    </div>
  );
};
export default Tarjeta;
