import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Navigation from "./navigation";

function Login(){
    const [email,setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [users,setUsers] = useState([])
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})

    // error

    const errorSpan = {
        borderColor: isactive?'red':''
    }
    const errormsg = {
        diplay:isactive?'block':'none',
        color:isactive?'red':'white'
    }
    //function to get users
    const getUsers = async ()=>{
        let url = 'http://localhost:3001/Users'
        let res = await fetch(url)
        let data = await res.json()
        setUsers(data)
    }
    // use effect dont forget to fetch the users from json server
    useEffect(
        ()=>{
            getUsers
        },[]
    )
    function handleUserEmail(event){
        setEmail(event.target.value)
        
    }
    

    function handleUserPassword(event){
        setPassword(event.target.value)
    }

    function handleFormSubmit(e){

        e.preventDefault()
        if (!email.includes('@')){
            setErrors({...errors,email:'email must include @'})
            setActive(true)
        }
        else if(email!==users.email && password!==users.password){
            alert('failed')
        }
    }
    return(
       <div>
           <Navigation/>
         <div>
            <h1>Welocome please Log in to continue</h1>
            <form onSubmit={handleFormSubmit}>
                <input className="login-input" type="email" required placeholder="Enter email" style={errorSpan} onChange={handleUserEmail} /><br /><br />
                <span style={errormsg}>Invalid Email</span><br /><br />
                <input className="login-input" type="password" required placeholder="Enter Password" onChange={handleUserPassword}  /><br /><br />
                <span style={errormsg}>Wrong Password</span><br />
                <Link to={'/Recipes'} className="login-link" onClick={handleFormSubmit}><button type="submit" className="login-btn" >login</button></Link>
                    <div className="signUp"><br />
                        <p>no accout yet?</p>
                        <Link to={'/Registration'}>Sign up</Link>
                    </div>
            </form>
        </div>
 
       </div>
    )
}
export default Login