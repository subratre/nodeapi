module.exports = (res, statusCode, user) => {
  // console.log(res, statusCode, user);

  const token = user.getJsonToken();
  if (!token) {
    return res.status(401).json({ message: "Invalid User or Password" });
  }

  const cookies_options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie("token", token, cookies_options)
    .json({ token });
};
