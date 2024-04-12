import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import style from '../Connexions/Connexions.module.css'
import axios from 'axios'

const Connexions = () => {
    let nav= useNavigate()
    let [email, setEmail]= useState("")
    let [pwd, setPwd]= useState("")
  return (
    <>
    <section>
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
          let connect= {Email: email, Password: pwd}
          console.log(connect);
          axios.post("http://localhost:5000/users/signup", connect)
          .then((res)=>{
            console.log(res.data);
             localStorage.setItem("token", res.data);
            localStorage.setItem("mail", email); 
            nav("/Annonces")
          })
          .catch((error)=>{
            console.log(error);
          })
        }} 
        className={style.formes}>
          <h1>Connecter</h1>
            <p>
              <label htmlFor="email">Email: </label>
            <br />
            <input type="email"  onInput={(e)=>{setEmail(e.target.value)}}/>
            </p>
            
           <p>
             <label htmlFor="password">Password: </label>
            <br />
            <input type="password"  onInput={(e)=>{setPwd(e.target.value)}}/>
           </p>
           <p>
            <button type="submit" className={style.btn_cnt}>Connecter</button>
           </p>
        </form>
    </section>
   </>
  )
}

export default Connexions