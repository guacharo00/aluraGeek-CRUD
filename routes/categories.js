const { Router } = require("express");
const { check } = require("express-validator");

const {
  deleteCategory,
  updateCategory,
  createCategory,
  getCategories,
  getOneCategory,
} = require("../controller/categories");
const { validateCategoryDB } = require("../helpers/db-validator");
const { isAdminRole } = require("../middlewares/validaate-role");
const { validateFields } = require("../middlewares/validate-fields");
const validateJWT = require("../middlewares/validate-jwt");

const router = Router();

// Get all categories - public
router.get("/", getCategories);

// Get one categorie by id - public
router.get(
  "/:id",
  [
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateCategoryDB),
  ],
  validateFields,
  getOneCategory
);

// Create new categorie - private
router.post(
  "/",
  [
    validateJWT,
    isAdminRole,
    check("name", "Name is needed").not().isEmpty(),
    validateFields,
  ],
  createCategory
);

// update categorie - private
router.put(
  "/:id",
  [
    validateJWT,
    isAdminRole,
    check("name", "Name is required").not().isEmpty(),
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateCategoryDB),
    validateFields,
  ],
  updateCategory
);

// Delete categorie - private (mark state)
router.delete(
  "/:id",
  [
    validateJWT,
    isAdminRole,
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateCategoryDB),
  ],
  validateFields,
  deleteCategory
);

module.exports = router;
