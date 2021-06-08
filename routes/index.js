const express = require("express");
const router = express.Router();

console.log("router loaded");

router.use("/post", require("./post"));

module.exports = router;
