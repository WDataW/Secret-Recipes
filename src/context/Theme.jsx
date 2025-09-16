import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext);
}

export function useUpdateUserTheme() {
    return (theme) => {
        document.documentElement.setAttribute("theme", theme);
    }
}


export function getBrowserPreference() {
    return (
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? "dark" : "light"
    );
}
export default function Theme({ children }) {

    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext value={[theme, setTheme]}>
            {children}
        </ThemeContext>
    );

}

