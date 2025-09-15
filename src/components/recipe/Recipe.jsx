import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/Theme";
import { motion, useInView } from "motion/react";
export const bgColors = {
    light: "bg-[rgb(230,231,232)]",
    dark: "bg-[rgb(20,21,22)]"
}
function InnerSection({ section, index }) {
    return <div>
        <div>
            <span>{index} </span><span className="font-bold ">{section.title}</span>
        </div>
        <p className="text-pretty opacity-70">{section.description}</p>
    </div>
}
export default function Recipe({ index, recipe, className = "", children, ...props }) {
    const [theme] = useTheme();
    function handleWChange() {
        setW(window.innerWidth);
    }
    const [w, setW] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleWChange)
        return () => window.addEventListener("resize", handleWChange)
    }, []);
    const selfRef = useRef(null);
    const isInView = useInView(selfRef, { amount: 0.95 });
    console.log(isInView + " " + recipe.title);

    return (
        <motion.div ref={selfRef} initial={{ opacity: 0, y: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0, }} viewport={{ once: true }} id={recipe.title.toLowerCase()} className={`${bgColors[theme]} ${w < 768 && isInView ? "hoverRecipe" : ""} hover:shadow-lg scroll-mt-[5rem] shadow-yellow-600/50 transition duration-600 p-[2rem] min-w-[10rem] flex-1  h-full rounded-[1rem] ${className}`} {...props}>
            <div className="flex font-bold text-[1.3rem] gap-[0.5rem] items-center">
                <span>{index}.</span><div className="uppercase"><span className="text-yellow-600">{recipe.title.charAt(0)}</span>{recipe.title.slice(1)}</div>
            </div>
            <p className="text-pretty opacity-70 mb-[0.5rem]">{recipe.description}</p>
            <ol className="ps-[1rem] flex-col flex gap-[0.7rem]">
                {recipe.sections.map((s, i) => <li key={i}><InnerSection index={`${index}.${i + 1}`} section={s} /></li>)}
            </ol>
        </motion.div>
    );
}