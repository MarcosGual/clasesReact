import React from "react";

function Titulo({estilosPersonalizados, contenido}){
    return(
        <div>
            <h1 style={estilosPersonalizados}>{contenido}</h1>
        </div>
    )
}

export default Titulo;