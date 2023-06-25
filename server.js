const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const breadsController = require('./controllers/breads_controller.js')


//configuration:
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//routes:
app.get('/', (req, res) => {
    res.send('Welcome to the World of Bread!')
})
  

// Breads/middleware:
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
//app.use('/breads', breadsController)
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


//Bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('connectd to Mongo DB:', process.env.MONGO_URI)
})



// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  


//Adding Comment Checking Git

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT)
})

