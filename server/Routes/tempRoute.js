const express = require("express")
const tempCtrl= require("../Controllers/timeControllers")

const router= express.Router()

router.get("/select", tempCtrl.getAllimage)


module.exports= router;