import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Carrito from './carrito/Carrito';
import Crud from './crud/Crud';

const AppRouter = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">React</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Carrito</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuarios">Usuarios</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route exact path="/" element={<Carrito />} />
                <Route path="/usuarios" element={<Crud />} />
                {/* <Route path="/contacto" component={Contacto} /> */}
            </Routes>
        </Router>
    )
}

export default AppRouter;