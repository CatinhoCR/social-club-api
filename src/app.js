require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// @todo: const cookieParser = require('cookie-parser')
const environment = process.env.NODE_ENV; // development
// @todo: const stage = require('./config/constants')[environment];
const logger = require('morgan')



// cargar rutas
var user_routes = require('./routes/user')

const app = express()

// configs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// @todo: Implement Refresh Tokens on Cookies - app.use(cookieParser())

// config http headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization , X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')

  next()
})

// Console log endpoints in dev
if (environment !== 'production') {
  app.use(logger('dev'))
}

// rutas base
app.get('/', function (req, res) {
  res.redirect('/api')
})
app.get('/api', function (req, res) {
  res.status(200).send({ message: 'Bienvenido al API v 0.1 ' })
})
app.use('/api', user_routes)

module.exports = app
