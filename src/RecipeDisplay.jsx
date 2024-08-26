import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navigation from "./navigation";


function Recipedisplay(props){
    //
    
    // useEfect to invoke the function
    useEffect(()=>{
        props.getRecipes();
    },[]
    )

    // handle the search function
    const handleSearch =(e)=>{
        const searchedItem = e.target.value
        console.log(searchedItem)
        const searchResult =  props.recipes.filter((item)=> item.name.toLowerCase().includes(searchedItem.toLowerCase()));
        props.setRecipes(searchResult)
        
    }
    return(
        <div>
            <Navigation/>
            <h1>Recipes</h1>
            <input className="login-input" type="text" placeholder="search" onChange={handleSearch} />
            <div className="card-container">
            {props.recipes.map((recipe)=>(
                <div key={recipe.id} className="card">
                    <img width={200} height={250} src={recipe.image_url} alt="recipe image" />
                    <div><br />
                        <h4>{recipe.name}</h4><br />
                        <p>{recipe.ingredients.toString()}</p><br />
                        <Link to={`/RecipeInfo?recipeId=${recipe.id}`}>Read more</Link><br /><br />
                        <button className="login-btn" onClick={()=>props.getRecipebyId(recipe.id)}>delete</button>
                    </div>
                </div>
            ))}
            < div style={{border:"solid rgb(73, 13, 53) 2px",height:"4rem",boxShadow:"2px 2px 2px black",padding:'1rem'}}>
                <h4 style={{color:'rgb(11, 49, 11, 1)'}}>Add recipe</h4>
                <Link to={'/AddRecipe'}><button style={{fontSize:"2rem",backgroundColor:'rgb(73, 13, 53)',color:'white',cursor:'pointer'}} >+</button></Link>
            </div>
            </div>
            
            
        </div>
    );
}
export default Recipedisplay