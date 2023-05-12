const express = require("express");

const router = express.Router();


// import controller


const {createComment} = require("../controllers/CommentController");
const {createPost,getAllPosts, deletePosts} = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/likeController");


// mapping controller

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
router.delete("/posts/delete",deletePosts);


//export

module.exports = router;