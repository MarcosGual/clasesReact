import './App.css';
import Pregunta from './components/Pregunta';
import Lista from './components/Lista';
import ListaSimple from './components/ListaSimple';
import Titulo from './components/Titulo';
import Contador from './components/Contador';
import Buscador from './components/Buscador';
import Blog from './components/Blog';
import Main from './components/Main';
import { ProductosProvider } from './providers/ProductosProvider';
import Contacto from './components/Contacto';

function App() {
  let titulo = 'Bienvenidos a React!';

  const listaTitulos = [
    { id: 1, texto: 'Título uno' },
    { id: 2, texto: 'Título dos' },
    { id: 3, texto: 'Título tres' },
  ]

  const equiposDeFutbol = [
    { id: 1, nombre: 'River' },
    { id: 2, nombre: 'Boca' },
    { id: 3, nombre: 'Newells' },
    { id: 4, nombre: 'Rosario Central' },
    { id: 5, nombre: 'Belgrano' },
    { id: 6, nombre: 'Taiere' },
    { id: 7, nombre: 'Estudiantes' }
  ]

  // let lista = ['hola', 'buenas tardes', 'adiós'];

  //función handler --> manejadora de eventos
  const reaccionHandler = () => alert('Reaccionando a un evento!')

  return (
    <>
      <Titulo textoTitulo={titulo} />
      <ProductosProvider>
        <Main />
      </ProductosProvider>
      <Contacto />
      {/* <Blog /> */}
      {/* <ListaSimple listaDeEquipos={equiposDeFutbol} />
      <button onClick={reaccionHandler}>React!</button> */}
    </>
  );
}

export default App;