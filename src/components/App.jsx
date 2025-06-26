import { useState, useRef, useEffect } from "react"
import AddIngredForm from "./AddIngredForm"
import IngredientList from "./IngredientList"
import CreateRecipe from "./CreateRecipe"
import RecipeSection from "./RecipeSection"

export default function App() {
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = useState([false, ""]);
    const [isLoadingRecipe, setIsLoadingRecipe] = useState(false);
    const [recipeError, setRecipeError] = useState(null);

    const scrollRef = useRef(null);
    useEffect(() => {
        if (recipe[1] !== "") {
            const offset = -140; // negative = leave 50px space from top
            const elementPosition = scrollRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }

    }, [recipe[1]]);

    function addIngred(newIngredient) {
        setIngredients((prev) => [...prev, newIngredient]);
    }

    return (
        <main>
            <AddIngredForm handleSubmit={addIngred} ingredients={ingredients} />

            {ingredients.length ? (
                <IngredientList ingredients={ingredients} />
            ) : (
                <p className="info-message">
                    Add at least 3 ingredients to start working on a recipe!
                </p>
            )}

            {ingredients.length > 2 && (
                <CreateRecipe
                    ref={scrollRef}
                    ingredients={ingredients}
                    setRecipe={setRecipe}
                    setIsLoadingRecipe={setIsLoadingRecipe}
                    setRecipeError={setRecipeError}
                />
            )}

            {isLoadingRecipe && (
                <div className="loading-container">
                    <div className="loading"></div>
                    <p className="loading-message">Generating recipe...</p>
                </div>
            )}

            {recipeError && <p className="error-message">Error: {recipeError}</p>}
            {recipe[0] && <RecipeSection recipe={recipe[1]} />}
        </main>
    );
}
