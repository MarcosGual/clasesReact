// ReactDOM.render(<h1>Bienvenidos a React</h1>, document.getElementById("raiz"));

// ReactDOM.render(<p>Hola, mi nombre es Marcos</p>, document.getElementById("raiz"));
//ReactDOM.render funciona con dos parámetros:
// 1- la etiqueta a renderizar
// 2- el elemento raíz o contenedor donde quiero renderizarlo
// parecido al método appendChild()

// function Bienvenida() {
//   return;
// }

// function BarraNav() {
//   return (
//     <div className="encabezado">
//       <h1>Bienvenidos a React!</h1>
//       <nav>
//         <ul className="nav">
//           <li>Inicio</li>
//           <li>Recetas</li>
//           <li>Sobre Nosotros</li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// function Titulo() {
//   return <h2 className="subtitulo">Lista de Compras</h2>;
// }

// function Lista() {
//   return (
//     <ul>
//       <li>Pan</li>
//       <li>Salchichas</li>
//       <li>Mayonesa</li>
//       <li>Mostaza</li>
//     </ul>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Bienvenida />
//     <BarraNav />
//     <Titulo />
//     <Lista />
//   </div>,
//   document.querySelector("#raiz")
// );

//Con Vainilla Javascript
// const $contenedor = document.querySelector("#raiz");
// const $h1 = document.createElement("h1");
// $h1.textContent = "Forma imperativa de programar";
// $h1.classList.add("header");
// $contenedor.appendChild($h1);

// console.log($h1);
// document.getElementById('raiz').append($h1);

// const $elemento=<h1 className="header">Esto es JSX</h1>;
// ReactDOM.render($elemento, document.getElementById('raiz'));
// console.log($elemento);

//JSX
// const $pagina=(
//   <div>
//     <h1 className="header">Esto es JSX</h1>
//     <p>Esto es un párrafo</p>
//   </div>
// );
// console.log($pagina);
// ReactDOM.render($pagina, document.getElementById('raiz'));

// const $navBar = (
//   <div className="encabezado">
//     <h1>Numen Restaurante</h1>
//     <nav>
//       <ul className="nav">
//         <li>Inicio</li>
//         <li>Menú</li>
//         <li>Contacto</li>
//       </ul>
//     </nav>
//   </div>
// );

// ReactDOM.render($navBar, document.getElementById("raiz"));

const root = document.getElementById('raiz');
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

function MiPagina() {
  return (
    <div>
			<header>
				<nav>
		      <img src='./react-logo.png' width='150px' />
				</nav>
			</header>
      <h1>Mi sitio con React</h1>
      <h3>Curiosidades</h3>
      <ol>
        <li>Fue lanzado en 2013</li>
        <li>Mantenimiento por Facebook</li>
        <li>Es utilizado por miles de aplicaciones, incluyendo mobile</li>
      </ol>
      <h3>Razones para utilizarlo!</h3>
      <ol>
        <li>Es componible</li>
        <li>Es declarativo</li>
        <li>Es una habilidad contratable</li>
        <li>Está mantenido por un equipo competente</li>
      </ol>
			<footer>
				<small>© 2021 Numen. Todos los derechos reservados</small>
			</footer>
    </div>
  )
}

// root.append(JSON.stringify(miPagina));
// ReactDOM.render(miPagina(), root);

ReactDOM.render(<MiPagina />, root);