import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

const Navbar = () => {
    const { isDarkTheme, handleTheme } = useContext(ThemeContext);

    return (
        <nav style={{ backgroundColor: isDarkTheme ? '#020202' : null, color: isDarkTheme ? '#ffffff' : null }}>
            <ul>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
            </ul>
            <button onClick={() => handleTheme()}>Cambiar Tema</button>
        </nav>
    ); <ul>
        <li></li></ul>
}

export default Navbar;
