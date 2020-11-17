const UserModel = require('../models/User')

class User {
  
  async getUsers(req, res) {
    try {
      const users = await UserModel.getUsers()
      res.send(users)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserModel.getUserById(req.params.id)
      res.send(user)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  async createNewUser(req, res) {
    try {
      const results = await UserModel.insertNewUser(req.body)
      res.send(results)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserModel.getUserById(req.params.id)

      const data = {
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        age: req.body.age || user.age,
        gender: req.body.gender || user.gender
      }

      const results = await UserModel.updateUser(req.params.id, data)
      res.send(results)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  async deleteUser(req, res) {
    try {
      const results = await UserModel.deleteUser(req.params.id)
      res.send(results)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

}

module.exports = new User