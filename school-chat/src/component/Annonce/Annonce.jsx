import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import style from '../Annonce/Annonce.css'

const Annonce = () => {
  let [imageList, setImageList] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5000/img/select")
    .then((reponse)=>{
      console.log(reponse.data);
      setImageList(reponse.data.imageListe)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  let imageElt= imageList && imageList.map((annonce)=>{
    return(
    <article className={style.img_card} key={annonce.id_annonce}>
      <h3>{annonce.titre}</h3>
      <p className={style.text}>{annonce.description}</p>
      <img src={annonce.image} alt="" className={style.img} />

    </article>
    )
  })
  return (

<section className={style.image_list}>
  {imageElt}
</section>    )
}

export default Annonce  