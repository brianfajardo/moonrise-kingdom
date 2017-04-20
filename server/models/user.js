// mongoDB object modelling
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Metadata for model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

// On save pre hook (pre type = serial), encrypt password
userSchema.pre('save', function (next) {
  // saving user instance
  // Note: using a fat arrow function above will cause
  // the value of `this` === the context of the modal file
  // causing the code to break (won't hash pw)
  const user = this

  // gen salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }

    // hash/encrypt pw with salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }

      user.password = hash
      next()
    })
  })
})

// Create/load model class into mongoose
const model = mongoose.model('user', userSchema)

module.exports = model