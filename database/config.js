const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN, {
      useNewUrlParser: true,
    });

    console.log("database online");
  } catch (error) {
    console.log(error);
    throw new Error("Error starting database");
  }
};

module.exports = {
  dbConnection,
};
