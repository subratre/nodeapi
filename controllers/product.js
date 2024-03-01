const asyncError = require("../util/asyncError");
const Product = require("../models/product");

exports.createProduct = asyncError(async (req, res, next) => {
  const { _id } = req.user;
  req.body.user = _id;
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

exports.allProducts = asyncError(async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

exports.updateSingleProduct = asyncError(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

  console.log(product);
});
