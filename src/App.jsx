import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Recipedisplay from './RecipeDisplay.jsx'
import RecipeInfo from './RecipeInfo.jsx'
import { useState } from 'react'
import AddRecipe from './AddRecipe.jsx'
import Registration from './Registration.jsx'
import Login from './Login.jsx'

function App() {
  ///defining my global function to pass in props
  const [recipes,setRecipes] = useState([])
  const redirect = useNavigate()
    // a function to get the recipes
    const getRecipes = async () => {
        const url = "http://localhost:3001/recipes"
        const res = await fetch(url)
        const data = await res.json()
        setRecipes(data)
    }

    //lets see if cant get the id and stuff
    const getRecipebyId = async (index) =>{
      const url = `http://localhost:3001/recipes/${index}`
      const res = await fetch(url,{
        method: 'DELETE',
      }
      ).then(()=>{
        alert('delete successful')
  
    
    })
    }
    // lets try to handle post requests
  // creating routers
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>,
      errorElement:<div>404 not found</div>
    },
    {
      path: '/Recipes',
      element: <Recipedisplay setRecipes={setRecipes} getRecipes={getRecipes} recipes={recipes} getRecipebyId={getRecipebyId}/>,
      errorElement:<div>404 not found</div>
    },
    {
      path: 'RecipeInfo',
      element: <RecipeInfo />
    },
    {
      path: 'AddRecipe',
      element: <AddRecipe/>
    },
    {
      path:'Registration',
      element: <Registration/>
    }
  ])
  
 return(
  <RouterProvider router={router} />
 )
}
export default App
