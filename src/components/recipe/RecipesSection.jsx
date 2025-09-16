import { paddingX } from "../../pages/MainPage";
import RecipesContainer from "./RecipesContainer";

export default function RecipesSection({ className = "", children, ...props }) {
    return (
        <section className={`${paddingX} py-[2rem]  ${className}`} {...props}>
            <h1 className="text-[1.5rem] md:text-[2rem] font-bold mb-[1.5rem]"><span className="text-blue-600 ">PERFECTION</span> Recipes</h1>
            <RecipesContainer></RecipesContainer>
        </section>
    );
}