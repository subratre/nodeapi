const User = require("../models/user");
const asyncError = require("../util/asyncError");
const sendToken = require("../util/sendToken");

exports.createNewUser = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const users = await User.create({ name, email, password });
  if (!users) {
    return res.status(500).json({ message: "something went wrong" });
  }
  sendToken(res, 201, users);
});

exports.userLogin = asyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: "Please enter the valid input" });
  }

  const user = await User.findOne({ email }).select("+password");
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  sendToken(res, 200, user);
});
