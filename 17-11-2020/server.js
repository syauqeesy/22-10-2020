const express = require('express')
const routes = {
  User: require('./src/routes/User')
}

class Server {

  constructor(express, port, routes) {
    this.express = express
    this.app = express()
    this.port = port
    this.routes = routes

    this.runServer(port)
    this.runRoutes(this.routes)
  }

  runServer(port) {
    try {
      this.app.listen(port, () => console.log('server started'))
    } catch(error) {
      console.log(error)
    }
  }

  runRoutes(routes) {
    this.app.use('/user', routes.User)
  }

}

new Server(express, 5000, routes)