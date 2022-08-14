import React, { useState, useContext } from "react";

//creamos los contextos a utilizar:
//contexto usuario - creación
const contextoUsuario = React.createContext();
//contexto para el botón - creación
const userToggleContext = React.createContext();

//custom hook para utilizar el contexto de usuario
export function useUserContext(){
    return useContext(contextoUsuario);
}

//custom hook para utilizar el contexto del botón
export function useUserToggleContext(){
    return useContext(userToggleContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                nombre: 'Marcos',
                email: 'marcos@numen.com.ar'
            })
        }
    }
    //en contextoUsuario.Provider pasamos 
    // los estados globales (contextos) a través del atributo "value"
    return (
        <contextoUsuario.Provider value={user} >
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </contextoUsuario.Provider>
    );
}