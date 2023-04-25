const elementoRaiz = document.getElementById("raiz");
const raiz = ReactDOM.createRoot(elementoRaiz);

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <img src="./react-logo.png" width="100px" />
            </li>
            <li>
              <h1>Mi primer React</h1>
            </li>
          </ul>
        </nav>
        <h3>Curso de React</h3>
      </header>
      <main>
        <h3>Curiosidades</h3>
        <ol>
          <li>Fue lanzado en 2013</li>
          <li>Mantenimiento a cargo de Facebook</li>
          <li>Es utilizado por miles de aplicaciones, incluyendo mobile</li>
        </ol>
        <h3>Razones para utilizarlo</h3>
        <ol>
          <li>Es componible</li>
          <li>Es declarativo</li>
          <li>Está mantenido por un equipo competente</li>
        </ol>
      </main>
      <footer>©2021 Numen. Todos los derechos reservados.</footer>
    </div>
  );
}

raiz.render(<App />);
