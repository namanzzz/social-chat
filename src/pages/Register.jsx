import React from 'react'
import '../style.scss'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Register = () => {


  const handleSubmit = (event) =>{
   event.preventDefault();
   const displayName = event.target[0].value;
   const email = event.target[1].value;  
   const password = event.target[2].value;
   const file  = event.target[3].files[0];

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }



  return (
    <div className="formContainer">
      <div className="formWrapper">

      <span className="logo">Social Chat</span>
      <span className="title">Register</span>

        <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Display name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>
              Add an avatar
            </span>
          </label>
          <button>Sign Up</button>

        </form>
        <p>You do not have account? Login</p>
      </div>
    </div>
  )
}

