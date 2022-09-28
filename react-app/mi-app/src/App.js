import React from "react";
import "./App.css";
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import NavBar from "./components/NavBar";
import Tarjeta from "./components/Tarjeta";
import Titulo from "./components/Titulo";
import listaElectrodomesticos from "./db";

function App() {

  //en el return va a ir el código jsx siempre
  return (
    <>
      <Titulo titulo='Clase 3 de React' 
      estilos={{backgroundColor: 'blue', color: 'white'}} />
      <Lista lista={listaElectrodomesticos} />
      <Contador />
    </>
  );
}

export default App;