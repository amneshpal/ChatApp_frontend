import React from 'react'
import "./Message.css";

const Message = ({ user, message, classs }) => {
  if (user) {
    return (
      <div className=  {`messageBox ${classs}`} >
          {`${user}:${message}`}
        </div>
      )
  }

  else {
    return (
      <div className=  {`messageBox ${classs}`} >
        <div className='msg'>
          {`You:${message}`}
        </div>
      </div>
    )
  }



}

export default Message