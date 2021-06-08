const express = require("express");
const router = express.Router();

const postController = require("../controller/postController");

router.post("/create", postController.createPost);
router.get("/getall", postController.getAllPosts);
router.get("/get/:id", postController.getPostById);
router.delete("/delete/:id", postController.deletePosts);
router.put("/update/:id", postController.updatePost);

module.exports = router;
