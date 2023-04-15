import React from 'react'
import { ReactDOM } from 'react';
import Login from './Login';
import Register from './Register';
import './Home.css';


const Home = (props) => {
  let newMail = props.nextMail; 
  let newName = props.nextName;
  
  return (
    <div><h2>{newMail}</h2>
    <h2>{newName}</h2>
    </div>
    
  )
}

export default Home;