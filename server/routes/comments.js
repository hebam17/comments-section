const commentRoute = require("express").Router();

const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
  upVote,
  downVote,
} = require("../controllers/commentController");

// Read comments and replies
commentRoute.get("/comment/all", getComments);

// Create commnets and Replies
commentRoute.post("/comment", createComment);

// Update a comment and reply
commentRoute.put("/:userId/comment/:commentId", updateComment);

// Delete a comment and reply
commentRoute.delete("/:userId/comment/:commentId", deleteComment);

// upvote a comment
commentRoute.put("/:userId/comment/:commentId/upvote", upVote);

// downvote a comment
commentRoute.put("/:userId/comment/:commentId/upVote", downVote);
module.exports = commentRoute;
