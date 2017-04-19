const User = require('../models/user')

exports.signUp = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  // Search DB
  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err) }

    // Return error if email already used
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already used' })
    }

    // If user with submitted email does not already exist, create and save
    const user = new User({
      email,
      password
    })

    user.save(err => {
      if (err) { return next(err) }

      // Respond to request with created user
      res.json({ success: true })
    })
  })
}