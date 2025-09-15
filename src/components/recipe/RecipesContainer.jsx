import { paddingX } from "../../pages/MainPage";
import Recipe from "./Recipe";
import { getRecipes } from "./recipes";
export default function RecipesContainer({ className = "", children, ...props }) {
    const recipes = getRecipes();
    return (
        <ul className={` grid grid-cols-1 grid-auto-rows sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-[mimmax(10rem,1fr)] gap-[2rem]  ${className}`} {...props}>
            {recipes.map((r, i) => <li key={i}><Recipe index={i + 1} recipe={r} /></li>)}
        </ul>
    );
}