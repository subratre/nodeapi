const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB)
    .then((res) => console.log(`Db Connected with ${res.connection.host}  `))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
