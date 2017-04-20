const passport = require('passport')

const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

// Create Passport middleware that will intercept requests
// On authenication, do not create cookies-based session
const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ Gandalf: 'You shall pass' })
  })

  app.post('/signup', Authentication.signUp)

}