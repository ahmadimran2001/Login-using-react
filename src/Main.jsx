import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

function Main() {
    const [currentForm,setCurrentForm] = useState('Login');
    const changeForm = (formName) =>{
        setCurrentForm(formName);
    }

    
   return(
    <div className="App">
    {
        currentForm ==="Login"? <Login onFormSwitch={changeForm}/>:<Register onFormSwitch={changeForm}/>
        
    }
    </div>
   )
};
  export default Main;