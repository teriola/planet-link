import { createContext, useContext } from "react";

export const HomeContext = createContext();

export const useHomeContext = () => {
    return useContext(HomeContext);
};