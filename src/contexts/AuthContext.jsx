import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const userLoginHandler = (userData) => {
        setUser(userData);
    };
    const userRegisterHandler = (userData) => {
        setUser(userData);
    };

    const contextValue = {
        user,
        userLoginHandler,
        userRegisterHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};