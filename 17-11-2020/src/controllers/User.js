const UserModel = require('../models/User')
const responseHelper = require('../helpers/response')

class User {
  
  async getUsers(req, res) {
    try {
      const users = await UserModel.getUsers()
      responseHelper(res, users, 200, null)
    } catch (error) {
      responseHelper(res, {}, 500, error)
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserModel.getUserById(req.params.id)
      if(!user) return responseHelper(res, user, 404, { message: 'User not found' })
      responseHelper(res, user, 200, null)
    } catch (error) {
      responseHelper(res, users, 500, error)
    }
  }

  async createNewUser(req, res) {
    try {
      const results = await UserModel.insertNewUser(req.body)
      responseHelper(res, results, 201, null)
    } catch (error) {
      responseHelper(res, users, 500, error)
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
      responseHelper(res, results, 200, null)
    } catch (error) {
      responseHelper(res, results, 500, error)
    }
  }

  async deleteUser(req, res) {
    try {
      const results = await UserModel.deleteUser(req.params.id)
      responseHelper(res, results, 200, null)
    } catch (error) {
      responseHelper(res, results, 500, null)
    }
  }

}

module.exports = new User