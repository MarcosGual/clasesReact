import React, { useState } from 'react';
import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import ItemLista from './components/ItemLista';
import Busqueda from './components/Busqueda';

function App() {

  //Estado: variable contador (useState)
  // const [contador, setCount] = useState(0);
  //Efecto secundario: modificar el título del documento
  // useEffect(() => {    // Actualiza el título del documento usando la API del navegador    
  //   document.title = `Has clickeado ${contador} veces`;
  // });

  const [items, setItems] = useState([
    { id: 1, actividad: "Desayunar" },
    { id: 2, actividad: "Trabajo" },
    { id: 3, actividad: "Almuerzo" },
    { id: 4, actividad: "Gym" },
    { id: 5, actividad: "Trabajo" },
    { id: 6, actividad: "Cena" },
    { id: 7, actividad: "Jugar" }
  ]);

  function borrarItem(identificador) {
    const listaFiltrada = items.filter(item => item.id !== identificador);
    setItems(listaFiltrada);
  }

  return (
    <>
      <Busqueda />
      <h2>Lista de actividades</h2>
      <ul>
        {items.map((item) => (
          <ItemLista key={item.id} id={item.id} contenido={item.actividad}
            deleteItem={borrarItem} />
        ))}
      </ul>

      <ListaUsuarios items={items} />
    </>
  );
}

export default App;
