import React from "react";
import useImage from "../hooks/useImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ContextoTemaProvider from "../providers/ContextoTemaProvider";
import { contextoTema } from "../providers/ContextoTemaProvider";
import { useContext } from "react";

const NavBar = () => {
  const { manejadorDeTemas, esTemaClaro } = useContext(contextoTema);

  return (
    <nav
      className="nav"
      style={esTemaClaro ? { color: "#fff" } : { backgroundColor: "#212121" }}
    >
      <img
        src={useImage("./img/logo.png")}
        alt="logo"
        className="nav--logo"
      ></img>
      <div className="tema">
        <input
          onClick={manejadorDeTemas}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="label">
          <FontAwesomeIcon icon={solid("moon")} />
          <FontAwesomeIcon icon={solid("sun")} />
          <div className="ball"></div>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
