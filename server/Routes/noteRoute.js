const express = require("express")
const noteCtrl= require("../Controllers/noteControllers")

const router= express.Router()

router.get("/select", noteCtrl.getAllimage)


module.exports= router; 