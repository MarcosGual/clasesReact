import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Presentacion from "./components/Presentacion";
import Footer from "./components/Footer";
import ContextoTemaProvider from "./providers/ContextoTemaProvider";

function App() {
  return (
    <>
      <ContextoTemaProvider>
        <NavBar />
        <Header />
        <Presentacion />
        <Footer />
      </ContextoTemaProvider>
    </>
  );
}

export default App;