import React from 'react'
import '../style.scss'
// import Add from '../img/addAvatar.png'

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">

      <span className="logo">Social Chat</span>
      <span className="title">Login</span>

        <form>

          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign In</button>

        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
  )
}

