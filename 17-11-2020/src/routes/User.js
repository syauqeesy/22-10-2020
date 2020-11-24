const express = require('express')
const router = express.Router()
const UserController = require('../controllers/User')

module.exports = router
  .get('/', UserController.getUsers)
  .get('/:id', UserController.getUserById)
  .post('/', UserController.createNewUser)
  .patch('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser)