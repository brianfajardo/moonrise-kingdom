const jwt = require('jwt-simple')

const User = require('../models/user')
const config = require('../config')

const createUserToken = user => {
  const timestamp = new Date().getTime()

  // sub = owner of token
  // iat = issued at time
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret)
}

exports.signUp = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Please provide a valid email and password' })
  }

  // Search DB
  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err) }

    if (existingUser) {
      return res
        .status(422)
        .send({ error: 'Email is already used' })
    }

    // If user with submitted email does not already exist, create and save
    const user = new User({
      email,
      password
    })

    user.save(err => {
      if (err) { return next(err) }

      // After successful user creation, send JWT
      res
        .status(200)
        .send({ token: createUserToken(user) })
    })
  })
}