// DEPENDENCIES
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//will create new page when entering http://localhost:3003/breads
breads.get('/', (req, res)=>{
    res.render('Index', 
    {
        breads: Bread
    }
  )
})



//Will show the bread based on the array in ./models/bread.js
breads.get('/:arrayIndex', (req, res)=>{
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads