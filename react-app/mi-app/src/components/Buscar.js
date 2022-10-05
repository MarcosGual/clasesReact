import React from "react";
import { useState } from "react";

const Buscar = () => {
    const [terminoDeBusqueda, setTerminoDeBusqueda]=useState('');

    const manejarCambio=(event)=>{
        //console.log(event.target.value);
        setTerminoDeBusqueda(event.target.value);
    }

  return (
    <div>
      <label htmlFor="buscar">Buscar: </label>
      <input id="buscar" type="text" onChange={manejarCambio} />
      <p>
        Buscando <strong>{terminoDeBusqueda}</strong>...
      </p>
    </div>
  );
};

export default Buscar;
