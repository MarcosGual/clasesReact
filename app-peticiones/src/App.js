import { useState, useEffect } from "react";
import "./App.css";
import Cita from "./components/Cita";
import axios from "axios";

function App() {
  const [cita, setCita] = useState({});
  const [estaCargando, setEstaCargando] = useState(false);

  const actualizarCita = async () => {
    try {
      setEstaCargando(true);
      const url = "https://breakingbadapi.com/api/quote/random";
      //const res = await fetch(url);
      //const [nuevaCita] = await res.json();
      const res = await axios.get(url, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      });
      const [nuevaCita] = await res.data;

      if (nuevaCita) {
        setCita(nuevaCita);
      } else {
        alert("Ninguna cita obtenida...");
      }
    } catch (error) {
      alert(`Error en la carga de la cita - ${error.message}`);
    } finally {
      setEstaCargando(false);
    }
  };

  useEffect(() => {
    actualizarCita();
  }, []);

  return (
    <div>
      <span className="d-block p-2 bg-dark text-white">
        <h1>Peticiones en React</h1>
      </span>
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}
      >
        <img
          className="mb-3"
          src="https://i.pinimg.com/originals/d3/bb/d0/d3bbd00fc97e601c6dabca395af2e7f6.png"
          alt="img-breaking-bad"
        />
        <button onClick={() => actualizarCita()} className="btn btn-warning">
          Obtener una cita
        </button>
        {estaCargando ? <h5>Cargando...</h5> : <Cita quote={cita} />}
      </div>
    </div>
  );
}

export default App;
