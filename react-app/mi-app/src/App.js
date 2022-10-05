import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Tarjeta from "./components/Tarjeta";
import clasesReact from "./db";
import Lista from "./components/Lista";
import Buscar from "./components/Buscar";
import EjemploEstado from "./components/EjemploEstado";
import Contador from "./components/Contador";
import RelojEffect from "./components/Reloj";

function App() {
  return (
    <>
      <Lista />
      <RelojEffect />
    </>
  );
}

export default App;
