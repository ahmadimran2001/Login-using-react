import React, { useState } from "react";
import './main.css';
import Home from "./Home";

const Register = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [n,setCurrentName] = useState(name);
    const changeName = (userName) =>{
        setCurrentName(userName);
    }
   const [registered, setregistered]=useState(false);

    const submit = (e) =>{
        e.preventDefault(); //will not reload the page upon submission
        console.log(email);
    }

    const newPage = () => {
    if(name === "" && email === "" && pass ==="" ){
        setregistered(false);
    }
    else{setregistered(true);
    changeName(name);}
}
return(
<>{
    
    registered ? <Home nextName={n}/>:<div className="form-container">
        <h2>Resister</h2>
            <form className="l-r-form" onSubmit={submit}>

                <label htmlFor="name">Name</label>
                <input className="input-box" required value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="full name"></input>

                <label for="email">Email</label>
                <input className="input-box" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" id="email" name="email"></input>

                <label for="password">Password</label>
                <input className="input-box" required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

                <button type="submit" onClick={newPage} >Register</button>

                <button className="link-btn" onClick={ () => props.onFormSwitch('Login')} >Already have ann Account? Login</button>
            </form>
        
        </div>}</>
    
        
    )
}

export default Register;