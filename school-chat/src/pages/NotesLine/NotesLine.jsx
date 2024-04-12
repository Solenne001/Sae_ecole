import React from "react";
import "./NotesLine.css";
import axios from "axios";
import { useState, useEffect } from "react";

const NotesLine = () => {
  let [noteList, setNoteList] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5000/note/select")
    .then((reponse)=>{
      console.log(reponse.data);
      setNoteList(reponse.data.noteListe)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  let noteElt= noteList && noteList.map((note)=>{
    return(
      <article key={note.ID}>
      <p>{note.Matiere}</p>
      <p>{note.Note}</p>
      <p>{note.Coefficient}</p>
      <hr />
      </article>
    )
  })
  return (
    <div className="notePorte">
      <div className="variableLine">
       <p>{noteElt}</p>
      </div>

    </div>
  );
};

export default NotesLine;