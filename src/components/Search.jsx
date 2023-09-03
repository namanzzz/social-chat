import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
          <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
          <img src="https://images.pexels.com/photos/13835826/pexels-photo-13835826.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <div className='userChatInfo'>
            <span>John</span>
          </div>
      </div>
    </div>
  )
}

export default Search