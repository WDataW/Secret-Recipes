import Recipes from "../../../public/recipes.json";
export function getRecipes() {
    const { recipes } = Recipes;
    return recipes;
}