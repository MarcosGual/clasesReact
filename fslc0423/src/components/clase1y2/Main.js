import React, { useContext } from 'react';
import Lista from '../clase3y4/Lista';
import { ThemeContext } from '../../providers/ThemeProvider';
import Navbar from '../clase3y4/Navbar';
import RelojEffect from '../clase3y4/Reloj';
import Titulo from './Titulo';

const Main = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    let titulo = 'Bienvenidos a React!';

    const listaTitulos = [
        { id: 1, texto: 'Título uno' },
        { id: 2, texto: 'Título dos' },
        { id: 3, texto: 'Título tres' },
      ]
    
      const equiposDeFutbol = [
        { id: 1, nombre: 'River' },
        { id: 2, nombre: 'Boca' },
        { id: 3, nombre: 'Newells' },
        { id: 4, nombre: 'Rosario Central' },
        { id: 5, nombre: 'Belgrano' },
        { id: 6, nombre: 'Taiere' },
        { id: 7, nombre: 'Estudiantes' }
      ]

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#080808' : null, color: isDarkTheme ? '#ffffff' : null }}>
            <Navbar />
            <Titulo textoTitulo={titulo} />
            <h3>Lista de productos</h3>
            <Lista />
            <RelojEffect />
        </div>
    );
}

export default Main;
