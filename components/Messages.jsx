
const Messages = ({messages}) => {
  return (
    <div className="w-[100%] h-[70vh] overflow-y-scroll">
        {messages.map((message, index) => (
            <Message key={index} {...message} />
        ))}
    </div>
  )
}

export const Message = ({msg, type, time}) => {
  return (
    <div className={`${ type==='bot' ? 'mr-[25%]' : 'ml-[25%]'} `}>
        <div className={`flex flex-col items-start justify-center rounded-xl p-4 my-3 ${type==='bot' ? 'bg-slate-700' : 'bg-[#6b7280]'}`} >
            <p>{msg}</p>
            <span className={`text-xs mt-2 `}><i>{time}</i></span>
        </div>
    </div>
  )
}


export default Messages