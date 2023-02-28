import { useState } from "react"
import Head from "./Head"
import Messages from "./Messages"
import { formatRelative } from "date-fns"
import Form from "./Form"


const Chat = () => {
    const [messages, setMessages] = useState([
        
        
    ])
  return (
    <div className="w-[60vw] chat bg-[#2f343c] rounded-3xl p-2">
        <Head/>
        <hr />
        <Messages messages={messages} />
        <hr />
        <Form setMessages={setMessages}/>
    </div>
  )
}

export default Chat