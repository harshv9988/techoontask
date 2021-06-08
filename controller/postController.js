const Post = require("../models/Post");

module.exports.createPost = async (req, res) => {
  try {
    const { url, title, content, heading } = req.body;
    const post = await Post.create({ url, title, content, heading });

    return res.status(200).json({
      success: true,
      message: "Post Created",
      data: post,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
};

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
};

module.exports.getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "No post found",
      });
    }

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
};

module.exports.deletePosts = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "No post found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post Deleted successfully",
      data: post,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
};

module.exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "No post found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: post,
  });
};
