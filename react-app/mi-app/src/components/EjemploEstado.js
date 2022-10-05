import React from "react";
import { useState } from "react";

const EjemploEstado = () => {
  const [estado, actualizarEstado] = useState("Valor inicial del estado");

  function cambiarEstado() {
    actualizarEstado("Estado actualizado");
  }
  return (
    <div>
      <h3>Ejemplo de actualización de Estado</h3>
      <h4>{estado}</h4>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
};

export default EjemploEstado;
