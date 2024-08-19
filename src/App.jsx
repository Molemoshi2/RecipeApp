import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Recipedisplay from './RecipeDisplay.jsx'
import RecipeInfo from './RecipeInfo.jsx'
import { useState } from 'react'

function App() {
  ///defining my global function to pass in props
  const [recipes,setRecipes] = useState([])
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
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    }
  // creating routers
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Recipedisplay getRecipes={getRecipes} recipes={recipes} />,
      errorElement:<div>404 not found</div>
    },
    {
      path: '/Recipes',
      element: <Recipedisplay  getRecipes={getRecipes} recipes={recipes} />,
    },
    {
      path: 'RecipeInfo',
      element: <RecipeInfo />
    }
  ])
  
 return(
  <RouterProvider router={router} />
 )
}
export default App
