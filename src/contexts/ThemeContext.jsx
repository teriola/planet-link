import { createContext, useContext, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { patchUser } from "../services/userService";
import { useAuthContext } from "./AuthContext";


export const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [theme, themeToggleHandler] = useTheme('light');


    const contextValue = {
        theme,
        themeToggleHandler,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
