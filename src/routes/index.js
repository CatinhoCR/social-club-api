// @todo use this to import all routes here, and then import this into the app.js
const users = require('./users')

module.exports = (router) => {
  users(router);
  return router;
}
