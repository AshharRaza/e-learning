import { useState } from "react"
import { ChatLoader } from "./chatloader"

export const Chatbot = ({handleAIBtn}) => {

        const [message,setMessage] = useState([])
        const [ans,setAns] = useState([])
  const [loader,setLoader] = useState(false)
  

    const handleQuestion = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const senderMessage = {sender:"You",text:data.question}
        setMessage((prev) => [...prev, senderMessage ]);
        console.log(data.question)
        setLoader(true)
        try {
          
        const res = await fetch('http://localhost:3000/chatbot',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data),
            credentials:"include"
        })
        const answer = await res.json()
        const AiAns = {sender:"ai",text:answer}
        console.log(AiAns)
         setMessage((prev) => [...prev,AiAns]);
        console.log(res)
          
        } catch (error) {
          console.log(error)
          
        }
        finally{
          setLoader(false)

        }

    }

    console.log(message)
    return(
        <>
        <div id="chatWindow" class="m-3 right-6 w-95 h-[500px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp mt-2">
    
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 flex justify-between items-center">
      <h2 class="font-semibold text-lg">AI Assistant</h2>
      <button id="closeChat" class="hover:text-red-200" onClick={handleAIBtn}>❌</button>
    </div>

    
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
  {message.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] shadow-sm transition-all duration-200 ${
          msg.sender === "user"
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
        }`}
      >
      {loader ? <ChatLoader/> :  msg.text}
      </div>
    </div>
  ))}
</div>

      


   
    <form class="p-3 flex border-t bg-white/70" onSubmit={handleQuestion}>
      <input id="userInput" type="text" placeholder="Type your question..." class="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:border-blue-400" name="question"/>
      <button id="sendMessage" class="ml-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-md hover:scale-105 transition-transform">➤</button>
    </form>
  </div>
        </>
    )
}