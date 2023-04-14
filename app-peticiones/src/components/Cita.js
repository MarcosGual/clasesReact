import React from "react";

const Cita = ({ quote }) => {
  return (
    <p style={{ textAlign: "center" }}>
      {/* texto de la cita */}
      {/* autor */}
      <span>{quote.quote}</span>
      <br />
      <span>- {quote.author} -</span>
      <br />
      <span>{quote.series}</span>
    </p>
  );
};

export default Cita;
