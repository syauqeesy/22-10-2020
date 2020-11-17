const express = require('express')
const router = express.Router()
const User = require('../controllers/User')

module.exports = router
  .get('/', User.getUsers)
  .get('/:id', User.getUserById)
  .post('/', User.createNewUser)
  .patch('/:id', User.updateUser)
  .delete('/:id', User.deleteUser)