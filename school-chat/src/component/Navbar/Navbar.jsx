import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import {Outlet} from "react-router-dom"
// import logo from "../Assets/logo.png";
const Navbar = () => {

  const [menu , setMenu] = useState("Annonce")

  return (
    <div style={{display : "flex"}} >
       <div className="navbar">
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p>mon App</p>
      </div>
      <div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("Annonces")}}><Link style={{textDecoration : 'none' }} to="/Annonces">Annonces</Link> {menu === "Annonces" ? <hr/> : <span className="underPoint"> _ _ _ _</span> } </li>
          <li onClick={()=>{setMenu("Planning")}}><Link style={{textDecoration : 'none'}} to="/Planning">Planning</Link>{menu === "Planning" ? <hr/> :<span className="underPoint"> _ _ _ _</span>}</li>
          <li onClick={()=>{setMenu("Notes")}}><Link style={{textDecoration : 'none'}} to="/Notes">Notes</Link>{menu === "Notes" ? <hr/> : <span className="underPoint"> _ _ _ _</span> }</li>
          <li onClick={()=>{setMenu("Financement")}}><Link style={{textDecoration : 'none'}} to="/Financement">Financement</Link>{menu === "Financement" ? <hr/> :<span className="underPoint"> _ _ _ _</span> }</li>
          <li onClick={()=>{setMenu("Chat")}}><Link style={{textDecoration : 'none'}} to="/Chat">Chat</Link>{menu === "Chat" ? <hr/> : <span className="underPoint"> _ _ _ _</span>}</li>
        </ul>
      </div>

      {/* <span className="span"></span> */}

      <div className="nav-log-out">
        <button type="submit" ><NavLink to={"/connect"}>Log Out</NavLink></button>
      </div>
    </div>

    <div className="placement">
      {/* <div className="header">
        
      </div> */}
      <div className="content"><Outlet /></div>
      
    </div>
    </div>
   

    

    
  );
};

export default Navbar;
