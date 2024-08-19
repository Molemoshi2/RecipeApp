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
                    <img width={400} src={recipe.image_url} alt="recipe image" />
                    <h2>{recipe.name}</h2>
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
                           <ol>
                             <li ><h4>{item}</h4></li>
                           </ol>
                        ))}</p>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default RecipeInfo