import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Preferencias from "./components/Preferencias";
import Login from "./components/Login";
import { useToken } from "./hooks/useToken";
import { useEffect } from "react";

function App() {
  const {token, setToken} = useToken();
  
  useEffect(()=>{
    console.log('token guardado', token)
  }, [token])
  // console.log('token app', token)

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Aplicación</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/preferencias" element={<Preferencias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
