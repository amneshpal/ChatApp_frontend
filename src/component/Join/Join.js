import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';


let user;


  const sendUser = () =>{
  user=  document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = ' ';  
}



const Join = () => {


  const [Name,setname] = useState("")

// console.log(Name);

  return (
    <div className='= JoinPage'>
  <div className='JoinContainer'>
    <img src={logo} alt="" />
    <h1>C CHAT</h1>
    <input onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name' type="text" id = "joinInput" />
   <Link onClick={(event)=>!Name ?event.preventDefault():null} to= "/chat" > <button onClick={sendUser} className='join-btn'>Login In</button>
   </Link>
  </div>
    </div>
  )
}

export default Join
export {user}