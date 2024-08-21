import { useEffect } from "react"
import { Link } from "react-router-dom"


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
                    <img width={200} height={250} src={recipe.image_url} alt="recipe image" />
                    <div><br />
                        <h4>{recipe.name}</h4><br />
                        <p>{recipe.ingredients.toString()}</p><br />
                        <Link to={`/RecipeInfo?recipeId=${recipe.id}`}>Read more</Link><br /><br />
                        <button onClick={()=>props.getRecipebyId(recipe.id)}>delete</button>
                    </div>
                </div>
            ))}
            < div style={{border:"solid grey 2px",height:"4rem",boxShadow:"2px 2px 2px black"}}>
                <h4>Add recipe</h4>
                <Link to={'/AddRecipe'}><button style={{fontSize:"2rem"}} >+</button></Link>
            </div>
            </div>
            
            
        </div>
    );
}
export default Recipedisplay