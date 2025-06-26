import Markdown from "react-markdown";
import "./RecipeSection.css";

export default function RecipeSection(props) {
    return (
        <div className="recipe-section-container">
            <Markdown>
                {props.recipe}
            </Markdown>
        </div>
    );
}
