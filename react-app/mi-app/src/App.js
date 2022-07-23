import React from 'react';
import './App.css';
import Titulo from './components/Titulo';
import logo from './images/logo512.png'; //con import

function App() {
  const estilos = {
    h1: {
      color: "red",
      fontSize: "3em"
    },
    h1Alternativo:{
      color: "brown",
      fontSize: "2em"
    }
  }

  return (
    <div className="App">
      <Titulo estilosPersonalizados={estilos.h1} contenido="Bienvenidos a la clase de React" />
      <Titulo estilosPersonalizados={estilos.h1Alternativo} contenido="Clase sábados 0322" />
      {/* logo react con require */}
      <img src={require('./images/logo512.png')} alt='react img' />
      
      {/* logo react con import (arriba) */}
      {/* <img src={logo} alt='react img' /> */}
    </div>
  );
}

export default App;
