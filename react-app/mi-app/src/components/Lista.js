import React from "react";

function Lista(props) {
    return (
        <ul>
            {props.contenido.map(x =>
                <li key={x.id}>{x.nombre}</li>
            )}
        </ul>
    )
};

export default Lista;