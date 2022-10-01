import React from "react";
import useImage from "../hooks/useImage";

const Header = () => {
  return (
    <section className="encabezado">
        <img src={useImage('/img/header.png')} alt="" className="encabezado--img" />
      <h1 className="encabezado--titulo">Experiencias Online</h1>
      <p className="encabezado--texto">
        Unite a actividades exclusivas llevadas a cabo por huéspedes únicos,
        todo sin salir de casa.
      </p>
    </section>
  );
};

export default Header;
