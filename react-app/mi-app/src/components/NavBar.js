import React from "react";

const NavBar = () => {
  const titulo = "Segunda Clase de React";

  const estilosTitulo = {
    color: "green",
    margin: "1rem",
    padding: 5,
    fontSize: "2em",
    fontWeight: "bolder",
  };

  return (
    <nav>
      <h1 style={estilosTitulo}>{titulo}</h1>
    </nav>
  );
};

export default NavBar;
