const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/user')
const config = require('../config')

// Setup options for JWT Strategy
// On user request, tell passport to find the JWT
// on the authorization header.

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secret: config.secret
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

// Tell Passport to use above strategy
passport.user(jwtLogin)