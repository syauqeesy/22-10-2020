const express = require('express')
const router = express.Router()
const UserModel = require('../controllers/User')

module.exports = router
  .get('/', UserModel.getUsers)
  .get('/:id', UserModel.getUserById)
  .post('/', UserModel.createNewUser)
  .patch('/:id', UserModel.updateUser)
  .delete('/:id', UserModel.deleteUser)