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

    const [theme, setTheme] = useState("dark");// deactivated light theme since it isn't ready



    function initTheme() {
        //     const theme = getBrowserPreference();
        //     document.documentElement.setAttribute("theme", theme);
        //     setTheme(theme);

    }
    // useEffect(() => {
    //     window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",
    //         initTheme
    //     );
    //     return () => {
    //         window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change",
    //             initTheme
    //         );
    //     };

    // }, []
    // );
    return (
        <ThemeContext value={[theme, setTheme]}>
            {children}
        </ThemeContext>
    );

}

