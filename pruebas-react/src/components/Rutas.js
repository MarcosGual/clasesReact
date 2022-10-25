import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Error from "./Error";
import Productos from "./Productos";
import Contacto from "./Contacto";
import Nosotros from "./Nosotros";
import NavBar from "./NavBar";

const Rutas = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default Rutas;