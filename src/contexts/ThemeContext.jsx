import { createContext, useContext, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { patchUser } from "../services/userService";
import { useAuthContext } from "./AuthContext";


export const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const { user, changeTheme } = useAuthContext();
    const [theme, setTheme] = useTheme(user.theme || 'light');

    useEffect(() => {
        if (user.theme !== undefined) {
          setTheme(user.theme);
        }
    }, [user]);

    const toggleTheme = async (userId) => {
        const newTheme = theme == 'light' ? 'dark' : 'light';
        await patchUser(userId, { theme: newTheme });
        changeTheme(newTheme);
        setTheme(newTheme);
    }

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
