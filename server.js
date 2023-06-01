// DEPENDENCIES
const express = require('express')
require('dotenv').config()

// CONFIGURATION
const port = process.env.port
const app = express()

// ROUTES configration to port 3003
app.get('/', (req, res)=>{
    res.send('Welcome to an Awesome App about Breads!')
})

//connection between server.js to /controllers/breads_controller
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

// Listen to the port 3003 under .env
app.listen(port,()=>{
    console.log('listening on port', port)
})