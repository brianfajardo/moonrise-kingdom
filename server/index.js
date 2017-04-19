const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const router = require('./router')

const app = express()

// app (express) setup with middleware
// morgan -> log request details, debugging purposes
// bodyParser -> parse incoming request to JSON
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server setup
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on ${port}`))