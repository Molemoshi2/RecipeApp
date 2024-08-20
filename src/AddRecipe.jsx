function AddRecipe(){
    return(
        <div>
            <h1>Add Recipe</h1>
            <hr />
            <br />
            <br />
            <div>
                <form action="">
                    <h2 style={{marginBottom:"3rem"}}>Recipe Name: </h2>
                    <input type="text"  placeholder="Recipe Name" style={{width:"50%",marginBottom:"2rem"}}/>
                    <br /><br />
                    <div className="category-Container">
                        <div>
                            <label htmlFor="">Preparation Time: </label><br /><br />
                            <input type="number" min={5} step={5} defaultValue={5}/>
                        </div>
                        <div>
                            <label htmlFor="">Cooking Time: </label><br /><br />
                            <input type="number" min={5} step={5} defaultValue={5}/>
                        </div>
                        <div>
                            <label htmlFor="">Servings: </label><br /><br />
                            <input type="number" min={2} step={2} max={10} defaultValue={2}/>
                        </div>
                        <div>
                            <label htmlFor="">Category: </label><br /><br />
                            <select style={{width:"8rem",height:"2rem",border:"solid black 2px"}} name="" id="">
                                <option value="">breakfast</option>
                                <option value="">lunch</option>
                                <option value="">dinner</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1>Ingredients</h1>
                        <input type="text" placeholder="Ingredient 1" style={{width:"18rem"}} />
                        <button style={{width:"4rem",height:"2rem"}}>add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddRecipe