import React from 'react';
import { Link, NavLink, checkActive } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/productos" activeClassName="active">Productos</NavLink></li>
                <li><NavLink to="/nosotros" activeClassName="active">Nosotros</NavLink></li>
                <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
