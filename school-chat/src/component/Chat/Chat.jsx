import { useState, useEffect } from "react"


const Sms = ({idRoom, username, socket}) =>{
    let [message, setMessage] = useState("abalo")
    let [listMessage, setListMessage] = useState([])


let handleSendMessage = (e)=>{e.preventDefault()
    if(idRoom && username) {
    socket.emit("send_message",{idRoom,username,message})
    let newMessageTab = [...listMessage, {idRoom,username,message}]
    setListMessage(newMessageTab)
    setMessage("")
    }      
    /* socket.emit("send_message",{idRoom,username,message}) */
}

useEffect(()=>{
    socket.on("receive_message", (data)=>{
    console.log(data);
    let newMessageTab = [...listMessage, data]
    setListMessage(newMessageTab)
    })
},[socket, listMessage])
let discussion = listMessage.map((message, index)=>{
    return(
        <div key={index}>
            {message.username}:
            {
                message.message
            }
        </div>
    )
})
    return(
        <div>
            <section>
            <form onSubmit={(e)=>{handleSendMessage(e)}}>
            <textarea value = {message} name="message" type="text" required onChange={(e)=>{
                setMessage(e.target.value)
            }}></textarea>
            <button type="submit" >valider</button>
            </form>
            </section>

            <section>
                {discussion}
            </section>
        </div>
    )
}
export default Sms