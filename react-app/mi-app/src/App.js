import React from 'react';
import './App.css';
import Titulo from './components/Titulo';
import logo from './images/logo512.png'; //con import
import Lista from './components/Lista';
import Busqueda from './components/Busqueda';
import Contador from './components/Contador';

function App() {
  const estilos = {
    h1: {
      color: "red",
      fontSize: "3em"
    },
    h1Alternativo: {
      color: "brown",
      fontSize: "2em"
    }
  }

  let listaElectrodomesticos = [
    { id: 1, nombre: "Heladera", precio: 90000 },
    { id: 2, nombre: "Televisor", precio: 70000 },
    { id: 3, nombre: "Microondas", precio: 60000 },
    { id: 4, nombre: "Computadora", precio: 100000 }
  ]

  return (
    <div className="App">
      <Titulo estilosPersonalizados={estilos.h1} contenido="Bienvenidos a la clase de React" />
      <Titulo estilosPersonalizados={estilos.h1Alternativo} contenido="Clase sábados 0322" />
      <Busqueda />
      <Contador />
      {/* <Lista contenido={listaElectrodomesticos}>
        <Titulo estilosPersonalizados={estilos.h1Alternativo} contenido="Lista" />
      </Lista> */}
    </div>
  );
}

export default App;
