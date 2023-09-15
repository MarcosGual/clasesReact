import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}