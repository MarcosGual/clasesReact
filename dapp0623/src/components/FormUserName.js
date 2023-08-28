import React, { useState } from 'react';
import { useUserContext } from '../providers/UserContext';

const FormUserName = () => {
    const [newUserName, setNewUserName] = useState('');
    const { userName, setUserName } = useUserContext();

    const handleChangeUser = (event) => {
        setNewUserName(event.target.value)
    }

    return (
        <div>
            <h4>Cambiar nombre de usuario: </h4>
            <input value={newUserName} onChange={handleChangeUser} />
            <button onClick={() => setUserName(newUserName)}>Cambiar nombre de usurio</button>
        </div>
    );
}

export default FormUserName;
