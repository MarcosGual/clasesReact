import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { loginUser } from "../utils/loginUser";

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await loginUser({username: username, password: password});

    if (data.token) {
      console.log("usuario logueado", data.token);
      setToken(data.token)
    } else {
      console.log("error al loguearse");
    }
  };

  return (
    <div className="login-wrapper">
      <h1 className="mb-5">Inicio de Sesión</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name.example"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
          <button className="btn btn-success" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
