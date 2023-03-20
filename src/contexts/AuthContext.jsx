import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const userData = localStorage.getItem('auth');
    const [user, setUser] = useState(JSON.parse(userData || null));
    const userLoginHandler = (userData) => {
        setUser(userData);
        localStorage.setItem('auth', JSON.stringify(userData));
    };
    const userRegisterHandler = (userData) => {
        setUser(userData);
        localStorage.setItem('auth', JSON.stringify(userData));
    };
    const userLogoutHandler = () => {
      setUser(null); 
      localStorage.removeItem('auth');
    };

    const contextValue = {
        user,
        userLoginHandler,
        userRegisterHandler,
        userLogoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
