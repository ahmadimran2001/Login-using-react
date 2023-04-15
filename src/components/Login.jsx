import React, { useState } from "react";
import "./main.css"
import Home from "./Home";


 const Login = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const[loggedin, setloggedin]=useState(false);
    const [mail,setCurrentMail] = useState(email);
    const changeMail = (userMail) =>{
        setCurrentMail(userMail);
    }
 

    const submit = (eventSub) =>{
        eventSub.preventDefault(); //will not reload the page upon submission
        

    }
const newPage = () => {
    if(email === "" && pass ==="" ){
        setloggedin(false);
    }
    else{setloggedin(true);
       changeMail(email);
    }
}
    
    
   

    
return(

    <> { 
  loggedin ? <Home nextMail={mail}/>:<div className="form-container">
        <h2>Login</h2>
        <form className="l-r-form" onSubmit={submit}>

        <label htmlFor="email" >Email</label>
        <input className="input-box" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="email" name="email"></input>

        <label htmlFor="password">Password</label>
        <input className="input-box" required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

        <button type="submit"  onClick={newPage}>Login</button>

        <button className="link-btn" onClick={ () => props.onFormSwitch('Register')} >Don't have an Account? Register</button>
        

        </form>
        </div> 
    }
         </>
        
    )
}

export default Login;