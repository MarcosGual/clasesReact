import React from "react";

const Item=(props)=>{
    return (
        <li>
            <span>{props.item.nombre}: </span>
            <span>{props.item.precio}</span>
        </li>
    )
}

export default Item;