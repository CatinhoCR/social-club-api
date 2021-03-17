const express = require('express')
const UserCtrl = require('../controllers/users')
const md_auth = require('../middlewares/auth')
const multipart = require('connect-multiparty')
const md_upload = multipart({ uploadDir: './uploads/users' })

const api = express.Router()

api.get('/user/:id', md_auth.ensureAuth, UserCtrl.getUser)
api.get('/users', md_auth.ensureAuth, UserCtrl.getAllUsers)
api.post('/register', UserCtrl.saveUser)
api.post('/login', UserCtrl.loginUser)
api.delete('/delete-user/:id', md_auth.ensureAuth, UserCtrl.deleteUser)
api.put('/update-user/:id', md_auth.ensureAuth, UserCtrl.updateUser)
api.post(
  '/upload-image-user/:id',
  [md_auth.ensureAuth, md_upload],
  UserCtrl.uploadImage
)
api.get('/get-image-user/:imageFile', UserCtrl.getImageFile)

module.exports = api
