import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useTheme('light');
    const toggleTheme = () => setTheme(!theme);
    const contextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};