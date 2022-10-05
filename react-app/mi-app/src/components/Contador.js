import React from "react";
import { useState, useEffect } from "react";
import "./Contador.css";

const Contador = () => {
  const [contador, setContador] = useState(0);

  //efecto secundario del cambio del estado
  useEffect(() => {
    document.title = `El valor del contador es ${contador}`;
  });

  //const sumar = () => setContador(contador + 1);
  const sumar = () => setContador((prevState) => prevState + 1);
  const sumar5 = () => setContador((prevState) => prevState + 5);
  //const restar = () => setContador(contador - 1);
  const restar = () => setContador((prevState) => prevState - 1);
  const restar5 = () => setContador((prevState) => prevState - 5);
  const resetear = () => setContador(0);

  return (
    <div className="contador">
      <button onClick={restar5}>- 5</button>
      <button onClick={restar}>- 1</button>
      {contador}
      <button onClick={sumar}>+ 1</button>
      <button onClick={sumar5}>+ 5</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};

export default Contador;
