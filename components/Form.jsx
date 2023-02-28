import { formatRelative } from "date-fns"
import { useState } from "react"
import { Configuration, OpenAIApi } from "openai";


const Form = ({setMessages}) => {
    const [message, setMessage] = useState('')
    const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);

      let textOptions = {
        model: "text-davinci-003",
        prompt: 'What is human life expectancy in the United States?',
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      }


    const sendMessage = async (e) => {
        e.preventDefault()

        if (!message) return;
        setMessages((prev) => [
            ...prev,
            {
                msg: message,
                type: 'user',
                time: formatRelative(new Date(), new Date())
            }
        ] )

        setMessage('')

        let object = {...textOptions, prompt: message}
        
        const response = await openai.createCompletion(object);
        setMessages((prev) => [
          ...prev,
          {
              msg: response.data?.choices[0].text,
              type: 'bot',
              time: formatRelative(new Date(), new Date())
          }
      ] )
        console.log(message)
        console.log(response.data?.choices[0].text)
    }

  return (
    <form className="w-[95%] flex m-auto mt-2 relative" action="">
        <input id="inp" className="w-[100%] bg-transparent p-2 rounded-md" type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder='Type your message here...' />
        <button type="submit" className="h-[100%] px-3 bg-white rounded-md text-[#2f343c] hover:opacity-50 active:opacity-100 absolute right-0" onClick={sendMessage}>Send</button>
    </form>
  )
}

export default Form