import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser, removeUser] = useLocalStorage('auth', {});
    const userLoginHandler = (userData) => {
        setUser(userData);
    };
    const userRegisterHandler = (userData) => {
        setUser(userData);
    };
    const userLogoutHandler = () => {
        removeUser();
    };
    // const changeTheme = (theme) => {
    //     setUser(state => ({ ...state, theme: theme }));
    // }

    const contextValue = {
        user,
        userLoginHandler,
        userRegisterHandler,
        userLogoutHandler,
        // changeTheme,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
