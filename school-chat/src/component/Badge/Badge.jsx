import React from 'react';
import "./Badge.css"
import axios from 'axios';
import { useState, useEffect } from 'react';

const Badge = () => {
    const [financeList, setFinanceList]= useState("")
    useEffect(()=>{
        axios.get("http://localhost:5000/finance/select")
        .then((reponse)=>{
            console.log(reponse.data);
            setFinanceList(reponse.data.financeListe)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    let financeElt= financeList && financeList.map((finance)=>{
        return(
            <article key={finance.TransitionID}>
              <p>{finance.NomTransaction}:  
              {finance.Montant}
              </p>
              
            </article>
        )
    })
    return (

        
        <div className='ligne'>
             
                <div className='badge'>
                 

                </div>

            <div className = 'solde'>
                <p>{financeElt}</p>
            </div>
        </div>
    );
};

export default Badge;