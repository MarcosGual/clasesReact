import React, { useState } from 'react';
import './App.css';
import Hijo from './components/Hijo'
import ListaHamburguesas from './components/ListaHamburguesas';
import ListaUsuarios from './components/ListaUsuarios';
import { UserProvider } from './providers/UserProvider';

function App() {

  return (
    <>
      <UserProvider>
        <Hijo />
      </UserProvider>
      <ListaHamburguesas />
      <ListaUsuarios />
    </>
  );
}

export default App;
