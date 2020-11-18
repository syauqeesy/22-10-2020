require('dotenv').config()

class Database {

  constructor() {
    this.mysql = require('mysql')
    
    return this.createConnection(this.mysql)
  }

  createConnection(mysql) {
    return mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    })
  }

}

module.exports = new Database