import { createContext, useContext } from "react";
import { useState } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => {
    return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const showLoading = () => {
        setLoading(true);
    };

    const hideLoading = () => {
        setLoading(false);
    };

    const contextValue = {
        showLoading,
        hideLoading,
        loading,
    }

    return (
        <LoadingContext.Provider value={contextValue}>
            {children}
        </LoadingContext.Provider>
    );
};