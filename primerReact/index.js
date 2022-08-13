const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
    return (
        <header>
            <nav>
                <img src='./react-logo.png' width='100px' />
            </nav>
        </header>
    )
}

function Lista() {
    return (
        <ol>
            <li>Fue lanzado en 2013</li>
            <li>Es mantenido por Facebook</li>
            <li>Utilizado por miles de aplicaciones</li>
            <li>También permite el desarrollo mobile (React native)</li>
        </ol>
    )
}

function App() {
    return (
        <div>
            <Header />
            <h1>Bienvenidos!</h1>
            <h2>Curiosidades de React</h2>
            <Lista />
            {/* <ol>
                <li>Fue lanzado en 2013</li>
                <li>Es mantenido por Facebook</li>
                <li>Utilizado por miles de aplicaciones</li>
                <li>También permite el desarrollo mobile (React native)</li>
            </ol> */}
        </div>
    )
};


root.render(
    <App />
);