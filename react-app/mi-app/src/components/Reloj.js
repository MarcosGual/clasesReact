import React from "react";
import { useState, useEffect } from "react";

const Reloj=({hora})=>{
    return <h3>{hora}</h3>
}

const RelojEffect = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <div>
      <h2>Reloj con Hooks</h2>
      {visible ? <Reloj hora={hora} /> : null}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </div>
  );
};

export default RelojEffect;