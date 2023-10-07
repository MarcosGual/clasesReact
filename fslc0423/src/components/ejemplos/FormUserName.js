import React, { useState } from 'react';
import { useUserContext } from '../providers/UserContext';
import { useThemeContext } from '../providers/ThemeContext';

const FormUserName = () => {
    const [newUserName, setNewUserName] = useState('');
    const { userName, setUserName } = useUserContext();
    const { isDarkTheme } = useThemeContext();

    const handleChangeUser = (event) => {
        setNewUserName(event.target.value)
    }

    return (
        <div style={isDarkTheme ? { backgroundColor: '#444444', color: '#ffffff' } : null}>
            <h4>Cambiar nombre de usuario: </h4>
            <input value={newUserName} onChange={handleChangeUser} />
            <button onClick={() => setUserName(newUserName)}>Cambiar nombre de usurio</button>
        </div>
    );
}

export default FormUserName;
