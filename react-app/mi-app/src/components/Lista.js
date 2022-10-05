import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

const Lista = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      titulo: "React Clase 1",
      temas: "Intro a React",
      curso: "La Matanza",
    },
    {
      id: 2,
      titulo: "React Clase 2",
      temas: "Componentes y Props",
      curso: "La Matanza",
    },
    {
      id: 3,
      titulo: "React Clase 3",
      temas: "Hooks y Estado",
      curso: "La Matanza",
    }]
  );

  const [efecto, setEfecto] = useState(0);

  function eliminarItem(id) {
    const listaFiltrada = items.filter((item) => item.id !== id);
    setItems(listaFiltrada);
  }

  useEffect(() => {
    console.log("Se dispara el useEffect");
    setEfecto((prevState) => prevState + 1);
  }, [items]);

  console.log("Se renderiza el componente");
  console.log("Este es el efecto número: ", efecto);

  return (
    <ul>
      {items.map((clase) => (
        <Item infoClase={clase} eliminar={eliminarItem} />
      ))}
    </ul>
  );
};

export default Lista;
