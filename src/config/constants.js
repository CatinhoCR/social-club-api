module.exports = {
  development: {
    uri: process.env.MONGO_LOCAL_CONN_URL,
    md: process.env.MONGO_LOCAL_MD_PORT,
    db: process.env.MONGO_DB_NAME,
    port: process.env.PORT || 3037,
  },
}
