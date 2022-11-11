import React from "react";
import { useContext } from "react";
import useImage from "../hooks/useImage";
//import ContextoTemaProvider from "../providers/contextoTemaProvider";

const Card = ({ id, imagen, stats, pais, titulo, lugar, lugaresAbiertos }) => {
  //const { estiloTemas } = useContext(ContextoTemaProvider);

  return (
    <div className="card">
      {lugaresAbiertos === 0 ? (
        <div className="card--insignia">AGOTADO</div>
      ) : lugar === "Online" ? (
        <div className="card--insignia">ONLINE</div>
      ) : (
        console.log(`Nada cargado en ${id}`)
      )}
      <img src={useImage(`./img/${imagen}`)} alt="" className="card--imagen" />
      <div className="card--stats">
        <img
          src={useImage("./img/estrella1.png")}
          alt=""
          className="card--estrella"
        />
        <span>{stats.puntuacion}</span>
        <span className="gris">({stats.reviews}) • </span>
        <span className="gris"> {pais}</span>
      </div>
      <p className="card--titulo">{titulo}</p>
      <p>
        <span className="negrita">Desde $9060</span> / persona
      </p>
    </div>
  );
};

export default Card;
