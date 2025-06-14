import { useState } from "react";
import AddIngredForm from "./AddIngredForm";
import IngredientList from "./IngredientList";
import CreateRecipe from "./CreateRecipe";
import RecipeSection from "./RecipeSection";

export default function App() {
    const [ingredients, setIngredients] = useState([
        "garlic",
        "banana",
        "brinjal",
    ]);

    const [recipe, setRecipe] = useState([false, ""]);
    const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);
    const [recipeError, setRecipeError] = useState(null);

    function handleSubmit(newIngredient) {
        setIngredients((prev) => [...prev, newIngredient]);
    }

    return (
        <main>
            <AddIngredForm handleSubmit={handleSubmit} ingredients={ingredients} />

            {ingredients.length ? (
                <IngredientList ingredients={ingredients} />
            ) : null}

            {ingredients.length > 2 && (
                <CreateRecipe
                    ingredients={ingredients}
                    setRecipe={setRecipe}
                    setIsLoadingRecipe={setIsLoadingRecipe}
                    setRecipeError={setRecipeError}
                />
            )}

            {isLoadingRecipe && <p>Generating recipe...</p>}
            {recipeError && <p style={{ color: 'red' }}>Error: {recipeError}</p>}
            {recipe[0] && <RecipeSection recipe={recipe[1]}/>}
        </main>
    );
}
