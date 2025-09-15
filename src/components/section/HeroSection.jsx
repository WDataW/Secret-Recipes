import { useEffect, useState } from "react";
import { useTheme } from "../../context/Theme";
import { paddingX } from "../../pages/MainPage";
import VerticalPerfection from "../VerticalPerfection";

export default function HeroSection({ className = "", children, ...props }) {
    const [theme] = useTheme();

    function handleWChange() {
        setW(window.innerWidth);
    }
    const [w, setW] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleWChange)
        return () => window.addEventListener("resize", handleWChange)
    }, []);
    return (
        <section className={`${className} text-white border-b border-[rgba(255,255,255,0.2)] relative flex  md:flex-col    items-end   md:py-0 h-[50vh]  md:h-screen`} {...props}>
            <img className={`h-full brightness-45 min-w-full object-cover`} src={`./${theme}Hero.jpg`} alt="" />
            <div className={` text-center   flex flex-col items-center md:block  md:text-start absolute  top-[15rem] w-full left-1/2 -translate-x-1/2 -translate-y-1/2 ${paddingX}`}>
                <h1 className="text-center  md:text-start text-[2.5rem] md:text-[5rem] w-full font-bold">PERFECTION</h1>
                <p className={`text-[1.1rem] md:text-[1.5rem]  opacity-80 `}>10 secret recipes to level up your professional skills</p>
                <a href="#intro" className={`transition-[scale] hover:scale-110 border mt-[2.5rem] ${theme == "dark" ? "bg-white text-black" : "bg-black text-white"} flex items-center justify-center rounded-[1rem]  border h-[2.6rem] w-[8rem]`}>Get Started</a>
            </div>
            {w >= 768 && <VerticalPerfection className={`absolute md:left-[calc(100%-10rem)] lg:left-[calc(100%-15rem)] border-x border-[rgba(255,255,255,0.2)] h-full w-[3rem]  ${theme == "dark" ? "dark-glass" : "light-glass"}`}>
            </VerticalPerfection>}
        </section>
    );
}