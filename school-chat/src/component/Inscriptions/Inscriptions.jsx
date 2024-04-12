import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import style from '../Inscriptions/Inscriptions.module.css'

const Inscriptions = () => {
    let nav = useNavigate()
    let [nom, setNom]= useState("")
    let [prenom, setPrenom]= useState("")
    let [email, setEmail]= useState("")
    let [pwd, setPwd]= useState("")
    let [sex, setSex]= useState("")
  return (
    <>
    <section> 
       <form action="" onSubmit={(e)=>{
         e.preventDefault();
         let signup={Nom: nom, Prenom: prenom,  Email: email,  Password: pwd, Sexe: sex}
         console.log(signup);
         axios.post("http://localhost:5000/users/login", signup)
         .then((res)=>{
           console.log(res.data);
           nav("/connect")
         })
         .catch((error)=>{
           console.log(error);
         })
       }}
       className={style.forme}>
           <h1>INSCRIPTIONS</h1>
         <p>
         <label htmlFor="nom">Nom: </label>
         <br />
           <input type="name" onInput={(e)=>{setNom(e.target.value)}}/>
         </p>
         <p>
         <label htmlFor="prenom">Prenom: </label>
         <br />
           <input type="prenom" onInput={(e)=>{setPrenom(e.target.value)}}/>
         </p>
          <p>
          <label htmlFor="email">Email: </label>
          <br />
           <input type="email"  onInput={(e)=>{setEmail(e.target.value)}}/>
          </p>
          <p>
          <label htmlFor="password">Password: </label>
          <br />
           <input type="password" name="" id=""  onInput={(e)=>{setPwd(e.target.value)}}/>
          </p>
          <p>
         <label htmlFor="">Homme</label>
          <input type="checkbox"  onInput={(e)=>{setSex(e.target.value)}}/>
          <br />
         <label htmlFor=''>Femme</label>
         <input type="checkbox" onInput={(e)=>{setSex(e.target.value)}}/>
          </p>
          <p>
           <button type="submit" className={style.valider}>Valider</button>
          </p>
       </form>
    </section>
  </>
  )
}

export default Inscriptions