const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutes = "/api/users";

    // MIDDLEWARES
    this.middlewares();

    // ROUTES
    this.routes();
  }

  middlewares() {
    //   Cors
    this.app.use(cors());

    // Read and parse body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersRoutes, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
