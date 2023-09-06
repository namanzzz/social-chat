import React, { useState } from 'react'
import '../style.scss'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from 'firebase/firestore'
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();
  

   
  
   const handleSubmit = async (event) =>{
   event.preventDefault();
   const displayName = event.target[0].value;
   const email = event.target[1].value;  
   const password = event.target[2].value;
   const file  = event.target[3].files[0];

   try{
     const res = await createUserWithEmailAndPassword(auth, email, password);
      // must be atleast 6 characters password
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });

} catch(err){
    setErr(true);
  }
   
  }



  return (
    <div className="formContainer">
      <div className="formWrapper">

      <span className="logo">SocialChat</span>
      <span className="title">Register</span>

        <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Display name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password(atleast 6 characters)"/>
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>
              Add an avatar
            </span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

