import { useEffect } from "react"
import { Link } from "react-router-dom"
import App from "./App"
function Recipedisplay(props){
    // useEfect to invoke the function
    useEffect(()=>{
        props.getRecipes();
    },[]
    )
    return(
        <div>
            <h1>Recipes</h1>
            <div className="card-container">
            {props.recipes.map((recipe)=>(
                <div key={recipe.id} className="card">
                    <img width={200} src={recipe.image_url} alt="recipe image" />
                    <div>
                        <h4>{recipe.name}</h4>
                        <p>{recipe.ingredients.toString()}</p>
                        <Link to={`/RecipeInfo?recipeId=${recipe.id}`}>Read more</Link>
                    </div>
                </div>
            ))}
                

            </div>
        </div>
    );
}
export default Recipedisplay