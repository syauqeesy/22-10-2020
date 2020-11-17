class Server {

  constructor(port) {
    this.express = require('express')
    this.app = this.express()
    this.port = port
    this.middlewares = {
      bodyParser: require('body-parser')
    }
    this.routes = {
      user: require('./src/routes/user')
    }

    this.runServer(this.port)
    this.runMiddlewares(this.middlewares)
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
    this.app.use('/user', routes.user)
  }

  runMiddlewares(middlewares) {
    this.app.use(middlewares.bodyParser.json())
  }

}

new Server(5000)