const { Router } = require("express");
const { check } = require("express-validator");

const {
  deleteProduct,
  updateProduct,
  createProduct,
  getProducts,
  getOneProduct,
} = require("../controller/products");
const { validateProductDB } = require("../helpers/db-validator");
const { isAdminRole } = require("../middlewares/validaate-role");
const { validateFields } = require("../middlewares/validate-fields");
const validateJWT = require("../middlewares/validate-jwt");

const router = Router();

// Get all products - public
router.get("/", getProducts);

// Get one categorie by id - public
router.get(
  "/:id",
  [
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateProductDB),
  ],
  validateFields,
  getOneProduct
);

// Create new product - private
router.post(
  "/",
  [
    validateJWT,
    isAdminRole,
    check("name", "Name is needed").not().isEmpty(),
    check("description", "A description is needed").not().isEmpty(),
    validateFields,
  ],
  createProduct
);

// update product - private
router.put(
  "/:id",
  [
    validateJWT,
    isAdminRole,
    check("name", "Name is required").not().isEmpty(),
    check("description", "A description is needed").not().isEmpty(),
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateProductDB),
    validateFields,
  ],
  updateProduct
);

// Delete product - private (mark state)
router.delete(
  "/:id",
  [
    validateJWT,
    isAdminRole,
    check("id", "No valid id").isMongoId(),
    check("id").custom(validateProductDB),
  ],
  validateFields,
  deleteProduct
);

module.exports = router;
