import "./App.css";
import Carrito from "./components/Carrito";
import ContextoTemaProvider from "./providers/contextoTemaProvider";

function App() {
  return (
    <>
      <ContextoTemaProvider>
        <Carrito />
      </ContextoTemaProvider>
    </>
  );
}

export default App;
