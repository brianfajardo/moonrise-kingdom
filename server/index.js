const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./router')

const app = express()

// DB setup
mongoose.connect('mongodb://localhost/auth')

// Express setup with middleware
app.use(morgan('dev'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server setup
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on ${port}`))