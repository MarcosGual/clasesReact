import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

const Titulo = (props) => {

    const {isDarkTheme} = useContext(ThemeContext);

    return (
        <h1 style={{ backgroundColor: isDarkTheme ? '#020202' : null, color: isDarkTheme ? '#ffffff' : null }}>
            {props.textoTitulo}
        </h1>
    );
}

export default Titulo;
