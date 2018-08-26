const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const orderRouter = require("./routes/order");

const app = express();
app.set("trust proxy", true);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/order", orderRouter);

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}
module.exports = app;
