import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        Social Chat
      </span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13835826/pexels-photo-13835826.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Naman</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar