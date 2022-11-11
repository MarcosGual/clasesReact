import React from "react";
import { dataTarjetas } from "../data/dataTarjetas";
import Card from "./Card";

const Presentacion = () => {

  const tarjetas = dataTarjetas.map((tarjeta) => {
    return <Card key={tarjeta.id} {...tarjeta} />;
  });

  return (
    <div className="presentacion">
      {tarjetas}
    </div>
  );
};

export default Presentacion;