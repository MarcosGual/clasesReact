import React, { useState } from "react";

//creamos el contexto
// para que todos los componentes puedan acceder al mismo estado
export const contextoTema = React.createContext();

const ContextoTemaProvider = ({ children }) => {
  const [esTemaClaro, setTemaClaro] = useState(false);

  const estiloTemas = {
    backgroundColor: esTemaClaro ? "#000" : "#fff",
    color: esTemaClaro ? "#fff" : "#000",
  };

  function manejadorDeTemas() {
    setTemaClaro(!esTemaClaro);
  }

  const valorDelTema = {
    estiloTemas: estiloTemas,
    manejadorDeTemas: manejadorDeTemas,
    esTemaClaro: esTemaClaro,
  };

  return (
    <div>
      <contextoTema.Provider value={valorDelTema}>
        {children}
      </contextoTema.Provider>
    </div>
  );
};

export default ContextoTemaProvider;
