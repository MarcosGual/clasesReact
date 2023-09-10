import React from 'react';

const Lista = ({ titulo, compras }) => {
    // console.log(props)

    return (
        <div>
            <h3>{titulo}</h3>
            <ul>
                {compras.map((compra, index) => <li key={index}>{compra}</li>)}
            </ul>
        </div>
    );
}

export default Lista;
