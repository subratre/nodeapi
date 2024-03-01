const express = require("express");
const {
  createProduct,
  allProducts,
  updateSingleProduct,
} = require("../controllers/product");
const isAuthenticate = require("../middleware/isAuthenticate");
const isAuthorize = require("../middleware/isAuthorized");

const router = express.Router();

router
  .route("/create-product")
  .post(isAuthenticate, isAuthorize("admin"), createProduct);
router
  .route("/all-product")
  .get(isAuthenticate, isAuthorize("admin"), allProducts);

router
  .route("/product/:id")
  .put(isAuthenticate, isAuthorize("admin"), updateSingleProduct);

module.exports = router;
