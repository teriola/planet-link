import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const userLoginHandler = (userData) => {
        setUser(userData);
    };

    const contextValue = {
        user,
        userLoginHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};