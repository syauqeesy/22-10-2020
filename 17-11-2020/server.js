require('dotenv').config()

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
      this.app.listen(port, () => console.log(`server started on port ${port}`))
    } catch(error) {
      console.log(error)
    }
  }

  runMiddlewares(middlewares) {
    this.app.use(middlewares.bodyParser.json())
  }

  runRoutes(routes) {
    this.app.use('/user', routes.user)
  }

}

new Server(process.env.PORT)