import React from "react";
import { useState, useReducer } from "react";
import { TYPES } from "./actions";
import { initialState, reducer } from "./reducer";

const Contador = () => {
  //const [contador, setContador] = useState(0);
  const [estado, dispatch] = useReducer(reducer, initialState);

  const sumarUno = () => dispatch({ type: TYPES.incrementar });
  const restarUno = () => dispatch({ type: TYPES.decrementar });
  const sumarDos = () => dispatch({ type: TYPES.incrementarDos, payload: 10 });
  const restarDos = () => dispatch({ type: TYPES.decrementarDos, payload: 10 });
  //const cambiarVisibilidad = () => dispatch({ type: "CAMBIARVISIBLE" });

  return (
    <div style={{ textAlign: "center", fontSize: "25px" }}>
      <h1>Contador</h1>
      <h3>{estado.contador}</h3>
      <nav>
        <button onClick={restarDos}>-10</button>
        <button onClick={restarUno}>-1</button>
        <button onClick={sumarUno}>+1</button>
        <button onClick={sumarDos}>+10</button>
      </nav>
    </div>
  );
};

export default Contador;
