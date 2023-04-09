import { useEffect, useState } from "react";

export function useTheme(defaultTheme) {
    const [theme, setTheme] = useState(defaultTheme);
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const themeToggleHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return [theme, themeToggleHandler];
};
