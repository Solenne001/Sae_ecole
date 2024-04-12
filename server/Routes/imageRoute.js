const express = require("express")
const imageCtrl= require("../Controllers/imageController")

const router= express.Router()

router.get("/select", imageCtrl.getAllimage)


module.exports= router;