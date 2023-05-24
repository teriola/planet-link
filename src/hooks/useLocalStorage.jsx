import { useState } from "react";

export default function useLocalStorage(key, initialData) {
    const [state, setState] = useState(() => {
        const data = localStorage.getItem(key);
        if (data) return JSON.parse(data);
        return initialData;
    });

    const setLocalStorage = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setLocalStorage];
};
