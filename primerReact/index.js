// ReactDOM.render(<h1>Bienvenidos a React</h1>, document.getElementById("raiz"));

// ReactDOM.render(<p>Hola, mi nombre es Marcos</p>, document.getElementById("raiz"));
//ReactDOM.render funciona con dos parámetros:
// 1- la etiqueta a renderizar
// 2- el elemento raíz o contenedor donde quiero renderizarlo
// parecido al método appendChild()

// function Bienvenida() {
//   return <h1>Bienvenidos a React!</h1>;
// }

// function BarraNav() {
//   return (
//     <nav>
//       <ul className="nav">
//         <li>Inicio</li>
//         <li>Recetas</li>
//         <li>Sobre Nosotros</li>
//       </ul>
//     </nav>
//   );
// }

// function Titulo(){
//   return (
//     <h2 className="subtitulo">Lista de Compras</h2>
//   );
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

//Con Javascript

const $contenedor = document.querySelector("#raiz");
const $h1 = document.createElement("h1");
$h1.textContent = "Forma imperativa de programar";
$h1.classList.add("header");
$contenedor.appendChild($h1);

// document.getElementById('raiz').append($h1);