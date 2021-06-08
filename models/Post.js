const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Please Enter url"],
  },
  title: {
    type: String,
    required: [true, "Please enter Title"],
  },
  content: {
    type: String,
    required: [true, "Please enter content"],
  },
  heading: {
    type: String,
    required: [true, "Please enter Heading"],
  },
});

module.exports = mongoose.model("Post", postSchema);
