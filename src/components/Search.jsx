import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import {db} from '../firebase'
import { AuthContext } from '../context/AuthContext';
import { doc, updateDoc } from "firebase/firestore";

const Search = () => {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false)
  

  const {currentUser} = useContext(AuthContext);

const handleSearch = async () => {
const q = query(collection(db, "users"), 
where("displayName", "==", username));

try{
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setUser(doc.data());
});
}
catch(err){
  setErr(true);
}



}



  const handleKey = (event) => {
    event.code == "Enter"  && handleSearch();
  }
  
  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists, if not create one

    //create user chats
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try{
      const res = await getDoc(doc(db, "chats", combinedId));
      if(!res.exists()){
        //if chat doesnt exist create a chat in chat collection
        await setDoc(doc (db,"chats",combinedId),{messages: []});
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp() 
        });


         await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]:{
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        /*
        userChats:{
            
        } */

      }
    } catch(err){}

   setUser(null);
   setUsername("");
  }


  return (
    <div className='search'>
      <div className='searchForm'>
          <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={event => setUsername(event.target.value)} value={username}/>
      </div>
      {err && <span>user not found!</span>}
      { user && <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
      </div>
     }
    </div>
  )
}

export default Search