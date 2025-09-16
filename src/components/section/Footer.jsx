import { paddingX } from "../../pages/MainPage";

export default function Footer({ className = "", children, ...props }) {
    return (
        <footer className={`${paddingX} text-center gap-[1rem] flex items-center justify-between w-full  h-[5rem] sm:h-[4rem] ${className}`} {...props}>
            <div>2025 PERFECTION</div>
            <div className="uppercase">Umm Al-Qura University</div>
        </footer>
    );
}