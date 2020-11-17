class Database {
  constructor() {
    this.mysql = require('mysql')
    
    return this.createConnection(this.mysql)
  }

  createConnection(mysql) {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'crud'
    })
  }
}

module.exports = new Database