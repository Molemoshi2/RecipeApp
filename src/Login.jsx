import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Navigation from "./navigation";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [users,setUsers] = useState([])
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})
    const redirect = useNavigate()

    // error

    const errorSpan = {
        borderColor: isactive?'red':''
    }
    const errormsg = {
        diplay:isactive?'block':'none',
        color:isactive?'red':'white'
    }
    //useEffect
    useEffect(() => {
        getUsers();
    },[])
    //function to get users
    const getUsers = async ()=>{
        let url = 'http://localhost:3001/Users'
        let res = await fetch(url)
        let data = await res.json()
        setUsers(...users,data)
        
    }
    function handleUserEmail(event){
        setEmail(event.target.value)
        
    }
    

    function handleUserPassword(event){
        setPassword(event.target.value)
    }

    function handleFormSubmit(e){
        //map through the data you get
        console.log(users)
        users.map((user)=>{
            if(email.trim() === '' && password.trim() === ''){
                setActive(true)
                setErrors({email:'email must not be empty',password:'password is required'})
                e.preventDefault()
            }
            else if(!email.includes('@')){
                setActive(true)
                setErrors({email:'invalid email',password:''})
            }
            else if(user.email === email){
                if(user.password === password){
                    alert("log in success")
                    redirect("/Recipes")
                }
               
                
            }
            else if(user.email !== email  && user.password !== password){
                setActive(true)
                setErrors({...errors,email:'email not registered',password:'wrong password'})
                e.preventDefault()
            }
            else{
                e.preventDefault()
            }

            
        })
       
        
    }
    return(
       <div>
           <Navigation/>
         <div>
            <h1>Welocome please Log in to continue</h1>
            <form onSubmit={handleFormSubmit}>
                <input className="login-input" type="email" required placeholder="Enter email" style={errorSpan} onChange={handleUserEmail} /><br />
                <span style={errormsg}>{errors.email}</span><br /><br /><br />
                <input className="login-input" type="password" required placeholder="Enter Password" style={errorSpan} onChange={handleUserPassword}  /><br />
                <span style={errormsg}>{errors.password}</span><br /><br />
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