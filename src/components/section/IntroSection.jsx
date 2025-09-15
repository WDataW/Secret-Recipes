import { useTheme } from "../../context/Theme";
import { paddingX } from "../../pages/MainPage";
function TitleToAnchor({ word, initialClass }) {
    return <a href={`#${word.toLowerCase()}`} className={`scroll-smooth px-[1rem] flex justify-center items-center text-center w-full h-full  `}>
        <span className={`${initialClass} text-[1.1rem]`}>{word.charAt(0)}</span><span>{word.slice(1)}</span>
    </a>
}
export default function IntroSection({ className = "", children, ...props }) {
    const perfectionTitles = [
        "Politeness",
        "Emails",
        "Respect",
        "First Impressions",
        "Ethics",
        "Clarity",
        "Time Management",
        "Integrity",
        "Organization",
        "Networking"
    ];
    return (
        <section id="intro" className={`${paddingX} scroll-mt-[3rem] scroll-smooth py-[2rem] md:py-[3rem] border-b border-[rgba(255,255,255,0.2)] ${className}`} {...props}>
            <h1 className="text-[1.5rem] md:text-[2rem] font-bold mb-[1rem]">Why <span className="text-yellow-600 ">PERFECTION</span> ?</h1>
            <div className="opacity-80 text-[1.1rem]/7.5">
                <p >
                    In the professional world, success often comes down to small but powerful habits. From writing the perfect email to making a strong first impression, every action counts. That's why we've distilled the essentials into 10 secret recipes—one for each letter of PERFECTION.
                </p>
                <ul className="flex mt-[1rem] gap-[0.5rem]  items-center flex-wrap">
                    {perfectionTitles.map((title, i) => <li key={i} className={`group min-w-[8rem] rounded-[0.6rem] hover:text-black hover:bg-white transition duration-200  h-[2rem] border`}><TitleToAnchor initialClass={"text-yellow-600 group-hover:text-black duration-200"} word={title} /></li>)}
                </ul>
                <p className="mt-[2rem]">
                    These recipes aren't just tips; they're practical skills you can apply every day to sharpen your edge, stand out professionally, and build lasting confidence. Mastering them will help you communicate clearly, act ethically, and leave a positive impression wherever you go.
                </p>
            </div>
        </section>
    );
}