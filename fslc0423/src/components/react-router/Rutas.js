import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Inicio from './Inicio';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Error404 from './Error404';
import Footer from './Footer';

const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/sobre-nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Rutas;
