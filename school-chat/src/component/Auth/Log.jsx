import style from "./Log.css"
import { useNavigate } from "react-router-dom"



const Log = ({setIdRoom, setUsername, username, idRoom , socket}) =>{
    
    let navigate = useNavigate()
    return(
        <div className={style.formulaire}>
               <h2>Veuillez entrer votre id et username </h2>

    <form onSubmit={(e) => {
        e.preventDefault()
        
        console.log({idRoom, username});
        socket.emit("join_room",idRoom)
        navigate("/message")
    }}>
        <p>
           <label name="id" className={style.id}>id</label>
        </p>       
         <p>
         <input type="number" required onInput={(e)=>{
        setIdRoom(e.target.value)
        }} />
         </p>
           <p>
             <label name="username" >username</label>
            </p>  
            <p>
                <input type="text" required onInput={(e)=>{setUsername(e.target.value)}} /> 
           </p>    
        <p>
        <button type="submit" className={style.val} >valider</button>

        </p>
        
    </form>

        </div>
    )
}
export default Log