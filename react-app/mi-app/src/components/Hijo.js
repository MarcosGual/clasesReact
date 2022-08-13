// import { contextoUsuario } from "../App";
import React, { useContext } from "react";
import { useUserContext, useUserToggleContext } from "../providers/UserProvider";

const Hijo = () => {
    // const user = useContext(contextoUsuario);
    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

    return (
        <div>
            <h2>Componente Hijo</h2>
            <div>
                <button onClick={cambiaLogin}>Cambiar Login</button>
            </div>
            {user && <p>Hola {user.nombre}</p>}
        </div>
    )
}

export default Hijo;