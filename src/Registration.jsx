import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";

function Registration(){
    const [email,setEmail] = useState('') 
    const [password,setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})
    const [userDetails,setUserDetails] = useState({email:email,password:password})
    const redirect = useNavigate()


    //span and div error style
    const errorSpan = {
        borderColor: isactive?'red':''
    }
    const errormsg = {
        diplay:isactive?'block':'none',
        color:isactive?'red':'white'
    }
    //adding users to the json y
    const AddUser = (event)=>{

        event.preventDefault()
        //lets try form validation
        if (!email.includes('@') && email.trim()==''){
            setActive(true)
            setErrors({...errors,email:'Invalid Email'})
            
         }
        else if(password.length<6 && password.trim()=='' ){
            setActive(true)
            setErrors({...errors,password:'Password must be at least 6 characters long'})
        }
        else if(ConfirmPassword!==password){
            setActive(true)
            setErrors({password:"passwords do not match",email:''})
        }
        else{
            setUserDetails({email:email,password:password})
            let url = 'http://localhost:3001/Users'
            fetch(url,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userDetails)
            }).then(()=>{
                console.log('user added');
                redirect('/Recipes')
            })
        }
        
    }
     return(
        <div>
            <Navigation/>
            <h1>Register to create custom recipes</h1>
            <form onSubmit={AddUser}>
                <label>Email: </label><br /><br />
                <input className="login-input" type="email" placeholder="Enter your email" style={errorSpan} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <span style={errormsg}>Invalid Email</span><br /><br />
                <label> Password</label><br /><br />
                <input className="login-input" type="password" placeholder="Enter your Password" style={errorSpan} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <span style={errormsg}>Password should contain more than 6 characters</span>
                <br /><br />
                <label> Confirm Password</label><br /><br />
                <input className="login-input" type="password"  placeholder="Confirm Password" style={errorSpan} onChange={(e)=>{setConfirmPassword(e.target.value)}}/><br />
                <span style={errormsg}>password should match</span><br /><br />
                <button type="submit" onClick={AddUser} className="login-btn">Submit</button>
            </form>
        </div>
    )
}
export default Registration