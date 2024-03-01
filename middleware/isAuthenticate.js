const jwt = require("jsonwebtoken");
const asyncError = require("../util/asyncError");
const User = require("../models/user");

module.exports = asyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Please login to access the resource" });
  }

  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(401).json({ message: "invalid please login again" });
  }
  req.user = user;
  next();
});
