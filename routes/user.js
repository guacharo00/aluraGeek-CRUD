const { Router } = require("express");
const { check } = require("express-validator");
const {
  validRole,
  validEmail,
  validateUserDB,
} = require("../helpers/db-validator");

const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
} = require("../controller/users");

const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/", usersGet);

router.post(
  "/",
  [
    check("nombre", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("email", "Email is already registered").custom(validEmail),
    check("password", "The password needs 6 characters").isLength({ min: 6 }),
    check("role").custom(validRole),
  ],
  validateFields,
  usersPost
);

router.put(
  "/:id",
  [check("id", "No valid id").isMongoId(), check("id").custom(validateUserDB)],
  validateFields,
  usersPut
);

router.delete(
  "/:id",
  [check("id", "No valid id").isMongoId(), check("id").custom(validateUserDB)],
  validateFields,
  usersDelete
);

module.exports = router;
