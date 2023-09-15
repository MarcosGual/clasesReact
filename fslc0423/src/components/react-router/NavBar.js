import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* <li><a href='/'>Inicio</a></li>
                <li><a href='/productos'>Productos</a></li>
                <li><a href='/sobre-nosotros'>Sobre Nosotros</a></li>
                <li><a href='/contacto'>Contacto</a></li> */}
                {/* <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/productos"}>Productos</Link></li>
                <li><Link to={"/sobre-nosotros"}>Sobre Nosotros</Link></li>
                <li><Link to={"/contacto"}>Contacto</Link></li> */}
                <li><NavLink exact to="/" activeClassName="active" end>Inicio</NavLink></li>
                <li><NavLink to="/productos" activeClassName="active">Productos</NavLink></li>
                <li><NavLink to="/sobre-nosotros" activeClassName="active">Sobre Nosotros</NavLink></li>
                <li><NavLink to="/contacto" activeClassName="active">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
