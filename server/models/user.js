// mongoDB object modelling
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Metadata for model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

// Create/load model class into mongoose
const model = mongoose.model('user', userSchema)

module.exports = model