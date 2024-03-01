const express = require("express");
const { createNewUser, userLogin } = require("../controllers/user");
const router = express.Router();

router.route("/new-user").post(createNewUser);

router.route("/user-login").post(userLogin);

module.exports = router;
