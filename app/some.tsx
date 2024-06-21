"use client"
import { useEffect, useState } from 'react'

export default function App () {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([""])
  const [latestMessage, setLatestMessage] = useState<string>("")

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8000');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send(inputMessage);
    }
    newSocket.onmessage = (message) => {
      let newmessage = [...messages, message.data];
      setMessages(newmessage)
      console.log(messages)
      setLatestMessage(message.data)

    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])




  if (!socket) {
    return <h1>Loading</h1>
  }



  return (
    <>
      <h1>Hi</h1>
      <input type="text" onChange={(e) => {
        setInputMessage(e.target.value)
      }} />
      <button onClick={() => { socket?.send(inputMessage) }}>Send Message</button>


        {messages.forEach(data => <h1>{messages}</h1>)}

      <br />
      <div>

        <h1>{latestMessage}</h1>
      </div>
    </>
  )
}