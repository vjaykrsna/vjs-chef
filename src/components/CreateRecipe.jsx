import { GoogleGenerativeAI } from "@google/generative-ai";

export default function CreateRecipe({ ingredients, setRecipe }) {
    async function getRecipe() {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);

        const allIngreds = ingredients.join(", ");
        const PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Give structured output with basic information included. Format your response in markdown to make it easier to render to a web page. \n\n Ingredients: ${allIngreds}`;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash-preview-05-20",
        });

        const result = await model.generateContent(PROMPT);
        setRecipe([true, result.response.text()]);
    }

    return (
        <div id="create-recipe-container">
            <div>
                <p id="create-recipe-large-text">Ready for a recipe?</p>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe} className="create-recipe-button">
                Get a recipe
            </button>
        </div>
    );
}
