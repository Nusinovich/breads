const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
    .then(foundBreads =>{
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:id/edit', express.urlencoded({ extended: true }), (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBreads =>{
    res.render('edit', {
      bread: foundBreads
    })
  })
})


// SHOW Route
breads.get('/:id', express.urlencoded({ extended: true }), (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBreads =>{
    res.render('show', {
      bread: foundBreads
     })
    })
    .catch(Error => {
      res.send('<h1>404: wrong page</h1>')
    })
  })



  //Create
  breads.post('/', express.urlencoded({ extended: true }),(req, res)=>{
    // console.log(req.body)
     if (!req.body.image) {
      req.body.image = undefined
     }
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })

   // UPDATE
  breads.put('/:id', express.urlencoded({ extended: true }), (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })
})


  // DELETE
  breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
    .then(deleteBread => {
    res.status(303).redirect('/breads')
    })
  })


  module.exports = breads
