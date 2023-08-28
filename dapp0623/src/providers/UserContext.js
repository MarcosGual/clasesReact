import React, { createContext, useContext, useState } from 'react';

//primero creamos el contexto
const UserContext = createContext();

//después vamos a llamar al hook para acceder al contexto
// y lo exportamos para que esté disponible para el resto de los componentes
export const useUserContext = () => useContext(UserContext);

//después creamos el proveedor del contexto (también lo exportamos)

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('Invitado');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}