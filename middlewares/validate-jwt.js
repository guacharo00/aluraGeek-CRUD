const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "Unauthorizd token or empty",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    const user = await User.findById(uid);

    // Verify users exist
    if (!user) {
      return res.status(401).json({
        msg: "No valid token - user eliminated from DB",
      });
    }
    // Verify uid users state is valid
    if (!user.state) {
      return res.status(401).json({
        msg: "No valid token - Unauthorized user or deleted",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid token",
    });
  }
};

module.exports = validateJWT;
