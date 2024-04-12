import React from 'react';
import "./Temp.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import style from "../Temp/Temp.css";

const Temp = () => {
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/temp/select")
      .then((response) => {
        console.log(response.data);
        setTempList(response.data.tempListe);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tempElt = tempList.map((emploidutemps) => (
    <article className={style.img_card} key={emploidutemps.ID}>
      <h3>{emploidutemps.Cours}</h3>
      <p>{emploidutemps.Jour}</p>
      <p className={style.text}>{emploidutemps.HeureDebut}</p>
      <p>{emploidutemps.HeureFin}</p>
    </article>
  ));

  return (
    <div className='TempBule'>
      {tempElt}
    </div>
  );
};

export default Temp;
