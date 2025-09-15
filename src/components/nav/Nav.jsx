import { useTheme } from "../../context/Theme";
import { paddingX } from "../../pages/MainPage";

export default function Nav({ className = "", children, ...props }) {
    const [theme] = useTheme();
    return (<>
        <nav dir="ltr" className={`${paddingX} flex justify-between gap-[1rem] items-center ${theme == "dark" ? "dark-glass" : "light-glass"} flex items-center  h-[4rem] w-full fixed z-100 top-0  ${className}`} {...props}>
            <ul className="flex justify-between w-full items-center">
                <a href="https://uqu.edu.sa/" className="h-[2.2rem] w-[2.2rem] bg-[url(/src/assets/images/uqu.png)] bg-cover bg-center bg-no-repeat"></a>
                <a href="https://github.com/WDataW/Secret-Recipes" className="h-[2rem] w-[2rem] bg-[url(/src/assets/images/github.png)] bg-size-[2.9rem] bg-center bg-no-repeat opacity-90 "></a>
            </ul>
        </nav >
    </>
    );
}