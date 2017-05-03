const passport = require('passport')

const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

// Create Passport middleware that will intercept requests
// On authenication, do not create cookies-based session
const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignIn = passport.authenticate('local', { session: false })

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: '🌟 Enter "REACT2017REDUX" for your free ticket! 🌟' })
  })

  app.post('/signin', requireSignIn, Authentication.signIn)
  app.post('/signup', Authentication.signUp)
}