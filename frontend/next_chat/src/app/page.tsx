"use client";


import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Pusher from "pusher-js";



function Home() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  let allMessages = [];


  useEffect(() =>{
    Pusher.logToConsole = true;

    const pusher = new Pusher('8b8e385246ce09827918', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function(data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });
  
  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://127.0.0.1:8000/api/messages',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          username,
          message
      })
    })
    setMessage('');

  };

  return (
  <>
    
    <main className="container">
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
    <div className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <input className="fs-5 fw-semibold" value={username} onChange={e=>setUsername(e.target.value)}/>
    </div>
    <div className="list-group list-group-flush border-bottom scrollarea" style={{minHeight: "500px"}}>
       {messages.map(message =>{
        return (
          <div className="list-group-item list-group-item-action py-3 lh-sm">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{message.username}</strong>
          </div>
          <div className="col-10 mb-1 small">{message.message}</div>
        </div>
        )
       }
        
       )}
    
    
    
      
    </div>
  </div>
  <form onSubmit={submit}>
    <input className="form-control" 
    placeholder="Write a message" 
    value={message}
    onChange={e => setMessage(e.target.value)}

    />
  </form>
    </main>
  </>
  );
}

export default Home ;
