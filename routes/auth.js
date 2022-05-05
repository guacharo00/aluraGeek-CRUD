const { Router } = require("express");
const { check } = require("express-validator");

const loginController = require("../controller/auth");
const { validEmail } = require("../helpers/db-validator");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/login",
  [
    check("email", "Email or password dot not match").isEmail(),
    check("password", "Email or password dot not match").not().isEmpty(),
  ],
  validateFields,
  loginController
);

module.exports = router;
