// mongoDB object modelling
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

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

// Create a method on the userSchema
userSchema.methods.comparePassword = (candidatePassword, callback) => {
  // `this.password` refers to the user instance
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}

// Create/load model class into mongoose
const model = mongoose.model('user', userSchema)

module.exports = model