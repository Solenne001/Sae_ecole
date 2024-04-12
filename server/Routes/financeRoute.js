const express = require("express")
const financeCtrl= require("../Controllers/financeControllers")

const router= express.Router()

router.get("/select", financeCtrl.getAllimage)


module.exports= router;