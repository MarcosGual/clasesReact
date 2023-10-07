import './App.css';
import Crud from './components/crud/Crud';

function App() {
  return (
    <>
      <Crud />
    </>
  );
}

export default App;

//contenido anterior
//bandera booleana (flag)
// const [verTamanioVentana, setVerTamanioVentana] = useState(false);

// const handleVerVentana = (verVentana) => {
//   setVerTamanioVentana(verVentana);
// }
// let tituloLista = 'Lista de compras';
// const listaDeCompras = ['leche', 'yogur', 'queso', 'carne', 'verduras']
{/* <button onClick={() => handleVerVentana(true)}>Ver</button>
      <button onClick={() => handleVerVentana(false)}>No ver</button>
      {verTamanioVentana ? <Blog /> : <p>Aquí se vería el componente del tamaño de la ventana...</p>}
      <RelojEffect />
      <Lista titulo={tituloLista} compras={listaDeCompras} /> */}