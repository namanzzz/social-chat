import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/14339157/pexels-photo-14339157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Just Now</span>
      </div>
      <div className='messageContent'>
        <p>Hello, How are You</p>
        <img src="https://images.pexels.com/photos/14339157/pexels-photo-14339157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message