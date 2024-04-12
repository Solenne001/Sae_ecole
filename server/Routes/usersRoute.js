const express= require("express")
const userCtrl= require("../Controllers/usersControllers")
const upload =  require("../multer-config"); 

const router= express.Router()

router.post("/login", userCtrl.signup)
router.post("/signup", userCtrl.login)
/* router.post("/upload", upload, (req,res)=>{
    res.send("Image télécharger avec succes ")
}) */

module.exports= router;