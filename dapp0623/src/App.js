import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Lista from './components/Lista';
import Busqueda from './components/Busqueda';
import Blog from './components/Blog';
import RelojEffect from './components/Reloj';
import { UserProvider } from './providers/UserContext';
import Contenedor from './components/Contenedor';
import FormUserName from './components/FormUserName';

function App() {



  return (
    <UserProvider>
      <h1>Hooks en React</h1>
      <FormUserName />
      <Contenedor />
    </UserProvider>
  );
}

export default App;

//contenido anterior
//bandera booleana (flag)
// const [verTamanioVentana, setVerTamanioVentana] = useState(false);

// const handleVerVentana = (verVentana) => {
//   setVerTamanioVentana(verVentana);
// }
// let tituloLista = 'Lista de compras';
// const listaDeCompras = ['leche', 'yogur', 'queso', 'carne', 'verduras']
{/* <button onClick={() => handleVerVentana(true)}>Ver</button>
      <button onClick={() => handleVerVentana(false)}>No ver</button>
      {verTamanioVentana ? <Blog /> : <p>Aquí se vería el componente del tamaño de la ventana...</p>}
      <RelojEffect />
      <Lista titulo={tituloLista} compras={listaDeCompras} /> */}