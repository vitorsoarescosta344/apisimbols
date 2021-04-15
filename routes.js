const express = require("express");
const cors = require('cors')


const routes = express.Router()

routes.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

const CriptoController = require("./app/controller/CriptoController")

routes.post("/:token/Criptomoeda", CriptoController.store)
routes.get('/:token/Criptomoeda', CriptoController.index)

module.exports = routes