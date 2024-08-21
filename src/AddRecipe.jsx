import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AddRecipe(){
    const [newIngredients,setNewIngredients] = useState([]);//array for ingredients
    const [newIngredient,setNewIngredient] = useState('')
    const [newInstruction,setNewInstruction] = useState('')
    const [newInstructions,setNewInstructions] = useState([]);//array for instructions
    const redirect = useNavigate()
    const [newRecipe,setNewRecipe] = useState({
        name:"",
        ingredients:newIngredients,
        instructions:newInstructions,
        servings:"",
        cookingTime:"",
        prep_time: "",
        category:"",
        image_url:""
    });
    
    



    const handlegetIngredient = (e)=>{
        setNewIngredient(e.target.value);
        console.log(newIngredient);
    };
    //handle add ingredient to the array
    let handleAddIngredient = ()=>{
        setNewIngredients((newIngredients)=>[...newIngredients,newIngredient])
        console.log(newIngredients)
    }
    //handle add instruction
    let handleAddInstruction = ()=>{
        setNewInstructions((newInstructions)=>[...newInstructions,newInstruction])
        console.log(newInstructions)
    }
    //get access to the values of the input and store inside an array
    const handleAddrecipe = ()=>{
            setNewRecipe({...newRecipe,ingredients:newIngredients,instructions:newInstructions})
            console.log(newRecipe)
            fetch("http://localhost:3001/recipes",{
                method: "POST",
                Headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newRecipe)
            }).then(()=>{
                console.log("Recipe added");
                redirect('/')
            })
            
    }
   
    return(
        <div>
            <h1>Add Recipe</h1>
            <hr />
            <br />
            <br />
            <div>
                <div>
                    <h2 style={{marginBottom:"3rem"}}>Recipe Name: </h2>
                    <input type="text"  placeholder="Recipe Name" style={{width:"50%",marginBottom:"2rem"}} onChange={(e)=>setNewRecipe({...newRecipe,name:e.target.value})}/>
                    <br /><br />
                    <div className="category-Container">
                        <div>
                            <p>Preparation Time: </p><br /><br />
                            <input type="number" min={5} step={5} defaultValue={5} onChange={(e)=>setNewRecipe({...newRecipe,prep_time:e.target.value})}/>
                        </div>
                        <div>
                            <p>Cooking Time: </p><br /><br />
                            <input type="number" min={5} step={5} defaultValue={5} onChange={(e)=>setNewRecipe({...newRecipe,cookingTime:e.target.value})}/>
                        </div>
                        <div>
                            <p>Servings: </p><br /><br />
                            <input type="number" min={2} step={2} max={10} defaultValue={2} onChange={(e)=>setNewRecipe({...newRecipe,servings:e.target.value})}/>
                        </div>
                        <div>
                            <p htmlFor="">Category: </p><br /><br />
                            <select style={{width:"8rem",height:"2rem",border:"solid black 2px"}} name="category" onChange={(e)=>setNewRecipe({...newRecipe,category:e.target.value})}>
                                <option value="">breakfast</option>
                                <option value="">lunch</option>
                                <option value="">dinner</option>
                            </select>
                        </div>
                    </div>
                    <div className="category-Container">
                        <div>
                            <h1>Ingredients</h1>
                            <input type="text" placeholder="Ingredient 1" style={{width:"18rem"}} onChange={handlegetIngredient} />
                            <button style={{width:"4rem",height:"2rem"}} onClick={handleAddIngredient}>add</button>
                            {newIngredients && newIngredients.map((ingredient)=>(
                                <h4>{ingredient}</h4>
                            ))}
                        </div>
                        <div>
                            <h1>Instructions</h1>
                            <input type="text" placeholder="Instruction 1" style={{width:"18rem"}} onChange={(e)=>setNewInstruction(e.target.value)} />
                            <button style={{width:"4rem",height:"2rem"}} onClick={handleAddInstruction}>add</button>
                            {newInstructions && newInstructions.map((instruction,index)=>(
                                <h4 key={index}>{instruction}</h4>
                            ))}
                        </div>
                    </div><br /><br />
                    <label>Upload Recipe image: </label><br /><br />
                    <input type="file" /><br /><br />
                    <button className="official-Add-BTN" onClick={handleAddrecipe}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default AddRecipe