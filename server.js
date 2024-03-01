const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const connectDB = require("./util/connnectDB");
const productRoute = require("./routes/product");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//db connection
connectDB();
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", userRoute);

app.use("/api/v1", productRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
