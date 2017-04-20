const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

const User = require('../models/user')
const config = require('../config')

// Set up local options
const localOptions = { usernameField: 'email' }

// Create local strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    // Compare `password` to user.password
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })
})

// Setup options for JWT Strategy
// On user request, tell passport to find the JWT
// on the authorization header.

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create new JWT strategy
// payload = decoded JWT token with sub & iat props
// done = callback for passport

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) { return done(err, false) }

    // (no err, found user) : (no err, no user)
    user ? done(null, user) : done(null, false)
  })
})

// Tell Passport to use above strategies
passport.use(jwtLogin)
passport.use(localLogin)