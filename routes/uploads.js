const { Router } = require("express");
const { check } = require("express-validator");
const {
  loadFiles,
  updateImage,
  getFiles,
  updateImageCloudinary,
} = require("../controller/uploads");
const { validCollections } = require("../helpers/db-validator");
const { validateFields } = require("../middlewares/validate-fields");
const { validateFiles } = require("../middlewares/validate-file");
const validateJWT = require("../middlewares/validate-jwt");

const router = Router();

router.get(
  "/:collection/:id",
  [
    check("id", "No valid id").isMongoId(),
    check("collection").custom((c) =>
      validCollections(c, ["users", "products"])
    ),
    validateFields,
  ],
  getFiles
);

router.post("/", loadFiles);

router.put(
  "/:collection/:id",
  [
    validateFiles,
    check("id", "No valid id").isMongoId(),
    check("collection").custom((c) =>
      validCollections(c, ["users", "products"])
    ),
    validateFields,
  ],
  // updateImage
  updateImageCloudinary
);

module.exports = router;
