import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Settings() {
    const { themeToggleHandler } = useContext(ThemeContext);
    return (
        <button onClick={themeToggleHandler}>Theme</button>
    );
};