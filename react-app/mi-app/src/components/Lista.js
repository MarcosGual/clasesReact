import React from "react";
import Item from './Item';

function Lista({ contenido, children }) {
    return (
        <ul>
            {children}
            {contenido.map((item) => (
                <Item key={item.id} item={item} />
            )
            )}
        </ul>
    )
};

export default Lista;