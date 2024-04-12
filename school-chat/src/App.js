import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import Header from './component/Header/Header';
 */import Navbar from './component/Navbar/Navbar';
import Annonces from './pages/Annonces';
import Notes from './pages/Notes';
import Planning from './pages/Planning';
import Financement from './pages/Financement';
import "./encapsule.css"
import Inscriptions from './component/Inscriptions/Inscriptions';
import Connexions from './component/Connexions/Connexions';
import Log from './component/Auth/Log';
import Chat from './component/Chat/Chat';
import io from"socket.io-client"
import { useState } from "react"

const socket = io.connect("http://192.168.0.106:3000")

function App() {
  let [idRoom, setIdRoom] = useState("")
  let [username, setUsername] =useState("")
  return (
    <div>
      
      <BrowserRouter>
      
     
          
          <Routes>
            <Route index element={<Inscriptions/>}/>
            <Route path="/connect" element={<Connexions/>}/>
          <Route path="/" element={<Navbar />} >
          <Route path="/Annonces" element={<Annonces />} />
          <Route path="/Chat" element={<Log idRoom={idRoom} setIdRoom={setIdRoom} username={username} setUsername={setUsername} socket={socket}/>} />
          <Route path="/Message" element={<Chat idRoom={idRoom} username={username} socket={socket}/>}/>
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/Financement" element={<Financement />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
