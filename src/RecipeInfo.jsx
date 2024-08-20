import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"

function RecipeInfo(){
    const recipeId = useLocation().search.split('=')[1]
    const [recipe, setRecipe] = useState({})
    const newArr = recipe.ingredients
    console.log(newArr)
    const getRecipebyId = async (index) =>{
        const url = `http://localhost:3001/recipes/${index}`
        const res = await fetch(url)
        const data = await res.json()
        console.log('leeeee',data)
        setRecipe(data)
      }
    useEffect(()=>{

        getRecipebyId(recipeId)
    },[]
    )
    return(
        <div>
            <h1>Recipe details</h1>
            <div className="recipe-counter">
                <div>
                    <h2>{recipe.name}</h2>
                    <img width={400} height={500} style={{marginTop:"1rem"}} src={recipe.image_url} alt="recipe image" />
                </div>
                <div>
                    <ul style={{display:"flex", listStyle:"none"}} >
                        <li><h3> preperation time: {recipe.prep_time}min |</h3></li>
                        <li><h3> Cooking time: {recipe.cooking_time}min |</h3></li>
                        <li><h3> Serving: {recipe.servings} |</h3></li>
                        <li><h3> Category : {recipe.category}</h3></li>
                    </ul>
                    <div className="ingredients-co">
                        <h1>Ingredients</h1>
                        <p>{newArr && newArr.map((item)=>(
                           
                             <li style={{listStyle:"none"}}><h4>{item}</h4></li>
                           
                        ))}</p>
                        <h1>Instructions</h1>
                        {recipe.instructions && recipe.instructions.map((intruction)=>(
                            <li>{intruction}</li>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}
export default RecipeInfo