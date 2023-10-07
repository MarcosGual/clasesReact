import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

const Contenedor = () => {
    // const lugaresTuristicos = [
    //     {
    //         id: 1,
    //         nombre: 'Villa La Angostura',
    //         descripcion: 'Un hermoso lugar para pasar las vacaciones',
    //     },
    //     {
    //         id: 2,
    //         nombre: 'Merlo, San Luis',
    //         descripcion: 'Descanse en las sierras puntanas'
    //     },
    //     {
    //         id: 3,
    //         nombre: 'San Rafael, Mendoza',
    //         descripcion: 'Haga rafting en los rápidos del Atuel'
    //     }
    // ];

    const [lugaresTuristicos, setLugaresTuristicos] = useState([
        {
            id: 1,
            nombre: 'Villa La Angostura',
            descripcion: 'Un hermoso lugar para pasar las vacaciones',
        },
        {
            id: 2,
            nombre: 'Merlo, San Luis',
            descripcion: 'Descanse en las sierras puntanas'
        },
        {
            id: 3,
            nombre: 'San Rafael, Mendoza',
            descripcion: 'Haga rafting en los rápidos del Atuel'
        }
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {lugaresTuristicos.map(lugar => <Tarjeta key={lugar.id} lugar={lugar} />)}
        </div>
    );
}

export default Contenedor;
