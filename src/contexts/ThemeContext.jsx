import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { useAuthContext } from "./AuthContext";

export const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useTheme('dark');
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
