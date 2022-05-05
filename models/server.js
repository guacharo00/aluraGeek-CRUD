const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutes = "/api/users";
    this.authRoutes = "/api/auth";

    // DB_CONNECTION
    this.connectDB();

    // MIDDLEWARES
    this.middlewares();

    // ROUTES
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    //   Cors
    this.app.use(cors());

    // Read and parse body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.authRoutes, require("../routes/auth"));
    this.app.use(this.usersRoutes, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
