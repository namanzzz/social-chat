import React from 'react'
import '../style.scss'
import { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export const Login = () => {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();
  

   
  
   const handleSubmit = async (event) =>{
   event.preventDefault();
   const email = event.target[0].value;  
   const password = event.target[1].value;

 try{
  await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
  refreshPage();
} catch(error){
    setErr(true);
  }
   
};

const refreshPage = () => {
  window.location.reload(false);
}


  return (
    <div className="formContainer">
      <div className="formWrapper">

      <span className="logo">SocialChat</span>
      <span className="title">Login</span>

        <form onSubmit={handleSubmit}>

          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign In</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

