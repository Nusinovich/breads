// require mongoose 
const mongoose =require('mongoose')
// creating shorthand for the Schema constructor 
const {Schema} = mongoose

// Schema
const breadSchema = new Schema ({
  name: {type: String, require: true},
  hasGluten: {type: Boolean},
  image: {type: String, default: 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'}
})

//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread