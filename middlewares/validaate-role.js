const { response } = require("express");

const isAdminRole = (req, res = response, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "Trying ecxecute role validation before token validation",
    });
  }

  const { role, nombre } = req.user;

  if (role !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${nombre} need Admin authorization for this action`,
    });
  }

  next();
};

module.exports = { isAdminRole };
