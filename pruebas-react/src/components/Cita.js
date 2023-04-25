import React from "react";

const Cita = ({quote}) => {

  return (
    <p>
      {/* Texto de la cita <br /> */}
      {quote.text}
      <span>{quote.autor}</span>
    </p>
  );
};

export default Cita;
