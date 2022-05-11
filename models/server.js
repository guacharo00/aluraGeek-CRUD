const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
      auth: "/api/auth",
      search: "/api/search",
      categories: "/api/categories",
      products: "/api/products",
      uploads: "/api/uploads",
      users: "/api/users",
    };

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

    // Express file upload
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.path.auth, require("../routes/auth"));
    this.app.use(this.path.search, require("../routes/search"));
    this.app.use(this.path.categories, require("../routes/categories"));
    this.app.use(this.path.products, require("../routes/product"));
    this.app.use(this.path.uploads, require("../routes/uploads"));
    this.app.use(this.path.users, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
