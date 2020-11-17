class User {
  constructor() {
    this.Database = require('../configs/Database')
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.Database.query(`SELECT * FROM users`, (error, results) => {
        if(error) {
          reject(error)
        }

        resolve(results)
      })
    })
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      this.Database.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) =>{
        if(error) {
          reject(error)
        }

        resolve(results[0])
      })
    })
  }

  insertNewUser(data) {
    return new Promise((resolve, reject) => {
      this.Database.query(`INSERT INTO users SET firstName = '${data.firstName}', lastName = '${data.lastName}', age = ${data.age}, gender = '${data.gender}'`, (error, results) => {
        if(error) {
          reject(error)
        }

        resolve(results)
      })
    })
  }

  updateUser(id, data) {
    return new Promise((resolve, reject) => {
      this.Database.query(`UPDATE users SET firstName = '${data.firstName}', lastName = '${data.lastName}', age = ${data.age}, gender = '${data.gender}' WHERE id = ${id}`, (error, results) => {
        if(error) {
          reject(error)
        }

        resolve(results)
      })
    })
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.Database.query(`DELETE FROM users WHERE id = ${id}`, (error, results) => {
        if(error) {
          reject(error)
        }

        resolve(results)
      })
    }) 
  }

}

module.exports = new User