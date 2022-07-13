// ReactDOM.render(<h1>Bienvenidos a React</h1>, document.getElementById("raiz"));

// ReactDOM.render(<p>Hola, mi nombre es Marcos</p>, document.getElementById("raiz"));
//ReactDOM.render funciona con dos parámetros:
// 1- la etiqueta a renderizar
// 2- el elemento raíz o contenedor donde quiero renderizarlo
// parecido al método appendChild()

function Bienvenida() {
  return <h1>Bienvenidos a React!</h1>;
}

function BarraNav() {
  return (
    <nav>
      <ul class="nav">
        <li>Inicio</li>
        <li>Recetas</li>
        <li>Sobre Nosotros</li>
      </ul>
    </nav>
  );
}

function Lista() {
  return (
    <ul>
      <li>Pan</li>
      <li>Salchichas</li>
      <li>Mayonesa</li>
      <li>Mostaza</li>
    </ul>
  );
}

ReactDOM.render(
  <div>
    <Bienvenida />
    <BarraNav />
    <Lista />
  </div>,
  document.querySelector("#raiz")
);
