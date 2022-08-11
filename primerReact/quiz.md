### Primer Preguntero

1. Por qué necesitamos importar react ('import React from "react"') en nuestros archivos?

2. Si estuviera en console.log(pagina) en index.js, ¿qué se mostraría?

3. ¿Qué está mal en este código?

const page= (
    <h1>Hola</h1>
    <p>Este es mi sitio!</p>
)

4. ¿Qué significa que algo sea "declarativo" en lugar de "imperativo"?

5. ¿Qué significa que algo sea "componible"?

### Segundo preguntero

1. ¿Qué es un componente React?
Una función que devuelve elementos de React.

2. ¿Qué está mal en el siguiente código?

function miComponente(){
    return(
        <small>Soy un texto pequeño!</small>
    )
}

3. ¿Qué es lo que está mal en este código?

function Header(){
    return(
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )

    ReactDOM.render(Header(), document.getElementById('root'));
}