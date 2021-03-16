'use strict'

require('dotenv').config()
var mongoose = require('mongoose')
var app = require('./app')
const env = require('./config/constants')

async function main() {
  try {
    mongoose.Promise = global.Promise
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)
    // uri + md + db,
    // process.env.MONGO_LOCAL_CONN_URL + process.env.MONGO_DB_NAME,
    await mongoose.connect(
      env.development.uri + env.development.md + env.development.db,

      () => {
        console.log(
          'La BD funciona ' +
            env.development.uri +
            env.development.md +
            env.development.db
        )
        //+ uri + md + db
        // process.env.MONGO_LOCAL_CONN_URL +
        // process.env.MONGO_DB_NAME
        app.listen(process.env.PORT, () => {
          console.log(`REST API server port: ${process.env.PORT}`)
        })
      }
    )
  } catch (error) {
    console.log(error)
  }
}

main()
