const express = require("express");
const app = express();

const bodyparser = require("body-parser");

// parsing middlewares
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

//cors

app.use("/", require("./routes/index"));

module.exports = app;
