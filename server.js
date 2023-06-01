// DEPENDENCIES
const express = require('express')
require('dotenv').config()

// CONFIGURATION
const port = process.env.port
const app = express()

// ROUTES
app.get('/', (req, res)=>{
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads',breadsController)

// LISTEN
app.listen(port,()=>{
    console.log('listening on port', port)
})