import { useState } from "react";

export default function AddIngredForm({ handleSubmit, ingredients }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    function handleFormSubmit(event) {
        event.preventDefault();
        setError(null); // Clear previous errors

        if (input.trim() === "") {
            setError("Please enter an ingredient.");
            return;
        }

        if (ingredients.includes(input.trim().toLowerCase())) {
            setError("This ingredient is already in the list.");
            return;
        }

        handleSubmit(input.trim()); // Pass the input value directly
        setInput(""); // Clear input after successful submission
    }

    return (
        <form className="add-ingred-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="eg. tomatoes"
                name="ingred"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ borderColor: error ? 'red' : '' }}
            />
            <button>+ Add Ingredients</button>
            {error && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{error}</p>}
        </form>
    );
}
