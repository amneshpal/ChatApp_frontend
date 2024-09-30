import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join'
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png"
import Message from '../Message/Message';
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from '../../images/closeIcon.png'


let socket;
const ENDPOINT = "https://chatapp-h31m.onrender.com/";

const Chat = () => {




const [id,setid] = useState("")


const [message, setMessages] = useState([])

const send =()=>{
    
 const message   =document.getElementById('chatInput').value;
    socket.emit('message',{message,id});
    document.getElementById('chatInput').value="";
}


// const socket = socketIo(ENDPOINT,{transports:['websocket']});
useEffect(() => {
     socket = socketIo(ENDPOINT,{transports:['websocket']});
    socket.on('connect',()=>{
        alert("Amnesh");
        setid(socket.id);
    })





 // emit mtlb data bhejna 
    console.log(socket);
socket.emit('joined',{ user })

    socket.on('welcome',(data)=>{
      setMessages([...message,data]);
        console.log(data.user, data.message);

})

socket.on('userJoined',(data)=> {
  setMessages([...message,data]);
 console.log(data.user, data.message);
})

socket.on('leave',(data)=> {
  setMessages([...message,data]);
 console.log(data.user, data.message);
})
return () => {
// socket.emit('disconnect');
socket.emit('dis');
socket.off();
  }
}, [])

useEffect(() => {
    socket.on('sendMessage',(data)=>{
      setMessages([...message,data]);
  console.log(data.user, data.message, data.id);
    })
  
    return () => {
      // cleanup
      socket.off();
    }
  }, [message])




    return ( 

            <div className='ChatPage'>
                <div className='chatContainer'> 
                    <div className='header'>
                    <h2> C CHAT</h2>
                  <a href="/"> <img src={closeIcon} alt="close" />
                  </a> 
                    </div>
                    <ReactScrollToBottom className='chatBox'> 
                        {/* <Message message='heyy whasapp'/>
                        <Message message='heyy whasapp'/>
                        <Message message='heyy whasapp'/>
                        <Message message='heyy whasapp'/>
                         */}

{message.map((item,i)=><Message  user={item.id===id?'':item.user}            message= {item.message} classs = {item.id===id?'right':'left'}/> )}
                        {/* </div> */}
                        </ReactScrollToBottom>

                          <div className='inputBox'> 
                              <input onKeyPress={(event)=>event.key==='Enter'? send():null} type="text " id='chatInput' />
                               <button onClick= {send} className='sendbtn'><img src={sendLogo} alt="Send" /></button>
                           </div>
                 </div>
            </div>
    )
}

export default Chat